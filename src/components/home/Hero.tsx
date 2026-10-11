import { personalInfo, socialLinks } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import styles from './Hero.module.css'

function HeroVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <svg viewBox="0 0 560 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mhHeroGrad" x1="60" y1="40" x2="500" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e40af" />
            <stop offset="0.5" stopColor="#2563eb" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect x="36" y="48" width="488" height="360" rx="28" fill="url(#mhHeroGrad)" opacity="0.12" />
        <rect
          className={styles.floatA}
          x="78"
          y="96"
          width="180"
          height="120"
          rx="18"
          fill="var(--surface)"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <rect x="98" y="118" width="88" height="10" rx="5" fill="#2563eb" opacity="0.7" />
        <rect x="98" y="140" width="120" height="8" rx="4" fill="#93c5fd" />
        <rect x="98" y="158" width="100" height="8" rx="4" fill="#bfdbfe" />
        <rect
          className={styles.floatB}
          x="290"
          y="120"
          width="170"
          height="150"
          rx="18"
          fill="var(--surface)"
          stroke="#1e40af"
          strokeWidth="2"
        />
        <circle cx="330" cy="162" r="16" fill="#2563eb" opacity="0.85" />
        <rect x="358" y="154" width="70" height="8" rx="4" fill="#1e3a8a" opacity="0.55" />
        <rect x="312" y="198" width="126" height="10" rx="5" fill="#93c5fd" />
        <rect x="312" y="220" width="100" height="10" rx="5" fill="#bfdbfe" />
        <rect x="312" y="242" width="112" height="10" rx="5" fill="#dbeafe" />
        <path
          d="M168 216v28c0 8 6 14 14 14h96c8 0 14-6 14-14v-10"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeDasharray="5 6"
        />
        <rect x="120" y="286" width="320" height="72" rx="16" fill="var(--surface)" stroke="#60a5fa" strokeWidth="2" />
        <rect x="144" y="310" width="48" height="24" rx="8" fill="#2563eb" />
        <rect x="208" y="314" width="180" height="8" rx="4" fill="#93c5fd" />
        <rect x="208" y="332" width="140" height="8" rx="4" fill="#bfdbfe" />
      </svg>
    </div>
  )
}

export function Hero() {
  const { locale, t } = useLocale()
  const nameLines =
    locale === 'ar' ? ['محمد', 'أحمد', 'حمدان'] : ['Mohamad', 'Ahmad', 'Hamdan']

  return (
    <Section id="home" className={styles.hero} aria-labelledby="hero-brand">
      <Container>
        <div className={styles.grid}>
          <div>
            <p className={styles.label}>{pick(personalInfo.heroLabel, locale)}</p>
            <h1 className={styles.brand} id="hero-brand">
              {nameLines.map((line, index) => (
                <span
                  key={line}
                  className={index === nameLines.length - 1 ? styles.accent : styles.line}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className={styles.headline}>{pick(personalInfo.heroHeadline, locale)}</p>
            <p className={styles.intro}>{pick(personalInfo.heroIntro, locale)}</p>

            <div className={styles.actions}>
              <Button as="a" href="#projects" variant="primary" size="lg">
                {t('viewProjects')}
              </Button>
              <Button as="a" href="#contact" variant="outline" size="lg">
                {t('contactMe')}
              </Button>
            </div>

            <div className={styles.social}>
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
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </Section>
  )
}
