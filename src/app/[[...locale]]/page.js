'use client';

import { useLocale } from '@/i18n/LocaleProvider';
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
import LanguageModal from '@/components/LanguageModal/LanguageModal';
import styles from './page.module.css';

function SkipLink() {
  const { t } = useLocale();
  return (
    <a href="#main-content" className="skip-to-content">
      {t.nav.skipToContent}
    </a>
  );
}

// The locale comes from the route: the layout above reads the [[...locale]]
// param and mounts LocaleProvider with it, so this page only consumes it.
export default function Home() {
  return (
    <>
      <SkipLink />
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
      <LanguageModal />
    </>
  );
}
