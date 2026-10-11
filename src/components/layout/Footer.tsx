import { Link } from 'react-router-dom'
import { personalInfo, socialLinks } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Container } from '../ui/Container'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  const { locale, t } = useLocale()
  const name = pick(personalInfo.name, locale)
  const title = pick(personalInfo.title, locale)
  const titleSecondary = personalInfo.titleSecondary
    ? pick(personalInfo.titleSecondary, locale)
    : ''

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <p className={styles.name}>{name}</p>
            <p className={styles.title}>
              {title}
              {titleSecondary ? ` · ${titleSecondary}` : ''}
            </p>
          </div>

          <div className={styles.links}>
            <Link to="/#projects">{t('footerProjects')}</Link>
            <Link to="/#contact">{t('footerContact')}</Link>
            {socialLinks.map((link) =>
              link.external ? (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pick(link.label, locale)}
                </a>
              ) : (
                <a key={link.id} href={link.href}>
                  {pick(link.label, locale)}
                </a>
              ),
            )}
            {personalInfo.cvUrl ? (
              <a href={personalInfo.cvUrl} download>
                {t('downloadCv')}
              </a>
            ) : null}
          </div>
        </div>

        <p className={styles.copy}>
          © {year} {name}. {t('footerCopyright')}
        </p>
      </Container>
    </footer>
  )
}
