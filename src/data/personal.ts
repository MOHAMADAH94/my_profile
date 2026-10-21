import type { PersonalInfo, SocialLink } from '../types'

export const personalInfo: PersonalInfo = {
  name: { ar: 'محمد أحمد حمدان', en: 'Mohamad Ahmad Hamdan' },
  shortName: 'MAH',
  title: { ar: 'مهندس معلوماتية', en: 'Informatics Engineer' },
  titleSecondary: {
    ar: 'مطور Full-Stack · مطور منتجات ويب وموبايل وSaaS',
    en: 'Full-Stack Developer · Web, Mobile & SaaS Product Builder',
  },
  location: { ar: 'حلب، سوريا', en: 'Aleppo, Syria' },
  email: 'eng.mohamadah94@gmail.com',
  phone: '+963967770101',
  heroLabel: {
    ar: 'مهندس معلوماتية · مطور Full-Stack',
    en: 'Informatics Engineer · Full-Stack Developer',
  },
  heroHeadline: {
    ar: 'أبني منتجات برمجية تحل مشاكل أعمال حقيقية.',
    en: 'Building software products that solve real business problems.',
  },
  heroIntro: {
    ar: 'أنا مهندس معلوماتية أصمّم وأطوّر منصات ويب حديثة وتطبيقات موبايل وأنظمة SaaS — من تعريف المشكلة إلى النشر — مع التركيز على منتجات عملية يمكن للأعمال تشغيلها فعلياً.',
    en: 'I am an Informatics Engineer who designs and develops modern web platforms, mobile applications, and SaaS systems — from problem definition to deployment — with a focus on practical products businesses can actually run.',
  },
  summary: {
    ar: 'مهندس معلوماتية ومطور ويب وموبايل متكامل. أسسي الأكاديمي يمتد عبر الذكاء الاصطناعي والشبكات وأمن الأنظمة وقواعد البيانات وهندسة الويب — وأطبّق هذا الأساس على منصات SaaS متعددة المستأجرين وأنظمة الأعمال والتجارة الإلكترونية ومنتجات الموبايل.',
    en: 'Informatics Engineer and full-stack web & mobile developer. My academic foundation spans AI, networks, systems security, databases, and web engineering — and I apply that base to multi-tenant SaaS platforms, business systems, e-commerce, and mobile products.',
  },
  about: [
    {
      ar: 'أحمل بكالوريوس في هندسة المعلوماتية. العمل الجامعي عبر الذكاء الاصطناعي وشبكات الحاسوب وأمن الأنظمة وقواعد البيانات وهندسة الويب شكّل طريقة تفكيري في البرمجيات: ليس الشاشات فحسب، بل الأنظمة والبيانات والأمن وقيود العالم الحقيقي.',
      en: 'I hold a Bachelor’s in Informatics Engineering. University work across artificial intelligence, computer networks, systems security, databases, and web engineering shaped how I think about software: not only screens, but systems, data, security, and real-world constraints.',
    },
    {
      ar: 'بدأت في واجهات المستخدم وتجربة الاستخدام والهوية البصرية، ثم انتقلت أعمق إلى الهندسة المتكاملة — بناء منتجات كاملة بدلاً من واجهات معزولة.',
      en: 'I started in UI/UX and visual identity work, then moved deeper into full-stack engineering — building complete products rather than isolated interfaces.',
    },
    {
      ar: 'أكثر ما أستمتع به هو تحويل مشكلة تشغيلية فوضوية إلى منتج واضح: أدوار، سير عمل، نماذج بيانات، واجهات برمجية، وواجهات يستخدمها الناس يومياً.',
      en: 'What I enjoy most is turning a messy operational problem into a clear product: roles, workflows, data models, APIs, and interfaces that people use every day.',
    },
    {
      ar: 'SaaS والأنظمة التشغيلية تناسب طريقة تفكيري بشكل طبيعي. منصات مثل Mobi Shop وSmart School وMedicaloop ومنصة الاختبارات علّمتني التصميم لعدة أعمال وصلاحيات واشتراكات ومسارات تقييم وقابلية الصيانة على المدى الطويل — وليس صفحات لمرة واحدة فقط.',
      en: 'SaaS and operational systems are a natural fit for how I think. Platforms like Mobi Shop, Smart School, Medicaloop, and the Exam Platform taught me to design for multiple businesses, permissions, subscriptions, assessment workflows, and long-term maintainability — not just one-off pages.',
    },
  ],
  languages: [
    { name: { ar: 'العربية', en: 'Arabic' }, level: { ar: 'لغة أم', en: 'Native' } },
    { name: { ar: 'الإنجليزية', en: 'English' }, level: { ar: 'طلاقة', en: 'Fluent' } },
    { name: { ar: 'التركية', en: 'Turkish' }, level: { ar: 'طلاقة', en: 'Fluent' } },
  ],
  cvUrl: '/cv/Mohamad-Hamdan-2026.pdf',
  githubUrl: 'https://github.com/MOHAMADAH94',
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/MOHAMADAH94',
    external: true,
  },
  {
    id: 'email',
    label: { ar: 'البريد', en: 'Email' },
    href: 'mailto:eng.mohamadah94@gmail.com',
  },
]
