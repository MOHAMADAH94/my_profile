import { personalInfo } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './About.module.css'

export function About() {
  const { locale, t } = useLocale()

  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <SectionHeader
          id="about-title"
          eyebrow={t('aboutEyebrow')}
          title={t('aboutTitle')}
          subtitle={pick(personalInfo.summary, locale)}
        />

        <div className={styles.grid}>
          <div className={styles.copy}>
            {personalInfo.about.map((paragraph) => (
              <p key={paragraph.en}>{pick(paragraph, locale)}</p>
            ))}
          </div>

          <aside className={styles.aside}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>{t('basedIn')}</h3>
              <p>{pick(personalInfo.location, locale)}</p>
            </div>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>{t('languages')}</h3>
              <ul className={styles.list}>
                {personalInfo.languages.map((lang) => (
                  <li key={lang.name.en}>
                    <strong>{pick(lang.name, locale)}</strong>
                    <span>{pick(lang.level, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
