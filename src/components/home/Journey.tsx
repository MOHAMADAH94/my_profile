import { experience } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Journey.module.css'

export function Journey() {
  const { locale, t } = useLocale()

  return (
    <Section id="journey" aria-labelledby="journey-title">
      <Container>
        <SectionHeader
          id="journey-title"
          eyebrow={t('journeyEyebrow')}
          title={t('journeyTitle')}
          subtitle={t('journeySubtitle')}
        />

        <ol className={styles.timeline}>
          {experience.map((item) => (
            <li key={item.id} className={styles.item}>
              <p className={styles.period}>{pick(item.period, locale)}</p>
              <div className={styles.card}>
                <h3 className={styles.title}>{pick(item.title, locale)}</h3>
                <p className={styles.meta}>
                  {pick(item.organization, locale)}
                  {item.location ? ` · ${pick(item.location, locale)}` : ''}
                </p>
                <ul className={styles.points}>
                  {item.description.map((line) => (
                    <li key={line.en}>{pick(line, locale)}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
