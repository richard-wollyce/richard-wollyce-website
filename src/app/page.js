import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Certifications from '@/components/Certifications/Certifications';
import Experience from '@/components/Experience/Experience';
import SelectedWork from '@/components/SelectedWork/SelectedWork';
import TechnicalStrength from '@/components/TechnicalStrength/TechnicalStrength';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import RevealObserver from '@/components/RevealObserver/RevealObserver';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.contentLayer}>
        <Navbar />
        <main id="main-content" className={styles.main}>
          <Hero />
          <SelectedWork />
          <Experience />
          <TechnicalStrength />
          <About />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
      <RevealObserver />
    </>
  );
}
