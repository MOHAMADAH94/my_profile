import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  'aria-labelledby'?: string
}

export function Section({
  id,
  className,
  children,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={['section', className].filter(Boolean).join(' ')}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  )
}
