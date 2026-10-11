import { useEffect } from 'react'
import { About } from '../components/home/About'
import { Contact } from '../components/home/Contact'
import { Education } from '../components/home/Education'
import { FeaturedProjects } from '../components/home/FeaturedProjects'
import { Hero } from '../components/home/Hero'
import { Journey } from '../components/home/Journey'
import { Philosophy } from '../components/home/Philosophy'
import { Resume } from '../components/home/Resume'
import { Skills } from '../components/home/Skills'
import { TechnicalApproach } from '../components/home/TechnicalApproach'
import { WhatIBuild } from '../components/home/WhatIBuild'
import { useLocale } from '../i18n'

export function HomePage() {
  const { t } = useLocale()

  useEffect(() => {
    document.title = t('documentTitle')
  }, [t])

  return (
    <>
      <Hero />
      <About />
      <WhatIBuild />
      <FeaturedProjects />
      <Skills />
      <Journey />
      <Education />
      <TechnicalApproach />
      <Philosophy />
      <Resume />
      <Contact />
    </>
  )
}
