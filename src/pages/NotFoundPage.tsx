import { Button } from '../components/ui/Button'
import { useLocale } from '../i18n'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const { t } = useLocale()

  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>{t('notFoundTitle')}</h1>
        <p className={styles.text}>{t('notFoundText')}</p>
        <Button to="/" variant="primary">
          {t('backToHome')}
        </Button>
      </div>
    </div>
  )
}
