import type { ReactNode } from 'react'
import { useLocale } from '../../i18n'
import type { ProjectLinks } from '../../types'
import { Button } from '../ui/Button'
import styles from './ProjectActions.module.css'

interface ApkMeta {
  fileSize?: string
  platform?: string
  version?: string
}

interface ProjectActionsProps {
  links: ProjectLinks
  apkMeta?: ApkMeta
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

function ExternalIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-9 9M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v5h5M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function isRelativeUrl(url: string) {
  return url.startsWith('/') || url.startsWith('./') || url.startsWith('../')
}

export function ProjectActions({
  links,
  apkMeta,
  className,
  size = 'md',
}: ProjectActionsProps) {
  const { t } = useLocale()
  const {
    liveUrl,
    demoUrl,
    apkUrl,
    playStoreUrl,
    githubUrl,
    documentationUrl,
  } = links

  const primaryKey = liveUrl
    ? 'live'
    : apkUrl
      ? 'apk'
      : playStoreUrl
        ? 'play'
        : githubUrl
          ? 'github'
          : null

  const items = [
    liveUrl
      ? {
          key: 'live',
          label: t('visitWebsite'),
          href: liveUrl,
          icon: <ExternalIcon />,
          external: true,
        }
      : null,
    demoUrl
      ? {
          key: 'demo',
          label: t('openDemo'),
          href: demoUrl,
          icon: <ExternalIcon />,
          external: true,
        }
      : null,
    apkUrl
      ? {
          key: 'apk',
          label: t('downloadApk'),
          href: apkUrl,
          icon: <DownloadIcon />,
          external: !isRelativeUrl(apkUrl),
          download: isRelativeUrl(apkUrl),
        }
      : null,
    playStoreUrl
      ? {
          key: 'play',
          label: t('googlePlay'),
          href: playStoreUrl,
          icon: <ExternalIcon />,
          external: true,
        }
      : null,
    githubUrl
      ? {
          key: 'github',
          label: t('github'),
          href: githubUrl,
          icon: <GithubIcon />,
          external: true,
        }
      : null,
    documentationUrl
      ? {
          key: 'docs',
          label: t('documentation'),
          href: documentationUrl,
          icon: <DocIcon />,
          external: true,
        }
      : null,
  ].filter(Boolean) as Array<{
    key: string
    label: string
    href: string
    icon: ReactNode
    external: boolean
    download?: boolean
  }>

  if (items.length === 0) return null

  const versionLabel = apkMeta?.version
    ? /^\d/.test(apkMeta.version)
      ? `v${apkMeta.version}`
      : apkMeta.version
    : null

  const metaBits = [apkMeta?.platform, versionLabel, apkMeta?.fileSize].filter(Boolean)

  return (
    <div className={className}>
      <div className={styles.actions}>
        {items.map((item) => {
          const isPrimary = primaryKey === item.key

          return (
            <Button
              key={item.key}
              as="a"
              href={item.href}
              external={item.external}
              download={item.download}
              size={size}
              variant={isPrimary ? 'primary' : 'outline'}
            >
              {item.icon}
              {item.label}
            </Button>
          )
        })}
      </div>
      {metaBits.length > 0 && apkUrl ? (
        <p className={styles.meta}>{metaBits.join(' · ')}</p>
      ) : null}
    </div>
  )
}
