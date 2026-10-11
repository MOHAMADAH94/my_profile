interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  id,
}: SectionHeaderProps) {
  return (
    <header
      className="section-header"
      style={align === 'center' ? { marginInline: 'auto', textAlign: 'center' } : undefined}
    >
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  )
}
