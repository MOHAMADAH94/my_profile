import { courses, education } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Education.module.css'

export function Education() {
  const { locale, t } = useLocale()

  return (
    <Section id="education" aria-labelledby="education-title">
      <Container>
        <SectionHeader
          id="education-title"
          eyebrow={t('educationEyebrow')}
          title={t('educationTitle')}
          subtitle={t('educationSubtitle')}
        />

        <div className={styles.layout}>
          <div>
            {education.map((item) => (
              <article key={pick(item.institution, 'en')} className={styles.card}>
                <h3 className={styles.degree}>{pick(item.degree, locale)}</h3>
                <p className={styles.meta}>
                  {pick(item.institution, locale)}
                  {item.location ? ` · ${pick(item.location, locale)}` : ''}
                  {item.period ? ` · ${pick(item.period, locale)}` : ''}
                </p>
                <ul className={styles.details}>
                  {item.details.map((detail) => (
                    <li key={detail.en}>{pick(detail, locale)}</li>
                  ))}
                </ul>
                {item.academicFocus && item.academicFocus.length > 0 ? (
                  <div className={styles.focus}>
                    <h4 className={styles.focusTitle}>{t('academicFocus')}</h4>
                    <div className={styles.focusList}>
                      {item.academicFocus.map((area) => (
                        <Badge key={area.en} variant="tech">
                          {pick(area, locale)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <aside className={styles.card}>
            <h3 className={styles.coursesTitle}>{t('additionalCourses')}</h3>
            <ul className={styles.courses}>
              {courses.map((course) => (
                <li key={`${pick(course.title, 'en')}-${course.provider}-${course.year}`}>
                  <strong>{pick(course.title, locale)}</strong>
                  <span>
                    {course.provider} · {course.year}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
