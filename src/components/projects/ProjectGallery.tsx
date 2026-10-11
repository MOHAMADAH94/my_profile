import { useEffect, useId, useRef, useState } from 'react'
import { pick, useLocale } from '../../i18n'
import type { ProjectAsset } from '../../types'
import styles from './ProjectGallery.module.css'

interface ProjectGalleryProps {
  images: ProjectAsset[]
  projectName: string
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const { locale, t, isRtl } = useLocale()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const count = images.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    if (!open || count === 0) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (isRtl ? (index - 1 + count) % count : (index + 1) % count))
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (isRtl ? (index + 1) % count : (index - 1 + count) % count))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, count, isRtl])

  if (count === 0) return null

  const safeIndex = Math.min(activeIndex, count - 1)
  const active = images[safeIndex]

  return (
    <div className={styles.gallery}>
      <button
        type="button"
        className={styles.main}
        onClick={() => setOpen(true)}
        aria-label={`${t('galleryOpen')} ${projectName}`}
      >
        <img src={active.src} alt={pick(active.alt, locale)} />
      </button>
      {active.caption ? (
        <p className={styles.caption}>{pick(active.caption, locale)}</p>
      ) : null}

      {count > 1 ? (
        <div className={styles.thumbs} role="list">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              role="listitem"
              className={[styles.thumb, index === safeIndex ? styles.thumbActive : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveIndex(index)}
              aria-label={`${t('galleryShowImage')} ${index + 1}: ${pick(image.alt, locale)}`}
              aria-current={index === safeIndex}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false)
        }}
      >
        <div className={styles.dialogInner}>
          <p id={titleId} className="sr-only">
            {projectName} {t('galleryTitle')}
          </p>
          <div className={styles.dialogImageWrap}>
            <img src={active.src} alt={pick(active.alt, locale)} />
          </div>
          <div className={styles.dialogControls}>
            <button
              type="button"
              className={styles.dialogBtn}
              onClick={() => setActiveIndex((index) => (index - 1 + count) % count)}
            >
              {t('galleryPrevious')}
            </button>
            <button type="button" className={styles.dialogBtn} onClick={() => setOpen(false)}>
              {t('galleryClose')}
            </button>
            <button
              type="button"
              className={styles.dialogBtn}
              onClick={() => setActiveIndex((index) => (index + 1) % count)}
            >
              {t('galleryNext')}
            </button>
          </div>
          {active.caption ? (
            <p className={styles.dialogCaption}>{pick(active.caption, locale)}</p>
          ) : null}
        </div>
      </dialog>
    </div>
  )
}
