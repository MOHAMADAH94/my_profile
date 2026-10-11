import { useMemo, useState } from 'react'
import { getFeaturedProjects, projects } from '../../data'
import { useLocale } from '../../i18n'
import { filterMessageKeys } from '../../i18n/labels'
import type { ProjectCategory } from '../../types'
import { FeaturedProject } from '../projects/FeaturedProject'
import { ProjectCard } from '../projects/ProjectCard'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './FeaturedProjects.module.css'

const filterIds = ['all', 'saas', 'web', 'mobile', 'business', 'ecommerce'] as const

export function FeaturedProjects() {
  const { t } = useLocale()
  const [filter, setFilter] = useState<(typeof filterIds)[number]>('all')
  const featured = getFeaturedProjects()
  const flagship = featured.find((project) => project.slug === 'mobi-shop') ?? featured[0]

  const otherFeatured = useMemo(
    () =>
      featured.filter((project) => {
        if (project.slug === flagship?.slug) return false
        if (filter === 'all') return true
        return project.category === filter
      }),
    [featured, filter, flagship?.slug],
  )

  const remaining = useMemo(
    () =>
      projects.filter((project) => {
        if (project.featured || project.slug === flagship?.slug) return false
        if (filter === 'all') return true
        return project.category === (filter as ProjectCategory)
      }),
    [filter, flagship?.slug],
  )

  const showFlagship = Boolean(flagship) && (filter === 'all' || flagship?.category === filter)

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <SectionHeader
          id="projects-title"
          eyebrow={t('projectsEyebrow')}
          title={t('projectsTitle')}
          subtitle={t('projectsSubtitle')}
        />

        <div className={styles.filters} role="toolbar" aria-label={t('filterProjects')}>
          {filterIds.map((id) => (
            <button
              key={id}
              type="button"
              className={filter === id ? styles.filterActive : styles.filter}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {t(filterMessageKeys[id])}
            </button>
          ))}
        </div>

        {showFlagship && flagship ? (
          <div className={styles.featuredWrap}>
            <FeaturedProject project={flagship} />
          </div>
        ) : null}

        {otherFeatured.length > 0 ? (
          <div className={styles.grid}>
            {otherFeatured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : null}

        {remaining.length > 0 ? (
          <div className={styles.more}>
            <h3 className={styles.moreTitle}>{t('moreProjects')}</h3>
            <div className={styles.grid}>
              {remaining.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        ) : null}

        {!showFlagship && otherFeatured.length === 0 && remaining.length === 0 ? (
          <p className={styles.empty}>{t('noProjectsInCategory')}</p>
        ) : null}
      </Container>
    </Section>
  )
}
