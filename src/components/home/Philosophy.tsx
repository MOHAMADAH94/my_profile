import { philosophy } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Philosophy.module.css'

export function Philosophy() {
  const { locale, t } = useLocale()

  return (
    <Section id="philosophy" aria-labelledby="philosophy-title">
      <Container>
        <SectionHeader
          id="philosophy-title"
          eyebrow={t('philosophyEyebrow')}
          title={t('philosophyTitle')}
        />
        <div className={styles.grid}>
          {philosophy.map((item) => (
            <article key={item.title.en} className={styles.item}>
              <h3 className={styles.title}>{pick(item.title, locale)}</h3>
              <p className={styles.description}>{pick(item.description, locale)}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
