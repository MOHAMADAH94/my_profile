import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'
type As = 'a' | 'button'

export interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  as?: As
  href?: string
  to?: string
  external?: boolean
  download?: boolean | string
  className?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  'aria-label'?: string
  disabled?: boolean
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as,
  href,
  to,
  external,
  download,
  className,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cx(styles.button, styles[variant], styles[size], className)

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick as AnchorHTMLAttributes<HTMLAnchorElement>['onClick']}
      >
        {children}
      </Link>
    )
  }

  const useAnchor = as === 'a' || Boolean(href)

  if (useAnchor && href) {
    const isExternal = external ?? /^https?:\/\//i.test(href)
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick as AnchorHTMLAttributes<HTMLAnchorElement>['onClick']}
        download={download || undefined}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick as ButtonHTMLAttributes<HTMLButtonElement>['onClick']}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
