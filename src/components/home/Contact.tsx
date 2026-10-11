import { useState, type FormEvent } from 'react'
import { personalInfo } from '../../data'
import { pick, useLocale } from '../../i18n'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Contact.module.css'

export function Contact() {
  const { locale, t } = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(
      `${t('mailSubjectPrefix')} ${name || t('mailVisitor')}`,
    )
    const body = encodeURIComponent(
      [`${t('mailNameLabel')}: ${name}`, `${t('mailEmailLabel')}: ${email}`, '', message].join(
        '\n',
      ),
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Container>
        <SectionHeader
          id="contact-title"
          eyebrow={t('contactEyebrow')}
          title={t('contactTitle')}
          subtitle={t('contactSubtitle')}
        />

        <div className={styles.layout}>
          <div className={styles.channels}>
            <a className={styles.channel} href={`mailto:${personalInfo.email}`}>
              <span className={styles.label}>{t('email')}</span>
              <span className={styles.value}>{personalInfo.email}</span>
            </a>
            {personalInfo.phone ? (
              <a className={styles.channel} href={`tel:${personalInfo.phone}`}>
                <span className={styles.label}>{t('phone')}</span>
                <span className={styles.value}>{personalInfo.phone}</span>
              </a>
            ) : null}
            <div className={styles.channel}>
              <span className={styles.label}>{t('location')}</span>
              <span className={styles.value}>{pick(personalInfo.location, locale)}</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <h3 className={styles.formTitle}>{t('composeEmail')}</h3>
            <p className={styles.hint}>{t('contactHint')}</p>

            <div className={styles.field}>
              <label htmlFor="contact-name">{t('contactName')}</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">{t('contactEmail')}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">{t('contactMessage')}</label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>

            <Button type="submit" variant="primary">
              {t('openMailClient')}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
