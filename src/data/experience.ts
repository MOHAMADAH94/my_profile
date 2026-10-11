import type { CourseItem, EducationItem, ExperienceItem } from '../types'

export const education: EducationItem[] = [
  {
    institution: {
      ar: 'الجامعة الدولية للعلوم والنهضة',
      en: 'International University for Science and Renaissance',
    },
    degree: {
      ar: 'بكالوريوس في هندسة المعلوماتية',
      en: "Bachelor's in Informatics Engineering",
    },
    location: { ar: 'حلب، سوريا', en: 'Aleppo, Syria' },
    details: [
      {
        ar: 'شهادة هندسية رسمية تغطي الركائز الأساسية لأنظمة البرمجيات الحديثة — ليس البرمجة فقط، بل كيف تُصمَّم الأنظمة وتُؤمَّن وتُربَط وتُشغَّل.',
        en: 'Formal engineering degree covering the core pillars of modern software systems — not only coding, but how systems are designed, secured, connected, and operated.',
      },
      {
        ar: 'تخصص في هندسة البرمجيات مع تركيز قوي على تطوير منتجات الويب والموبايل المتكاملة.',
        en: 'Specialized in software engineering with a strong focus on full-stack web and mobile product development.',
      },
      {
        ar: 'الدراسة الأكاديمية والمشاريع التطبيقية عبر الذكاء الاصطناعي والشبكات وأمن الأنظمة وقواعد البيانات وتقنيات الويب بنت الأساس الذي أستخدمه عند تصميم منتجات حقيقية.',
        en: 'Academic study and applied projects across AI, networks, systems security, databases, and web technologies built the foundation I use when designing real products.',
      },
    ],
    academicFocus: [
      { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' },
      { ar: 'شبكات الحاسوب', en: 'Computer Networks' },
      { ar: 'أمن الأنظمة', en: 'Systems Security' },
      { ar: 'قواعد البيانات', en: 'Databases' },
      { ar: 'هندسة الويب', en: 'Web Engineering' },
      { ar: 'هندسة البرمجيات', en: 'Software Engineering' },
      { ar: 'تطوير الموبايل', en: 'Mobile Development' },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    id: 'mobishop',
    title: {
      ar: 'تطوير منتج SaaS — Mobi Shop',
      en: 'SaaS Product Development — Mobi Shop',
    },
    organization: { ar: 'مستقل / عمل منتج', en: 'Independent / Product Work' },
    location: { ar: 'سوريا', en: 'Syria' },
    period: { ar: 'مستمر', en: 'Ongoing' },
    type: 'project',
    description: [
      {
        ar: 'تصميم وبناء منصة SaaS متعددة المستأجرين لعمليات متاجر الموبايل: نقاط البيع والمخزون والفواتير والإصلاحات والفرق وكتالوجات المتاجر العامة.',
        en: 'Designed and built a multi-tenant SaaS platform for mobile shop operations: POS, inventory, invoices, repairs, teams, and public store catalogs.',
      },
      {
        ar: 'إطلاق منتج إنتاج حي على mobishop.online باستخدام React وDjango وإدارة متاجر موجهة بالاشتراك.',
        en: 'Shipped a live production product at mobishop.online with React, Django, and subscription-oriented store management.',
      },
    ],
  },
  {
    id: 'stolen-phone',
    title: {
      ar: 'نظام تتبع الهواتف المسروقة',
      en: 'Stolen Phone Tracking System',
    },
    organization: { ar: 'تنسيق العمليات', en: 'Operations Coordination' },
    location: { ar: 'سوريا', en: 'Syria' },
    period: '2021 — 2025',
    type: 'project',
    description: [
      {
        ar: 'تطوير نظام متكامل لتتبع الهواتف المسروقة.',
        en: 'Developed a complete system for tracking stolen phones.',
      },
      {
        ar: 'العمل مع فريق تنسيق العمليات على أنشطة التسويق والتطبيق المرتبطة بالنظام.',
        en: 'Worked with the operations coordination team on marketing and application-related activities around the system.',
      },
    ],
  },
  {
    id: 'rose-petals',
    title: {
      ar: 'مدير المكتب الفني',
      en: 'Technical Office Manager',
    },
    organization: 'Rose Petals Global',
    location: { ar: 'السعودية', en: 'Saudi Arabia' },
    period: '2020 — 2021',
    type: 'work',
    description: [
      {
        ar: 'إعداد الهوية البصرية للشركة وتصميم المواد الإعلانية والمستندات الرسمية.',
        en: 'Prepared the company’s visual identity and designed advertising materials and official documents.',
      },
      {
        ar: 'إدارة الجوانب التقنية المتعلقة بالتصميم والتواصل.',
        en: 'Managed technical aspects related to design and communication.',
      },
    ],
  },
  {
    id: 'ceramart',
    title: {
      ar: 'مصمم واجهات وتجربة مستخدم مستقل',
      en: 'Freelance UI/UX Designer',
    },
    organization: 'Ceramar',
    location: { ar: 'تركيا', en: 'Turkey' },
    period: '2020 — 2021',
    type: 'work',
    description: [
      {
        ar: 'إعداد أنظمة الهوية البصرية والمواد الإعلانية.',
        en: 'Prepared visual identity systems and advertising materials.',
      },
      {
        ar: 'دعم سير عمل التصميم التقني والتواصل.',
        en: 'Supported technical design and communication workflows.',
      },
    ],
  },
  {
    id: 'freelance-uiux',
    title: {
      ar: 'مصمم واجهات وتجربة مستخدم مستقل',
      en: 'Freelance UI/UX Designer',
    },
    organization: { ar: 'عملاء مستقلون', en: 'Independent Clients' },
    location: { ar: 'سوريا', en: 'Syria' },
    period: '2020 — 2021',
    type: 'work',
    description: [
      {
        ar: 'تصميم وتحسين واجهات وتجربة المستخدم لتطبيقات الموبايل ومواقع WordPress ومنصات ويب مخصصة لأكثر من 10 عملاء مستقلين.',
        en: 'Designed and improved UI/UX for mobile applications, WordPress-based websites, and custom web platforms for 10+ freelance clients.',
      },
      {
        ar: 'تسليم واجهات متجاوبة وسهلة الاستخدام تركز على الوضوح والتفاعل.',
        en: 'Delivered responsive, user-friendly interfaces focused on clarity and engagement.',
      },
    ],
  },
]

export const courses: CourseItem[] = [
  { title: { ar: 'تطوير الويب', en: 'Web Development' }, provider: 'YouTube', year: '2019' },
  { title: 'Python', provider: 'Udemy', year: '2019' },
  {
    title: { ar: 'تطوير تطبيقات الموبايل', en: 'Mobile App Development' },
    provider: 'Udemy',
    year: '2022',
  },
  { title: { ar: 'الأمن السيبراني', en: 'Cybersecurity' }, provider: 'Udemy', year: '2024' },
  { title: { ar: 'الأمن السيبراني', en: 'Cybersecurity' }, provider: 'MOD Syria', year: '2025' },
  { title: { ar: 'الذكاء الاصطناعي', en: 'AI' }, provider: 'MOD Syria', year: '2026' },
]
