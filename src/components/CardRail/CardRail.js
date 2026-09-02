'use client';

import { Children, useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import styles from './CardRail.module.css';

function subscribeToNothing() {
  return () => {};
}

/*
 * A horizontal rail that loops forever, driven by native scrolling.
 *
 * The loop is triplication, not transforms. The card list is rendered three
 * times, the rail starts parked on the middle copy, and whenever the scroll
 * position drifts into the first or third copy it is moved by exactly one copy
 * width. The three copies are identical, so the jump lands on the same pixels
 * and is invisible. The reason this beats a transform carousel: the scroller is
 * the platform's own, so touch inertia, two finger trackpad scroll and momentum
 * come for free on every device, and if the JavaScript never runs the rail is
 * still an ordinary horizontal scroller with every card reachable.
 */

// Writing the start position in a layout effect puts it in place before the
// browser paints, so the rail never shows a frame parked on the first copy.
// There is no layout to read on the server, so the effect degrades to useEffect
// and React does not warn about it.
const useStartPositionEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// How far the pointer must travel before we call it a drag rather than a click.
const DRAG_SLOP_PX = 5;

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children Cards. Each child becomes one rail item.
 * @param {string} props.sectionName Already localised section name, for example t.work.title.
 *   The scroll container's aria-label is built from it as t.rail.regionLabel(sectionName).
 * @param {string} [props.itemWidth] Any CSS length for one card, for example
 *   'clamp(260px, 78vw, 340px)'. Cards never shrink below it.
 * @param {string} [props.gap] Any CSS length for the space between cards.
 * @param {string} [props.className] Extra class on the rail root, for section level spacing.
 */
export default function CardRail({
  children,
  sectionName,
  itemWidth = 'clamp(260px, 78vw, 340px)',
  gap = 'var(--space-6)',
  className = '',
}) {
  const { t } = useLocale();

  const viewportRef = useRef(null);
  const firstCopyRef = useRef(null);
  const secondCopyRef = useRef(null);

  // Drag state lives in a ref, not in state: pointermove fires at the display's
  // refresh rate and a re render per frame would drop the rail's smoothness.
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });
  const [grabbing, setGrabbing] = useState(false);

  // Which card is parked in the middle of the viewport, 0 based within one copy.
  // Coalesced through a frame so a drag does not re render on every pointermove.
  const [activeIndex, setActiveIndex] = useState(0);
  const counterFrame = useRef(0);

  // True while an arrow driven smooth scroll is in flight. The loop jump must
  // stand down for its duration, see normaliseFor below.
  const smoothing = useRef(false);
  const smoothingTimer = useRef(0);

  // The padding copies are hidden from assistive tech but stay CLICKABLE.
  //
  // `inert` was the obvious choice and it is the wrong one here, because it
  // kills pointer events too. The loop's own arithmetic guarantees a padding
  // copy is always partly on screen: the position band is one copy wide and the
  // visible window is narrower than a copy, so there is no offset at which only
  // the live copy shows. With `inert` those visible cards are dead to the
  // mouse, and in the contact rail every card is a link, so a visitor clicks
  // their own email address and nothing happens.
  //
  // So: `aria-hidden` for the announcement, and tabindex -1 driven from an
  // effect for the tab order. A screen reader hears each card once, Tab walks
  // one list, and every card on screen works when clicked. The known cost is
  // that aria-hidden sits on visible content, which is the accepted trade in
  // every looping carousel and is strictly better than visible dead controls.
  //
  // Both are gated on mount so the no-JS render leaves all three copies live.
  const cards = Children.toArray(children);
  const cardCount = cards.length;

  // false while the server HTML is being hydrated, true on every render
  // after that. useSyncExternalStore is how React exposes that boundary
  // without a setState inside an effect.
  const hydrated = useSyncExternalStore(subscribeToNothing, () => true, () => false);

  const leadCopyRef = firstCopyRef;
  const trailCopyRef = useRef(null);

  // Focusables inside the padding copies are pulled out of the tab order here
  // rather than through `inert`, so they keep working for the mouse.
  useEffect(() => {
    if (!hydrated) return;
    const FOCUSABLE = 'a[href], button, input, select, textarea, [tabindex]';
    [leadCopyRef.current, trailCopyRef.current].forEach((copyEl) => {
      if (!copyEl) return;
      copyEl.querySelectorAll(FOCUSABLE).forEach((node) => {
        node.setAttribute('tabindex', '-1');
      });
    });
  }, [hydrated, leadCopyRef, trailCopyRef, cardCount]);

  // Both distances are read from the DOM rather than computed from the props,
  // because the gap sits between the copies as well as between the cards. Taking
  // the difference of two offsetLeft values includes it exactly, whatever unit
  // the caller passed.
  const measure = useCallback(() => {
    const first = firstCopyRef.current;
    const second = secondCopyRef.current;
    if (!first || !second) return { copy: 0, step: 0 };

    const copy = second.offsetLeft - first.offsetLeft;
    const items = first.children;
    let step = 0;
    if (items.length > 1) {
      step = items[1].offsetLeft - items[0].offsetLeft;
    } else if (items.length === 1) {
      step = items[0].offsetWidth;
    }

    return { copy, step };
  }, []);

  // Assigning scrollLeft flushes layout and reads whatever scroll-behavior is in
  // force at that moment, so forcing 'auto' around the write keeps the loop jump
  // instant even if something upstream asks for smooth scrolling.
  const jumpTo = useCallback((write) => {
    const el = viewportRef.current;
    if (!el) return;
    const previous = el.style.scrollBehavior;
    el.style.scrollBehavior = 'auto';
    write(el);
    el.style.scrollBehavior = previous;
  }, []);

  const keepInMiddleCopy = useCallback(() => {
    const el = viewportRef.current;
    const { copy } = measure();
    if (!el || copy <= 0) return;

    // A jump landing mid animation is worse than no jump. scrollBy captured an
    // absolute target when it started and keeps travelling to it, so the jump is
    // simply undone and the rail appears to refuse the click. scrollByCard
    // normalises the position before it starts instead.
    if (smoothing.current) return;

    let delta = 0;
    if (el.scrollLeft < copy * 0.5) delta = copy;
    else if (el.scrollLeft > copy * 1.5) delta = -copy;
    if (delta === 0) return;

    jumpTo((node) => {
      node.scrollLeft += delta;
    });

    // A drag in flight anchored itself to the pre jump position. Shift that
    // anchor by the same amount, or the next pointermove yanks the rail back a
    // whole copy under the cursor.
    if (drag.current.active) drag.current.startScrollLeft += delta;
  }, [measure, jumpTo]);

  // The counter names the card in the MIDDLE of the viewport, not the first one
  // visible, because that is the card the reader is looking at. Distances are
  // folded by one copy width, so whichever of the three copies is on screen maps
  // back to the same index in the live copy and the number never jumps at a seam.
  const updateActiveIndex = useCallback(() => {
    const el = viewportRef.current;
    const live = secondCopyRef.current;
    if (!el || !live) return;

    const { copy } = measure();
    if (copy <= 0) return;

    const viewportCentre = el.scrollLeft + el.clientWidth / 2;
    const items = live.children;
    let best = 0;
    let bestDistance = Infinity;

    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      const itemCentre = item.offsetLeft + item.offsetWidth / 2;

      // Fold into the range -copy/2 .. +copy/2 so copy identity drops out.
      let delta = (((viewportCentre - itemCentre) % copy) + copy) % copy;
      if (delta > copy / 2) delta -= copy;

      const distance = Math.abs(delta);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    }

    setActiveIndex((previous) => (previous === best ? previous : best));
  }, [measure]);

  const handleScroll = useCallback(() => {
    keepInMiddleCopy();
    if (counterFrame.current) return;
    counterFrame.current = requestAnimationFrame(() => {
      counterFrame.current = 0;
      updateActiveIndex();
    });
  }, [keepInMiddleCopy, updateActiveIndex]);

  useEffect(() => () => {
    if (counterFrame.current) cancelAnimationFrame(counterFrame.current);
    window.clearTimeout(smoothingTimer.current);
  }, []);

  // Shift the parked position by whole copies so that the animation about to
  // start lands inside the band without ever needing a jump on the way. The
  // copies are identical, so the shift is invisible, and doing it first is what
  // stops the loop from fighting the browser's own scroll animation.
  const normaliseFor = useCallback(
    (delta) => {
      const el = viewportRef.current;
      const { copy } = measure();
      if (!el || copy <= 0) return;

      let shift = 0;
      const target = el.scrollLeft + delta;
      while (target + shift > copy * 1.5) shift -= copy;
      while (target + shift < copy * 0.5) shift += copy;
      if (shift === 0) return;

      jumpTo((node) => {
        node.scrollLeft += shift;
      });
    },
    [measure, jumpTo],
  );

  const scrollByCard = useCallback(
    (direction) => {
      const el = viewportRef.current;
      const { step } = measure();
      if (!el || step <= 0) return;

      const delta = direction * step;
      normaliseFor(delta);

      const instant = prefersReducedMotion();
      if (!instant) {
        smoothing.current = true;
        window.clearTimeout(smoothingTimer.current);
        // Long enough to outlast the browser's smooth scroll, short enough that
        // a drag straight after an arrow click still gets its loop back.
        smoothingTimer.current = window.setTimeout(() => {
          smoothing.current = false;
        }, 700);
      }

      el.scrollBy({ left: delta, behavior: instant ? 'auto' : 'smooth' });
    },
    [measure, normaliseFor],
  );

  useStartPositionEffect(() => {
    const { copy } = measure();
    if (copy <= 0) return;
    jumpTo((node) => {
      node.scrollLeft = copy;
    });
    updateActiveIndex();
  }, [measure, jumpTo, updateActiveIndex, cardCount]);

  useEffect(() => {
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      // Mobile browsers fire resize when the URL bar hides, which changes height
      // only. Card geometry follows width, so ignore the rest.
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;

      const { copy } = measure();
      if (copy <= 0) return;
      // Re centre rather than preserve the reading position: item widths are
      // viewport relative, so the old offset means nothing at the new width.
      jumpTo((node) => {
        node.scrollLeft = copy;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [measure, jumpTo]);

  // Mouse only, deliberately. Touch dragging is already native through
  // overflow-x: auto and comes with the platform's own inertia. A JS drag
  // handler on touch replaces that inertia with a worse one and fights the
  // browser, which is the classic hand rolled carousel bug.
  const handlePointerDown = (event) => {
    // Left button only. A right press would open the context menu without
    // delivering pointerup, leaving the drag stuck with snapping disabled.
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const el = viewportRef.current;
    if (!el) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: el.scrollLeft,
      moved: false,
    };
    // Snapping is suspended for the length of the drag. A drag is a stream of
    // programmatic scroll writes, and the browser re snaps after every one of
    // them, so with snapping left on the rail sticks to the nearest card and
    // refuses to follow the cursor. Verified in Chrome: without this, a 60px
    // drag moved the rail by 0px. It is restored on release, which lets the
    // rail settle onto a card.
    el.style.scrollSnapType = 'none';

    // Capture keeps the drag alive when the cursor leaves the rail. It is not
    // worth losing the drag over: a pointer the browser no longer considers
    // active throws here, and the handlers below still work uncaptured.
    try {
      el.setPointerCapture(event.pointerId);
    } catch {
      // No capture. Moves outside the rail are lost, moves inside still count.
    }
    setGrabbing(true);
  };

  const handlePointerMove = (event) => {
    if (!drag.current.active || event.pointerType !== 'mouse') return;
    const el = viewportRef.current;
    if (!el) return;

    const travelled = event.clientX - drag.current.startX;
    if (Math.abs(travelled) > DRAG_SLOP_PX) drag.current.moved = true;
    el.scrollLeft = drag.current.startScrollLeft - travelled;
  };

  const endDrag = (event) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setGrabbing(false);

    const el = viewportRef.current;
    if (el) el.style.scrollSnapType = '';

    try {
      if (el && el.hasPointerCapture(event.pointerId)) {
        el.releasePointerCapture(event.pointerId);
      }
    } catch {
      // The pointer was already gone. Nothing left to release.
    }
  };

  // Without this, dragging across a card fires the link inside it on release.
  // Capture phase, so it runs before any handler a card attached to itself. The
  // flag is cleared on the next pointerdown, which always precedes a click, so a
  // drag that ended off the rail cannot swallow a later genuine click.
  const suppressClickAfterDrag = (event) => {
    if (!drag.current.moved) return;
    drag.current.moved = false;
    event.preventDefault();
    event.stopPropagation();
  };

  const handleKeyDown = (event) => {
    // Only when the scroller itself has focus. Without this, a card link that
    // has focus loses the arrow keys to the rail and slides out from under the
    // reader who was tabbing through it.
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollByCard(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByCard(-1);
    }
  };

  // Native link and image dragging would otherwise hijack a rail drag.
  const handleDragStart = (event) => {
    if (drag.current.active) event.preventDefault();
  };

  if (cardCount === 0) return null;

  const renderCopy = (copyId) =>
    cards.map((card, index) => (
      <div key={`${copyId}-${index}`} className={styles.item}>
        {card}
      </div>
    ));

  return (
    <div
      className={`${styles.rail} ${className}`.trim()}
      style={{ '--rail-item-width': itemWidth, '--rail-gap': gap }}
    >
      <div className={styles.controls}>
        <p className={styles.counter} role="status" aria-live="polite">
          <span aria-hidden="true">
            {activeIndex + 1}/{cardCount}
          </span>
          <span className={styles.counterLabel}>
            {t.rail.position(activeIndex + 1, cardCount)}
          </span>
        </p>

        <div className={styles.arrows}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByCard(-1)}
          aria-label={t.rail.previous}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByCard(1)}
          aria-label={t.rail.next}
        >
          <ChevronRight />
        </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={`${styles.viewport} ${grabbing ? styles.grabbing : ''}`.trim()}
        role="group"
        aria-label={t.rail.regionLabel(sectionName)}
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={suppressClickAfterDrag}
        onDragStart={handleDragStart}
      >
        {/*
          The two padding copies carry inert, so a screen reader announces each
          card once and Tab walks one list instead of three. aria-hidden rides
          along for the browsers that predate inert, which hide the copies from
          assistive tech even where they still allow Tab into them.
        */}
        <div
          className={styles.copy}
          ref={firstCopyRef}
          aria-hidden={hydrated ? 'true' : undefined}
        >
          {renderCopy('lead')}
        </div>
        <div className={styles.copy} ref={secondCopyRef}>
          {renderCopy('live')}
        </div>
        <div
          className={styles.copy}
          ref={trailCopyRef}
          aria-hidden={hydrated ? 'true' : undefined}
        >
          {renderCopy('trail')}
        </div>
      </div>
    </div>
  );
}
