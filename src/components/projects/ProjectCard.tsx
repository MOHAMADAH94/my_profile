import { Link } from 'react-router-dom'
import { pick, useLocale } from '../../i18n'
import { categoryMessageKeys } from '../../i18n/labels'
import type { Project } from '../../types'
import { Badge } from '../ui/Badge'
import { ProjectActions } from './ProjectActions'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  showActions?: boolean
}

export function ProjectCard({ project, showActions = true }: ProjectCardProps) {
  const { locale, t, isRtl } = useLocale()
  const techPreview = project.technologies.slice(0, 4)
  const caseStudyArrow = isRtl ? '←' : '→'

  return (
    <article className={styles.card}>
      <Link to={`/project/${project.slug}`} className={styles.media} aria-label={project.name}>
        {project.coverImage ? (
          <img src={project.coverImage} alt="" loading="lazy" />
        ) : (
          <div className={styles.placeholder}>{project.name.slice(0, 2).toUpperCase()}</div>
        )}
      </Link>

      <div className={styles.body}>
        <div className={styles.top}>
          <Badge variant="muted">{t(categoryMessageKeys[project.category])}</Badge>
          {project.status === 'live' ? <Badge variant="live">{t('statusLive')}</Badge> : null}
          {project.year ? <Badge variant="default">{project.year}</Badge> : null}
        </div>

        <div>
          <h3 className={styles.title}>
            <Link to={`/project/${project.slug}`}>{project.name}</Link>
          </h3>
          <p className={styles.tagline}>{pick(project.tagline, locale)}</p>
        </div>

        <div className={styles.tech}>
          {techPreview.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        <div className={styles.footer}>
          <Link className={styles.link} to={`/project/${project.slug}`}>
            {t('viewCaseStudy')} {caseStudyArrow}
          </Link>
        </div>

        {showActions ? (
          <ProjectActions
            links={project.links}
            apkMeta={{
              fileSize: project.fileSize,
              platform: project.platform,
              version: project.version,
            }}
            size="sm"
          />
        ) : null}
      </div>
    </article>
  )
}
