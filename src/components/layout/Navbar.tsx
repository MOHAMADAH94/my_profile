import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { personalInfo } from '../../data'
import { pick, useLocale } from '../../i18n'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import { Container } from '../ui/Container'
import styles from './Navbar.module.css'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'journey',
  'education',
  'contact',
]

const NAV_ITEMS = [
  { id: 'home', labelKey: 'navHome' as const, hash: '#home' },
  { id: 'about', labelKey: 'navAbout' as const, hash: '#about' },
  { id: 'skills', labelKey: 'navSkills' as const, hash: '#skills' },
  { id: 'projects', labelKey: 'navProjects' as const, hash: '#projects' },
  { id: 'journey', labelKey: 'navJourney' as const, hash: '#journey' },
  { id: 'education', labelKey: 'navEducation' as const, hash: '#education' },
  { id: 'contact', labelKey: 'navContact' as const, hash: '#contact' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 13.5A7.5 7.5 0 1 1 10.5 4 6 6 0 0 0 20 13.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const { theme, toggleTheme } = useTheme()
  const { locale, toggleLocale, t } = useLocale()
  const activeId = useScrollSpy(isHome ? SECTION_IDS : [], 90)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const displayName = pick(personalInfo.name, locale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <>
      <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
        <Container className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label={`${displayName} ${t('logoHome')}`}>
            {displayName}
          </Link>

          <nav className={styles.nav} aria-label={t('navPrimary')}>
            {NAV_ITEMS.map((item) => {
              const href = resolveHref(item.hash)
              const isActive = isHome && activeId === item.id
              const label = t(item.labelKey)
              if (item.id === 'home' && !isHome) {
                return (
                  <NavLink key={item.id} to="/" className={styles.link}>
                    {label}
                  </NavLink>
                )
              }
              return (
                <a
                  key={item.id}
                  href={href}
                  className={[styles.link, isActive ? styles.linkActive : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className={styles.actions}>
            {personalInfo.githubUrl ? (
              <a
                className={styles.iconBtn}
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('githubProfile')}
              >
                <GithubIcon />
              </a>
            ) : null}

            <button
              type="button"
              className={styles.langBtn}
              onClick={toggleLocale}
              aria-label={t('langToggleAria')}
            >
              {t('langToggle')}
            </button>

            <button
              type="button"
              className={styles.iconBtn}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              ref={menuBtnRef}
              type="button"
              className={styles.menuBtn}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </Container>
      </header>

      <div
        id={menuId}
        className={[styles.mobile, menuOpen ? styles.mobileOpen : ''].filter(Boolean).join(' ')}
        hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label={t('navMobile')}>
          {NAV_ITEMS.map((item, index) => {
            const href = resolveHref(item.hash)
            const isActive = isHome && activeId === item.id
            const label = t(item.labelKey)
            if (item.id === 'home' && !isHome) {
              return (
                <NavLink
                  key={item.id}
                  ref={index === 0 ? firstLinkRef : undefined}
                  to="/"
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              )
            }
            return (
              <a
                key={item.id}
                ref={index === 0 ? firstLinkRef : undefined}
                href={href}
                className={[styles.mobileLink, isActive ? styles.mobileLinkActive : '']
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            )
          })}
        </nav>
      </div>
    </>
  )
}
