import type { MessageKey } from './messages'
import type { ProjectCategory, ProjectStatus } from '../types'

export const categoryMessageKeys: Record<ProjectCategory, MessageKey> = {
  saas: 'categorySaas',
  web: 'categoryWeb',
  mobile: 'categoryMobile',
  business: 'categoryBusiness',
  ecommerce: 'categoryEcommerce',
  other: 'categoryOther',
}

export const statusMessageKeys: Record<ProjectStatus, MessageKey> = {
  live: 'statusLive',
  completed: 'statusCompleted',
  'in-development': 'statusInDevelopment',
  archived: 'statusArchived',
}

export const filterMessageKeys = {
  all: 'filterAll',
  saas: 'filterSaas',
  web: 'filterWeb',
  mobile: 'filterMobile',
  business: 'filterBusiness',
  ecommerce: 'filterEcommerce',
} as const satisfies Record<'all' | Exclude<ProjectCategory, 'other'>, MessageKey>
