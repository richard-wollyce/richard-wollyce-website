'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import styles from './UnicornScene.module.css';

const PROJECT_ID = 'vW6LSKmFeRkV42794kQv';
const SDK_URL = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.7/dist/unicornStudio.umd.js';
const SDK_INTEGRITY = 'sha384-14HjVRDtBcQ7rEVDgWtdziQVa+NKHxCpaU1mcbxFnSE0g2DE0kuowLhWdcM4qiN5';
const EMBEDDED_TITLE_LAYER = 'f569d571-3250-49dd-ba21-f7c5490e94ee';
const CONTAINER_ID = 'unicorn-hero-scene';

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function getProfile() {
  const interactive = window.matchMedia('(min-width: 1200px) and (hover: hover) and (pointer: fine)').matches;
  const mobile = window.matchMedia('(max-width: 767px)').matches;

  if (interactive) {
    return {
      key: 'interactive',
      fps: 60,
      scale: 0.75,
      dpi: Math.min(window.devicePixelRatio || 1, 1.25),
      mouseDisabled: false,
    };
  }

  return {
    key: mobile ? 'mobile-ambient' : 'tablet-ambient',
    fps: 30,
    scale: mobile ? 0.5 : 0.65,
    dpi: 1,
    mouseDisabled: true,
  };
}

export default function UnicornScene() {
  const [enabled, setEnabled] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState('idle');
  const sceneRef = useRef(null);
  const generationRef = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection?.saveData === true;

    if (reducedMotion || saveData || !supportsWebGL()) {
      const fallbackFrame = requestAnimationFrame(() => setStatus('fallback'));
      return () => cancelAnimationFrame(fallbackFrame);
    }

    const updateProfile = () => {
      const next = getProfile();
      setProfile((current) => (
        current?.key === next.key
        && current?.dpi === next.dpi
        && current?.scale === next.scale
        && current?.fps === next.fps
          ? current
          : next
      ));
    };
    const desktopQuery = window.matchMedia('(min-width: 1200px) and (hover: hover) and (pointer: fine)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const initialFrame = requestAnimationFrame(() => {
      setEnabled(true);
      updateProfile();
      if (window.UnicornStudio?.addScene) setSdkReady(true);
    });

    desktopQuery.addEventListener('change', updateProfile);
    mobileQuery.addEventListener('change', updateProfile);
    window.addEventListener('resize', updateProfile, { passive: true });

    return () => {
      cancelAnimationFrame(initialFrame);
      desktopQuery.removeEventListener('change', updateProfile);
      mobileQuery.removeEventListener('change', updateProfile);
      window.removeEventListener('resize', updateProfile);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !sdkReady || !profile || !window.UnicornStudio?.addScene) return undefined;

    const generation = generationRef.current + 1;
    generationRef.current = generation;
    let cancelled = false;
    let abandoned = false;
    let timeoutId;

    const destroyScene = (scene) => {
      try {
        scene?.destroy?.();
      } catch {
        // The scene is decorative; a static hero remains available.
      }
    };

    const initialize = async () => {
      setStatus('loading');
      destroyScene(sceneRef.current);
      sceneRef.current = null;

      if (profile.mouseDisabled) {
        window.UnicornStudio.setScroll?.(0);
      } else {
        window.UnicornStudio.useNativeScroll?.();
      }

      const scenePromise = window.UnicornStudio.addScene({
        elementId: CONTAINER_ID,
        projectId: PROJECT_ID,
        production: true,
        lazyLoad: false,
        fixed: false,
        scale: profile.scale,
        dpi: profile.dpi,
        fps: profile.fps,
        interactivity: {
          mouse: {
            disableMobile: true,
            disabled: profile.mouseDisabled,
          },
        },
      });

      scenePromise.then((lateScene) => {
        if (cancelled || abandoned || generation !== generationRef.current) destroyScene(lateScene);
      }).catch(() => {});

      try {
        const scene = await Promise.race([
          scenePromise,
          new Promise((_, reject) => {
            timeoutId = window.setTimeout(() => reject(new Error('Unicorn scene timed out')), 8000);
          }),
        ]);

        window.clearTimeout(timeoutId);

        if (cancelled || generation !== generationRef.current) {
          destroyScene(scene);
          return;
        }

        const embeddedTitle = scene.getLayer?.('text') ?? scene.getLayer?.(EMBEDDED_TITLE_LAYER);
        embeddedTitle?.hide?.();
        sceneRef.current = scene;
        setStatus('ready');

        requestAnimationFrame(() => {
          scene.resize?.();
          document.querySelectorAll(`#${CONTAINER_ID} canvas`).forEach((canvas) => {
            canvas.setAttribute('aria-hidden', 'true');
            canvas.setAttribute('role', 'presentation');
            canvas.tabIndex = -1;
          });
        });
      } catch {
        abandoned = true;
        if (!cancelled) {
          window.UnicornStudio?.useNativeScroll?.();
          setStatus('fallback');
        }
      }
    };

    initialize();

    return () => {
      cancelled = true;
      generationRef.current += 1;
      window.clearTimeout(timeoutId);
      destroyScene(sceneRef.current);
      sceneRef.current = null;
      window.UnicornStudio?.useNativeScroll?.();
    };
  }, [enabled, sdkReady, profile]);

  return (
    <>
      {enabled && (
        <Script
          id="unicorn-studio-sdk"
          src={SDK_URL}
          strategy="afterInteractive"
          integrity={SDK_INTEGRITY}
          crossOrigin="anonymous"
          onReady={() => setSdkReady(true)}
          onError={() => setStatus('fallback')}
        />
      )}
      <div
        id={CONTAINER_ID}
        className={styles.scene}
        data-profile={profile?.key ?? 'none'}
        data-state={status}
        aria-hidden="true"
      />
    </>
  );
}
