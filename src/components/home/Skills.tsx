import { skillCategories } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Skills.module.css'

export function Skills() {
  const { locale, t } = useLocale()

  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeader
          id="skills-title"
          eyebrow={t('skillsEyebrow')}
          title={t('skillsTitle')}
          subtitle={t('skillsSubtitle')}
        />
        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <article key={category.id} className={styles.card}>
              <h3 className={styles.title}>{pick(category.title, locale)}</h3>
              <p className={styles.description}>{pick(category.description, locale)}</p>
              <div className={styles.skills}>
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="tech">
                    {skill}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
