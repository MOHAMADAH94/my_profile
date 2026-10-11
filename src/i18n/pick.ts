import type { Locale, LocalizedString } from './types'

export function pick(value: LocalizedString | string, locale: Locale): string {
  if (typeof value === 'string') return value
  return value[locale]
}
