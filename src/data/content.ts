import type { ContentCard } from '../types'

export const whatIBuild: ContentCard[] = [
  {
    id: 'saas',
    title: { ar: 'منصات SaaS', en: 'SaaS Platforms' },
    description: {
      ar: 'منصات متعددة المستأجرين مصممة لخدمة عدة أعمال من نظام واحد قابل للتوسع — مع أدوار واشتراكات وبنية منتج مشتركة.',
      en: 'Multi-tenant platforms designed to serve multiple businesses from a single scalable system — with roles, subscriptions, and shared product infrastructure.',
    },
  },
  {
    id: 'business',
    title: { ar: 'أنظمة إدارة الأعمال', en: 'Business Management Systems' },
    description: {
      ar: 'برمجيات تشغيلية للمخزون والمبيعات والعيادات والمدارس وسير العمل اليومي الذي يُبقي الفرق متناسقة.',
      en: 'Operational software for inventory, sales, clinics, schools, and day-to-day workflows that keep teams aligned.',
    },
  },
  {
    id: 'web',
    title: { ar: 'تطبيقات الويب', en: 'Web Applications' },
    description: {
      ar: 'منتجات ويب حديثة بواجهات واضحة وواجهات برمجية مصادق عليها ولوحات معلومات يمكن استخدامها فعلياً.',
      en: 'Modern web products with clear interfaces, authenticated APIs, and dashboards people can actually use.',
    },
  },
  {
    id: 'mobile',
    title: { ar: 'تطبيقات الموبايل', en: 'Mobile Applications' },
    description: {
      ar: 'تطبيقات Flutter وAndroid للمالية والتعليم والنوادي وأسعار الصرف والتجارة الرقمية.',
      en: 'Flutter and Android apps for finance, education, clubs, exchange rates, and digital commerce.',
    },
  },
  {
    id: 'apis',
    title: { ar: 'واجهات REST والخلفيات', en: 'REST APIs & Backends' },
    description: {
      ar: 'خلفيات Django وASP.NET مع المصادقة والصلاحيات ونماذج نطاق منظمة.',
      en: 'Django and ASP.NET backends with authentication, permissions, and structured domain models.',
    },
  },
  {
    id: 'ecommerce',
    title: { ar: 'التجارة الإلكترونية والمتاجر الرقمية', en: 'E-commerce & Digital Stores' },
    description: {
      ar: 'واجهات متاجر للبرمجيات والألعاب والبطاقات والاشتراكات — بما في ذلك الكتالوجات والطلبات وأرصدة الحسابات.',
      en: 'Storefronts for software, games, cards, and subscriptions — including catalogs, orders, and account balances.',
    },
  },
]

export const technicalApproach: ContentCard[] = [
  {
    step: '01',
    title: { ar: 'فهم المشكلة', en: 'Understand the Problem' },
    description: {
      ar: 'توضيح لمن المنتج، وما الذي يتعطل اليوم، وأي سير عمل يجب تحسينه أولاً.',
      en: 'Clarify who the product is for, what breaks today, and which workflow must improve first.',
    },
  },
  {
    step: '02',
    title: { ar: 'تصميم النظام', en: 'Design the System' },
    description: {
      ar: 'رسم الكيانات والأدوار والصلاحيات وأسطح المنتج قبل كتابة كود الإنتاج.',
      en: 'Map entities, roles, permissions, and product surfaces before writing production code.',
    },
  },
  {
    step: '03',
    title: { ar: 'بناء المنتج', en: 'Build the Product' },
    description: {
      ar: 'تنفيذ الخلفية والواجهة وطبقات الموبايل كمنتج متماسك واحد — وليس قطعاً منفصلة.',
      en: 'Implement backend, interface, and mobile layers as one coherent product — not disconnected pieces.',
    },
  },
  {
    step: '04',
    title: { ar: 'الاختبار والتحسين', en: 'Test & Improve' },
    description: {
      ar: 'التحقق من التدفقات الحقيقية: تسجيل الدخول والأدوار والمخزون والحجوزات والاستخدام دون اتصال والحالات الحدية.',
      en: 'Validate real flows: login, roles, inventory, bookings, offline use, and edge cases.',
    },
  },
  {
    step: '05',
    title: { ar: 'النشر', en: 'Deploy' },
    description: {
      ar: 'الإطلاق إلى بيئات الإنتاج مع استضافة عملية وإعداد وانضباط في الإصدارات.',
      en: 'Ship to production environments with practical hosting, configuration, and release discipline.',
    },
  },
  {
    step: '06',
    title: { ar: 'الاستمرار في التطوير', en: 'Continue Evolving' },
    description: {
      ar: 'إضافة وحدات وتقوية الأمان وتحسين تجربة الاستخدام وتوسيع المنتج مع نمو الاستخدام.',
      en: 'Add modules, harden security, improve UX, and expand the product as usage grows.',
    },
  },
]

export const philosophy: ContentCard[] = [
  {
    title: { ar: 'حل مشاكل حقيقية', en: 'Solve real problems' },
    description: {
      ar: 'كل ميزة يجب أن ترتبط بحاجة تشغيلية — مخزون، حجز، تعلّم، مبيعات، أو تنسيق.',
      en: 'Every feature should map to an operational need — stock, booking, learning, sales, or coordination.',
    },
  },
  {
    title: { ar: 'بناء أنظمة قابلة للصيانة', en: 'Build maintainable systems' },
    description: {
      ar: 'تفضيل بنية واضحة ووحدات قابلة لإعادة الاستخدام ونماذج بيانات يمكن أن تنمو مع المنتج.',
      en: 'Prefer clear architecture, reusable modules, and data models that can grow with the product.',
    },
  },
  {
    title: { ar: 'التفكير بالمستخدم', en: 'Think about the user' },
    description: {
      ar: 'يجب أن تقلل الواجهات الاحتكاك لأصحاب المتاجر وطاقم العيادات والطلاب ومستخدمي الموبايل.',
      en: 'Interfaces should reduce friction for store owners, clinic staff, students, and mobile users.',
    },
  },
  {
    title: { ar: 'التصميم قبل البرمجة', en: 'Design before coding' },
    description: {
      ar: 'الأدوار والتدفقات وحدود النظام تأتي أولاً. الكود يتبع نموذج المنتج.',
      en: 'Roles, flows, and system boundaries come first. Code follows the product model.',
    },
  },
  {
    title: { ar: 'البناء من أجل النمو', en: 'Build for growth' },
    description: {
      ar: 'تعدد المستأجرين والاشتراكات والميزات المعيارية تجعل المنتجات قابلة للتوسع بدلاً من أن تكون قابلة للرمي.',
      en: 'Multi-tenancy, subscriptions, and modular features make products expandable instead of disposable.',
    },
  },
  {
    title: { ar: 'التحسين المستمر', en: 'Continuously improve' },
    description: {
      ar: 'انشر، راقب، حسّن — من الفواتير والكتالوجات إلى إمكانية الوصول والدعم دون اتصال.',
      en: 'Ship, observe, refine — from invoices and catalogs to accessibility and offline support.',
    },
  },
]
