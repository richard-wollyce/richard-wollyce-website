import { projects } from '@/data/content';
import styles from './SelectedWork.module.css';

function ProjectLinks({ project }) {
  if (!project.link && !project.repo) {
    return null;
  }

  return (
    <div className={styles.projectLinks} aria-label={`${project.name} links`}>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} live site (opens in a new tab)`}
        >
          Access project
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} repository (opens in a new tab)`}
        >
          View repository
        </a>
      )}
    </div>
  );
}

function ProjectStack({ stack, labelId }) {
  return (
    <div className={styles.stackBlock}>
      <h4 className={styles.stackLabel} id={labelId}>
        Capabilities &amp; tools
      </h4>
      <ul className={styles.stackList} aria-labelledby={labelId}>
        {stack.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

function HighlightLedger({ highlights, className = '' }) {
  return (
    <ol className={`${styles.highlightLedger} ${className}`}>
      {highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ol>
  );
}

function FeaturedCase({ project }) {
  if (!project) {
    return null;
  }

  const titleId = `${project.id}-title`;

  return (
    <article className={`${styles.featuredCase} reveal`} aria-labelledby={titleId}>
      <header className={styles.featuredHeader}>
        <p className={styles.caseNumber} aria-hidden="true">01</p>
        <div>
          <p className={styles.projectCategory}>{project.category}</p>
          <h3 className={styles.featuredTitle} id={titleId}>{project.name}</h3>
        </div>
        <ProjectLinks project={project} />
      </header>

      <div className={styles.featuredNarrative}>
        <p className={styles.featuredSummary}>{project.summary}</p>
        <HighlightLedger highlights={project.highlights} />
      </div>

      <ProjectStack stack={project.stack} labelId={`${project.id}-stack`} />
    </article>
  );
}

function PlatformCase({ project }) {
  if (!project) {
    return null;
  }

  const titleId = `${project.id}-title`;

  return (
    <article className={`${styles.platformCase} reveal`} aria-labelledby={titleId}>
      <div className={styles.platformIdentity}>
        <p className={styles.caseNumber} aria-hidden="true">02</p>
        <p className={styles.projectCategory}>{project.category}</p>
        <h3 className={styles.platformTitle} id={titleId}>{project.name}</h3>
        <p className={styles.platformSummary}>{project.summary}</p>
        <ProjectLinks project={project} />
      </div>

      <div className={styles.platformSystem}>
        <p className={styles.systemLabel}>Shared product system</p>
        <HighlightLedger highlights={project.highlights} className={styles.platformHighlights} />
        <ProjectStack stack={project.stack} labelId={`${project.id}-stack`} />
      </div>
    </article>
  );
}

function AdditionalCase({ project, index }) {
  const titleId = `${project.id}-title`;

  return (
    <article className={`${styles.additionalCase} reveal`} aria-labelledby={titleId}>
      <p className={styles.additionalNumber} aria-hidden="true">
        {String(index + 3).padStart(2, '0')}
      </p>
      <div className={styles.additionalIdentity}>
        <p className={styles.projectCategory}>{project.category}</p>
        <h3 className={styles.additionalTitle} id={titleId}>{project.name}</h3>
      </div>
      <p className={styles.additionalSummary}>{project.summary}</p>
      <div className={styles.additionalMeta}>
        <ProjectLinks project={project} />
        <ul className={styles.compactStack} aria-label={`${project.name} tools`}>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  const featuredProject = projects.find((project) => project.id === 'biblinhaplay');
  const platformProject = projects.find((project) => project.id === 'casa-seth-platform');
  const additionalProjects = projects.filter(
    (project) => project.id !== featuredProject?.id && project.id !== platformProject?.id,
  );

  return (
    <section className={`section ${styles.selectedWork}`} id="work" aria-labelledby="selected-work-title">
      <div className="container">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionIndex}>01 / Selected work</p>
          <div className={styles.headingGroup}>
            <h2 className={styles.sectionTitle} id="selected-work-title">Products built end to end.</h2>
            <p className={styles.sectionSubtitle}>
              Selected product work spanning cross-platform learning, commerce operations, and cybersecurity education.
            </p>
          </div>
        </header>

        <div className={styles.caseStudies}>
          <FeaturedCase project={featuredProject} />
          <PlatformCase project={platformProject} />

          {additionalProjects.length > 0 && (
            <div className={styles.additionalWork}>
              <p className={styles.additionalLabel}>Additional work</p>
              {additionalProjects.map((project, index) => (
                <AdditionalCase key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
