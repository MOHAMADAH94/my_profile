const fs = require('fs')
const path = 'c:/Users/ROG/Desktop/my_apps/src/data/projects.ts'
let s = fs.readFileSync(path, 'utf8')

function replaceProjectBlock(slug, fromRegex, replacement) {
  const slugToken = `slug: '${slug}'`
  const slugIdx = s.indexOf(slugToken)
  if (slugIdx < 0) throw new Error(`slug not found: ${slug}`)
  const nextSlug = s.indexOf(`slug: '`, slugIdx + slugToken.length)
  const sectionEnd = nextSlug < 0 ? s.length : nextSlug
  const section = s.slice(slugIdx, sectionEnd)
  if (!fromRegex.test(section)) {
    throw new Error(`pattern not found in ${slug}`)
  }
  const updated = section.replace(fromRegex, replacement)
  s = s.slice(0, slugIdx) + updated + s.slice(sectionEnd)
}

replaceProjectBlock(
  'crystal-store',
  /coverImage:[\s\S]*?screenshots: \[[\s\S]*?\],\n/,
  `coverImage: '/images/projects/crystal/cover.png',
    screenshots: [
      {
        src: '/images/projects/crystal/cover.png',
        alt: {
          ar: 'واجهة متجر Crystal للسلع الرقمية',
          en: 'Crystal digital goods store interface',
        },
      },
      {
        src: '/images/brand/zeroone.png',
        alt: {
          ar: 'هوية Zero One / Crystal Store',
          en: 'Zero One / Crystal store branding',
        },
      },
    ],
`,
)

replaceProjectBlock(
  'alwaleed-store',
  /technologies: \['Django', 'Bootstrap', 'JavaScript'\],\n\s*screenshots: \[\],\n/,
  `technologies: ['Django', 'Bootstrap', 'JavaScript'],
    coverImage: '/images/projects/alwaleed/cover.png',
    screenshots: [
      {
        src: '/images/projects/alwaleed/cover.png',
        alt: {
          ar: 'واجهة متجر الوليد للبطاقات الرقمية',
          en: 'Alwaleed digital cards store interface',
        },
      },
    ],
`,
)

replaceProjectBlock(
  'tamayouz-card',
  /technologies: \['Web', 'E-commerce'\],\n\s*screenshots: \[\],\n/,
  `technologies: ['Web', 'E-commerce'],
    coverImage: '/images/projects/tamayouz/cover.png',
    screenshots: [
      {
        src: '/images/projects/tamayouz/cover.png',
        alt: {
          ar: 'واجهة متجر التميز كارد',
          en: 'Tamayouz Card store interface',
        },
      },
    ],
`,
)

replaceProjectBlock(
  'currency-app',
  /coverImage:[\s\S]*?screenshots: \[[\s\S]*?\],\n/,
  `coverImage: '/images/projects/currency/cover.png',
    screenshots: [
      {
        src: '/images/projects/currency/cover.png',
        alt: {
          ar: 'واجهة تطبيق أسعار الصرف',
          en: 'Currency exchange app interface',
        },
      },
      {
        src: '/images/projects/currency-logo.png',
        alt: {
          ar: 'هوية تطبيق صرف العملات',
          en: 'Currency exchange app branding',
        },
      },
    ],
`,
)

replaceProjectBlock(
  'masarifi',
  /coverImage:[\s\S]*?screenshots: \[[\s\S]*?\],\n/,
  `coverImage: '/images/projects/masarifi/cover.png',
    screenshots: [
      {
        src: '/images/projects/masarifi/cover.png',
        alt: { ar: 'واجهة تطبيق مصاريفي', en: 'Masarifi finance app interface' },
      },
      {
        src: '/images/projects/masarifi/icon.png',
        alt: { ar: 'أيقونة تطبيق Masarifi', en: 'Masarifi app icon' },
      },
    ],
`,
)

replaceProjectBlock(
  'taekwondo-club',
  /technologies: \['Kotlin', 'Android', 'SQLite'\],\n\s*screenshots: \[\],\n/,
  `technologies: ['Kotlin', 'Android', 'SQLite'],
    coverImage: '/images/projects/taekwondo/cover.png',
    screenshots: [
      {
        src: '/images/projects/taekwondo/cover.png',
        alt: {
          ar: 'واجهة تطبيق نادي التايكوندو',
          en: 'Taekwondo club app interface',
        },
      },
    ],
`,
)

replaceProjectBlock(
  'stolen-phone-system',
  /technologies: \['Custom software system'\],\n\s*screenshots: \[\],\n/,
  `technologies: ['Custom software system'],
    coverImage: '/images/projects/stolen-phone/cover.png',
    screenshots: [
      {
        src: '/images/projects/stolen-phone/cover.png',
        alt: {
          ar: 'لوحة نظام تتبع الهواتف المسروقة',
          en: 'Stolen phone tracking system dashboard',
        },
      },
    ],
`,
)

replaceProjectBlock(
  'kids-quiz-game',
  /technologies: \['Mobile \/ Game UI'\],\n\s*screenshots: \[\],\n/,
  `technologies: ['Mobile / Game UI'],
    coverImage: '/images/projects/kids-quiz/cover.png',
    screenshots: [
      {
        src: '/images/projects/kids-quiz/cover.png',
        alt: {
          ar: 'واجهة لعبة اختبارات الأطفال',
          en: 'Kids quiz learning game interface',
        },
      },
    ],
`,
)

fs.writeFileSync(path, s)
console.log('All project covers patched')
