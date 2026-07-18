'use client';

import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground/ParticleBackground';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Certifications from '@/components/Certifications/Certifications';
import Experience from '@/components/Experience/Experience';
import SelectedWork from '@/components/SelectedWork/SelectedWork';
import TechnicalStrength from '@/components/TechnicalStrength/TechnicalStrength';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      reveals.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <div className={styles.contentLayer}>
        <Navbar />
        <main id="main-content" className={styles.main}>
          <Hero />
          <Certifications />
          <Experience />
          <SelectedWork />
          <TechnicalStrength />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
