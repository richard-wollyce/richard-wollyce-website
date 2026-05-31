'use client';

import { useEffect } from 'react';
import styles from './ParticleBackground.module.css';

const CONTAINER_ID = 'site-particles';

function readThemeColor(name, fallback) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

function buildParticlesConfig() {
  const accent = readThemeColor('--accent', '#B8764D');
  const supportAccent = readThemeColor('--support-accent', '#6B8CAE');
  const border = readThemeColor('--border', '#E5E0D8');

  return {
    particles: {
      number: {
        value: 54,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: [accent, supportAccent, border],
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: accent,
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.24,
        random: true,
        anim: {
          enable: true,
          speed: 0.35,
          opacity_min: 0.08,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 145,
        color: accent,
        opacity: 0.11,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.55,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 0.18,
          },
        },
        bubble: {
          distance: 180,
          size: 5,
          duration: 2,
          opacity: 0.22,
          speed: 3,
        },
        repulse: {
          distance: 120,
          duration: 0.4,
        },
        push: {
          particles_nb: 2,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
}

function clearParticles() {
  const existingInstances = Array.isArray(window.pJSDom) ? [...window.pJSDom] : [];

  existingInstances.forEach((instance) => {
    instance?.pJS?.fn?.vendors?.destroypJS?.();
  });

  document.querySelectorAll(`#${CONTAINER_ID} canvas`).forEach((canvas) => {
    canvas.remove();
  });

  window.pJSDom = [];
}

export default function ParticleBackground() {
  useEffect(() => {
    let cancelled = false;
    let initialized = false;
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const initializeParticles = async () => {
      if (cancelled || reducedMotionQuery.matches) {
        clearParticles();
        return;
      }

      await import('particles.js');

      if (cancelled || typeof window.particlesJS !== 'function') {
        return;
      }

      clearParticles();
      window.particlesJS(CONTAINER_ID, buildParticlesConfig());
      initialized = true;
    };

    const refreshParticles = () => {
      if (!initialized && !reducedMotionQuery.matches) {
        initializeParticles();
        return;
      }

      window.requestAnimationFrame(() => {
        initializeParticles();
      });
    };

    const themeObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.attributeName === 'data-theme')) {
        refreshParticles();
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    reducedMotionQuery.addEventListener('change', refreshParticles);
    initializeParticles();

    return () => {
      cancelled = true;
      themeObserver.disconnect();
      reducedMotionQuery.removeEventListener('change', refreshParticles);
      clearParticles();
    };
  }, []);

  return <div id={CONTAINER_ID} className={styles.particles} aria-hidden="true" />;
}
