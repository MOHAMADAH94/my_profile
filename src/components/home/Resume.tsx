import { personalInfo } from '../../data'
import { useLocale } from '../../i18n'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import styles from './Resume.module.css'

export function Resume() {
  const { t } = useLocale()
  if (!personalInfo.cvUrl) return null

  return (
    <Section id="resume" aria-labelledby="resume-title">
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="resume-title">
              {t('resumeTitle')}
            </h2>
            <p className={styles.text}>{t('resumeText')}</p>
          </div>
          <Button as="a" href={personalInfo.cvUrl} download variant="primary" size="lg">
            {t('downloadCv')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
