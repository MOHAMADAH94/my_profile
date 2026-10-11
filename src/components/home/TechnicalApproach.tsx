import { technicalApproach } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './TechnicalApproach.module.css'

export function TechnicalApproach() {
  const { locale, t } = useLocale()

  return (
    <Section id="approach" aria-labelledby="approach-title">
      <Container>
        <SectionHeader
          id="approach-title"
          eyebrow={t('approachEyebrow')}
          title={t('approachTitle')}
          subtitle={t('approachSubtitle')}
        />
        <ol className={styles.steps}>
          {technicalApproach.map((item) => (
            <li key={item.step} className={styles.step}>
              <span className={styles.number}>{item.step}</span>
              <h3 className={styles.title}>{pick(item.title, locale)}</h3>
              <p className={styles.description}>{pick(item.description, locale)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
