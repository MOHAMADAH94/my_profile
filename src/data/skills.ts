import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: { ar: 'الواجهة الأمامية', en: 'Frontend' },
    description: {
      ar: 'واجهات واضحة وسريعة وجاهزة للمنتج.',
      en: 'Interfaces that feel clear, fast, and product-ready.',
    },
    skills: ['JavaScript', 'React', 'TypeScript', 'HTML/CSS', 'Responsive UI'],
  },
  {
    id: 'backend',
    title: { ar: 'الخلفية', en: 'Backend' },
    description: {
      ar: 'واجهات برمجية ومصادقة ومنطق أعمال وأنظمة متعددة المستأجرين.',
      en: 'APIs, auth, business logic, and multi-tenant systems.',
    },
    skills: ['Python', 'Django', 'Django REST Framework', 'C#', 'ASP.NET', 'Java'],
  },
  {
    id: 'mobile',
    title: { ar: 'الموبايل', en: 'Mobile' },
    description: {
      ar: 'تطبيقات متعددة المنصات تركز على الاستخدام اليومي الحقيقي.',
      en: 'Cross-platform apps focused on real daily use.',
    },
    skills: ['Flutter', 'Dart', 'Android (Kotlin)'],
  },
  {
    id: 'data',
    title: { ar: 'قواعد البيانات والبيانات', en: 'Databases & Data' },
    description: {
      ar: 'بيانات منظمة لبرمجيات تشغيلية.',
      en: 'Structured data for operational software.',
    },
    skills: ['Oracle', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    id: 'architecture',
    title: { ar: 'البنية المعمارية', en: 'Architecture' },
    description: {
      ar: 'كيف تُبنى المنتجات لتنمو.',
      en: 'How products are structured to grow.',
    },
    skills: [
      'REST APIs',
      'Multi-tenant SaaS',
      'JWT Authentication',
      'Role-based Access',
      'Offline-capable Apps',
    ],
  },
  {
    id: 'engineering-foundation',
    title: { ar: 'الأساس الهندسي', en: 'Engineering Foundation' },
    description: {
      ar: 'مجالات أساسية في هندسة المعلوماتية من الدراسة الجامعية تشكّل طريقة تصميمي وتأمين الأنظمة.',
      en: 'Core Informatics Engineering areas from university study that shape how I design and secure systems.',
    },
    skills: [
      'Artificial Intelligence',
      'Computer Networks',
      'Systems Security',
      'Databases',
      'Web Engineering',
      'Software Engineering',
    ],
  },
  {
    id: 'design-tools',
    title: { ar: 'التصميم والأدوات', en: 'Design & Tools' },
    description: {
      ar: 'الهوية البصرية وأدوات التسليم اليومية.',
      en: 'Visual identity and day-to-day delivery tools.',
    },
    skills: ['UI/UX Design', 'Photoshop', 'Illustrator', 'CorelDRAW', 'Git'],
  },
]
