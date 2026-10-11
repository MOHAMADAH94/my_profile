import { whatIBuild } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './WhatIBuild.module.css'

export function WhatIBuild() {
  const { locale, t } = useLocale()

  return (
    <Section id="what-i-build" aria-labelledby="what-i-build-title">
      <Container>
        <SectionHeader
          id="what-i-build-title"
          eyebrow={t('whatIBuildEyebrow')}
          title={t('whatIBuildTitle')}
          subtitle={t('whatIBuildSubtitle')}
        />
        <div className={styles.grid}>
          {whatIBuild.map((item) => (
            <article key={item.id} className={styles.item}>
              <h3 className={styles.title}>{pick(item.title, locale)}</h3>
              <p className={styles.description}>{pick(item.description, locale)}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
