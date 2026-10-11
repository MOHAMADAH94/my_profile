import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getMessage, type MessageKey } from './messages'
import type { Locale } from './types'

const STORAGE_KEY = 'mh-locale'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (key: MessageKey) => string
  dir: 'rtl' | 'ltr'
  isRtl: boolean
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'ar' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  return 'ar'
}

function applyDocumentLocale(locale: Locale) {
  const root = document.documentElement
  root.lang = locale
  root.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'ar'
    const initial = readStoredLocale()
    applyDocumentLocale(initial)
    return initial
  })

  useEffect(() => {
    applyDocumentLocale(locale)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'ar' ? 'en' : 'ar'))
  }, [])

  const t = useCallback((key: MessageKey) => getMessage(locale, key), [locale])

  const value = useMemo<LocaleContextValue>(() => {
    const isRtl = locale === 'ar'
    return {
      locale,
      setLocale,
      toggleLocale,
      t,
      dir: isRtl ? 'rtl' : 'ltr',
      isRtl,
    }
  }, [locale, setLocale, toggleLocale, t])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
