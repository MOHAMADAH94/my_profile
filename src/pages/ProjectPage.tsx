import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectActions } from '../components/projects/ProjectActions'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { Badge } from '../components/ui/Badge'
import { Container } from '../components/ui/Container'
import { getProjectBySlug, getRelatedProjects } from '../data'
import { pick, useLocale } from '../i18n'
import { categoryMessageKeys, statusMessageKeys } from '../i18n/labels'
import { NotFoundPage } from './NotFoundPage'
import styles from './ProjectPage.module.css'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, t, isRtl } = useLocale()
  const project = slug ? getProjectBySlug(slug) : undefined
  const backArrow = isRtl ? '→' : '←'

  useEffect(() => {
    if (!project) {
      document.title = t('projectNotFoundTitle')
      return
    }
    document.title = `${project.name} | ${pick(
      { ar: 'محمد أحمد حمدان', en: 'Mohamad Ahmad Hamdan' },
      locale,
    )}`
    return () => {
      document.title = t('documentTitle')
    }
  }, [project, locale, t])

  if (!project) {
    return <NotFoundPage />
  }

  const related = getRelatedProjects(project.slug)

  return (
    <div className={styles.page}>
      <Container>
        <Link to="/#projects" className={styles.back}>
          {backArrow} {t('backToProjects')}
        </Link>

        <div className={styles.hero}>
          <div>
            <div className={styles.meta}>
              <Badge variant="muted">{t(categoryMessageKeys[project.category])}</Badge>
              {project.status === 'live' ? (
                <Badge variant="live">{t('statusLive')}</Badge>
              ) : null}
              {project.status && project.status !== 'live' ? (
                <Badge variant="default">{t(statusMessageKeys[project.status])}</Badge>
              ) : null}
              {project.year ? <Badge variant="tech">{project.year}</Badge> : null}
            </div>

            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.tagline}>{pick(project.tagline, locale)}</p>
            <p className={styles.description}>{pick(project.description, locale)}</p>
            {project.role ? (
              <p className={styles.role}>{pick(project.role, locale)}</p>
            ) : null}

            <ProjectActions
              links={project.links}
              apkMeta={{
                fileSize: project.fileSize,
                platform: project.platform,
                version: project.version,
              }}
            />
          </div>

          <div className={styles.cover}>
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={`${project.name} ${t('projectCover')}`}
              />
            ) : (
              <div className={styles.placeholder}>{project.name}</div>
            )}
          </div>
        </div>

        {(project.problem || project.solution || project.result) && (
          <div className={styles.grid}>
            {project.problem ? (
              <article className={styles.panel}>
                <h2>{t('problem')}</h2>
                <p>{pick(project.problem, locale)}</p>
              </article>
            ) : null}
            {project.solution ? (
              <article className={styles.panel}>
                <h2>{t('solution')}</h2>
                <p>{pick(project.solution, locale)}</p>
              </article>
            ) : null}
            {project.result ? (
              <article className={styles.panel}>
                <h2>{t('result')}</h2>
                <p>{pick(project.result, locale)}</p>
              </article>
            ) : null}
          </div>
        )}

        {project.screenshots.length > 0 ? (
          <div className={styles.galleryBlock}>
            <ProjectGallery images={project.screenshots} projectName={project.name} />
          </div>
        ) : null}

        <div className={styles.split}>
          <article className={styles.panel}>
            <h2>{t('features')}</h2>
            <ul className={styles.list}>
              {project.features.map((feature) => (
                <li key={feature.en}>{pick(feature, locale)}</li>
              ))}
            </ul>
          </article>

          <article className={styles.panel}>
            <h2>{t('technologies')}</h2>
            <div className={styles.tech}>
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="tech">
                  {tech}
                </Badge>
              ))}
            </div>
            {project.technicalHighlights && project.technicalHighlights.length > 0 ? (
              <>
                <h2 className={styles.subheading}>{t('technicalHighlights')}</h2>
                <ul className={styles.list}>
                  {project.technicalHighlights.map((item) => (
                    <li key={item.en}>{pick(item, locale)}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </article>
        </div>

        {project.challenges && project.challenges.length > 0 ? (
          <div className={styles.challenges}>
            {project.challenges.map((item) => (
              <article key={item.challenge.en} className={styles.challenge}>
                <h3>{pick(item.challenge, locale)}</h3>
                <p>{pick(item.approach, locale)}</p>
              </article>
            ))}
          </div>
        ) : null}

        {related.length > 0 ? (
          <section aria-labelledby="related-projects">
            <h2 className={styles.relatedTitle} id="related-projects">
              {t('relatedProjects')}
            </h2>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} showActions={false} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </div>
  )
}
