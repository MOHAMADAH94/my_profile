import type { ReactNode } from 'react'
import styles from './Badge.module.css'

type Variant = 'default' | 'live' | 'muted' | 'tech'

interface BadgeProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}
