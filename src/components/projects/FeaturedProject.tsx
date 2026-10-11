import { Link } from 'react-router-dom'
import { pick, useLocale } from '../../i18n'
import { categoryMessageKeys } from '../../i18n/labels'
import type { Project } from '../../types'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ProjectActions } from './ProjectActions'
import styles from './FeaturedProject.module.css'

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const { locale, t } = useLocale()

  return (
    <article className={styles.featured}>
      <Link to={`/project/${project.slug}`} className={styles.media} aria-label={project.name}>
        {project.coverImage ? (
          <img src={project.coverImage} alt="" />
        ) : (
          <div className={styles.placeholder}>{project.name}</div>
        )}
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <Badge variant="default">{t('flagship')}</Badge>
          <Badge variant="muted">{t(categoryMessageKeys[project.category])}</Badge>
          {project.status === 'live' ? <Badge variant="live">{t('statusLive')}</Badge> : null}
          {project.year ? <Badge variant="tech">{project.year}</Badge> : null}
        </div>

        <div>
          <h3 className={styles.title}>
            <Link to={`/project/${project.slug}`}>{project.name}</Link>
          </h3>
          <p className={styles.tagline}>{pick(project.tagline, locale)}</p>
        </div>

        <p className={styles.description}>{pick(project.description, locale)}</p>

        <div className={styles.tech}>
          {project.technologies.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        <div className={styles.footer}>
          <Button to={`/project/${project.slug}`} variant="secondary">
            {t('viewCaseStudy')}
          </Button>
          <ProjectActions
            links={project.links}
            apkMeta={{
              fileSize: project.fileSize,
              platform: project.platform,
              version: project.version,
            }}
            size="sm"
          />
        </div>
      </div>
    </article>
  )
}
