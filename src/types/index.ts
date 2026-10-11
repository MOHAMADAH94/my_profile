import type { LocalizedString } from '../i18n/types'

export type ProjectStatus = 'live' | 'completed' | 'in-development' | 'archived'

export type ProjectCategory =
  | 'saas'
  | 'web'
  | 'mobile'
  | 'business'
  | 'ecommerce'
  | 'other'

export interface ProjectLinks {
  liveUrl?: string
  githubUrl?: string
  demoUrl?: string
  apkUrl?: string
  playStoreUrl?: string
  documentationUrl?: string
  androidUrl?: string
}

export interface ProjectAsset {
  src: string
  alt: LocalizedString | string
  caption?: LocalizedString | string
}

export interface Project {
  name: string
  slug: string
  tagline: LocalizedString
  description: LocalizedString
  category: ProjectCategory
  status?: ProjectStatus
  problem?: LocalizedString
  solution?: LocalizedString
  result?: LocalizedString
  role?: LocalizedString
  features: LocalizedString[]
  technologies: string[]
  technicalHighlights?: LocalizedString[]
  challenges?: { challenge: LocalizedString; approach: LocalizedString }[]
  screenshots: ProjectAsset[]
  coverImage?: string
  links: ProjectLinks
  featured: boolean
  platform?: string
  version?: string
  fileSize?: string
  year?: string
}

export interface SkillCategory {
  id: string
  title: LocalizedString
  description: LocalizedString
  skills: string[]
}

export interface ExperienceItem {
  id: string
  title: LocalizedString
  organization: LocalizedString | string
  location?: LocalizedString | string
  period: LocalizedString | string
  description: LocalizedString[]
  type: 'work' | 'project' | 'milestone'
}

export interface EducationItem {
  institution: LocalizedString | string
  degree: LocalizedString
  location?: LocalizedString | string
  period?: LocalizedString | string
  details: LocalizedString[]
  academicFocus?: LocalizedString[]
}

export interface SocialLink {
  id: string
  label: LocalizedString | string
  href: string
  external?: boolean
}

export interface PersonalInfo {
  name: LocalizedString
  shortName: string
  title: LocalizedString
  titleSecondary?: LocalizedString
  location: LocalizedString
  email: string
  phone?: string
  summary: LocalizedString
  heroLabel: LocalizedString
  heroHeadline: LocalizedString
  heroIntro: LocalizedString
  about: LocalizedString[]
  languages: { name: LocalizedString; level: LocalizedString }[]
  cvUrl: string
  githubUrl?: string
  linkedinUrl?: string
}

export interface ContentCard {
  id?: string
  step?: string
  title: LocalizedString
  description: LocalizedString
}

export interface CourseItem {
  title: LocalizedString | string
  provider: string
  year: string
}
