import { projects } from '@/data/content';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  return (
    <section className={`section ${styles.selectedWork}`} id="work">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionSubtitle}>
            Relevant technical project currently highlighted in the curriculum.
          </p>
        </header>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.id} className={`${styles.card} reveal`}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <h3 className={styles.projectName}>{project.name}</h3>
                </div>
                <div className={styles.links}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                      aria-label={`Visit ${project.name} live site`}
                    >
                      Access Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                      aria-label={`View ${project.name} repository on GitHub`}
                    >
                      Repository
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className={styles.summary}>{project.summary}</p>

              <ul className={styles.highlights}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className={styles.highlight}>
                    <span className={styles.highlightIcon}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.footer}>
                <h4 className={styles.stackLabel}>Tech Stack</h4>
                <div className={styles.pills}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.pill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
