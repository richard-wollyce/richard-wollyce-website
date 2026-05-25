import { about } from '@/data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.layout}>
          <header className={styles.header}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.accentBar} />
          </header>

          <div className={styles.content}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
