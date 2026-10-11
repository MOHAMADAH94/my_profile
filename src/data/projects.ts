import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Mobi Shop',
    slug: 'mobi-shop',
    tagline: {
      ar: 'منصة SaaS متعددة المستأجرين لعمليات متاجر الموبايل والحضور الرقمي للمتجر.',
      en: 'Multi-tenant SaaS for mobile shop operations and digital store presence.',
    },
    description: {
      ar: 'منصة SaaS إنتاجية تساعد متاجر الهواتف على إدارة المخزون والمبيعات والإصلاحات والفرق والكتالوجات العامة من نظام واحد — ثم التوسع إلى حضور في سوق إلكتروني.',
      en: 'A production SaaS platform that helps phone shops manage inventory, sales, repairs, teams, and public catalogs from one system — then expand into an online marketplace presence.',
    },
    category: 'saas',
    status: 'live',
    year: '2025–2026',
    featured: true,
    role: {
      ar: 'ملكية كاملة للمنتج — تصميم النظام والخلفية والواجهة والنشر وتطور الميزات.',
      en: 'Full product ownership — system design, backend, frontend, deployment, and feature evolution.',
    },
    problem: {
      ar: 'أدوات المحاسبة التقليدية تسجّل غالباً ما حدث مسبقاً. أصحاب متاجر الموبايل يحتاجون برمجيات تساعدهم على إدارة ما يحدث الآن: المخزون وأجهزة IMEI ونقاط البيع والإصلاحات وأدوار الموظفين والمصروفات وعلاقات العملاء — مع منح المتجر حضوراً رقمياً أيضاً.',
      en: 'Traditional accounting tools mainly record what already happened. Mobile shop owners need software that helps them manage what is happening now: stock, IMEI devices, POS, repairs, staff roles, expenses, and customer relationships — while also giving the store a digital presence.',
    },
    solution: {
      ar: 'Mobi Shop مبني كمنصة SaaS متعددة المستأجرين. يحصل كل متجر على بيانات معزولة وصلاحيات حسب الأدوار وحالات اشتراك وسير عمل لنقاط البيع والمخزون ورؤى تشغيلية ذكية وصفحات كتالوج عامة اختيارية تربط المتجر الفعلي بسوق إلكتروني.',
      en: 'Mobi Shop is built as a multi-tenant SaaS. Each store gets isolated data, role-based access, subscription states, POS and inventory workflows, smart operational insights, and optional public catalog pages that connect the physical shop to an online marketplace.',
    },
    result: {
      ar: 'منصة حية على mobishop.online تغطي العمليات اليومية للمتجر والتوسع الرقمي عبر كتالوجات المتاجر وسوق عام.',
      en: 'A live platform at mobishop.online covering day-to-day store operations and digital expansion through store catalogs and a public marketplace.',
    },
    features: [
      {
        ar: 'متاجر متعددة المستأجرين مع عزل عبر X-Store',
        en: 'Multi-tenant stores with X-Store isolation',
      },
      {
        ar: 'أدوار: مالك، مدير، كاشير، فني',
        en: 'Roles: owner, manager, cashier, technician',
      },
      {
        ar: 'نموذج اشتراك تجريبي / نشط',
        en: 'Trial / active subscription model',
      },
      {
        ar: 'منتجات وفئات وباركود وIMEI وصور',
        en: 'Products, categories, barcodes, IMEI, and images',
      },
      {
        ar: 'نقطة بيع مع فواتير PDF',
        en: 'Point of Sale with PDF invoices',
      },
      {
        ar: 'سجلات مخزون وموردون ومشتريات',
        en: 'Inventory logs, suppliers, and purchases',
      },
      {
        ar: 'عملاء وديون وإصلاحات ومصروفات',
        en: 'Customers, debts, repairs, and expenses',
      },
      {
        ar: 'إدارة الفريق وإعدادات المتجر',
        en: 'Team management and store settings',
      },
      {
        ar: 'مركز الأعمال الذكي: تنبيهات المخزون وتحليل الربح ومساعد ذكاء اصطناعي',
        en: 'Smart Business Center: stock alerts, profit analysis, AI assistant',
      },
      {
        ar: 'صفحات كتالوج عامة للمتجر (/shop/{slug})',
        en: 'Public store catalog pages (/shop/{slug})',
      },
      {
        ar: 'سوق للمتاجر والمنتجات والعروض',
        en: 'Marketplace for stores, products, and offers',
      },
      {
        ar: 'واجهة عربية RTL مع وضع فاتح/داكن',
        en: 'Arabic RTL interface with light/dark modes',
      },
      {
        ar: 'دعم عملات متعددة',
        en: 'Multi-currency support',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Zustand',
      'Django',
      'Django REST Framework',
      'JWT',
      'PostgreSQL / MySQL / SQLite',
      'Dexie (offline-capable patterns)',
    ],
    technicalHighlights: [
      {
        ar: 'تحديد نطاق الطلبات متعددة المستأجرين عبر ترويسات سياق المتجر',
        en: 'Multi-tenant request scoping through store context headers',
      },
      {
        ar: 'مصادقة JWT مع صلاحيات حسب الأدوار',
        en: 'JWT authentication with role-based permissions',
      },
      {
        ar: 'وحدات تشغيلية للمبيعات والمخزون والإصلاحات في سطح منتج واحد',
        en: 'Operational modules for sales, inventory, and repairs in one product surface',
      },
      {
        ar: 'طبقة كتالوج عام وسوق فوق بيانات المتجر الخاصة',
        en: 'Public catalog + marketplace layer on top of private store data',
      },
      {
        ar: 'توليد مستندات عربية للفواتير والتقارير',
        en: 'Arabic document generation for invoices and reports',
      },
    ],
    challenges: [
      {
        challenge: {
          ar: 'خدمة متاجر كثيرة من قاعدة كود واحدة دون تسريب بيانات.',
          en: 'Serving many stores from one codebase without leaking data.',
        },
        approach: {
          ar: 'تصميم عزل متعدد المستأجرين حول هوية المتجر والأدوار وتحديد نطاق واجهة البرمجة.',
          en: 'Designed multi-tenant isolation around store identity, roles, and API scoping.',
        },
      },
      {
        challenge: {
          ar: 'التجاوز عن المحاسبة إلى العمليات اليومية للمتجر.',
          en: 'Going beyond bookkeeping into daily store operations.',
        },
        approach: {
          ar: 'نمذجة سير العمل الحقيقي — نقاط البيع وأجهزة IMEI والإصلاحات وأدوار الفريق وحركة المخزون — كميزات منتج من الدرجة الأولى.',
          en: 'Modeled real workflows — POS, IMEI devices, repairs, team roles, and inventory movement — as first-class product features.',
        },
      },
      {
        challenge: {
          ar: 'مساعدة المتاجر على التوسع رقمياً دون إعادة بناء موقع منفصل.',
          en: 'Helping shops expand digitally without a separate website rebuild.',
        },
        approach: {
          ar: 'إضافة كتالوجات المتاجر وطبقة سوق تنشر من النظام التشغيلي نفسه.',
          en: 'Added store catalogs and a marketplace layer that publish from the same operational system.',
        },
      },
    ],
    coverImage: '/images/projects/mobishop/marketplace.png',
    screenshots: [
      {
        src: '/images/projects/mobishop/marketplace.png',
        alt: {
          ar: 'سوق Mobi Shop العام',
          en: 'Mobi Shop public marketplace',
        },
        caption: {
          ar: 'سوق عام للمتاجر والمنتجات والعروض',
          en: 'Public marketplace for stores, products, and offers',
        },
      },
      {
        src: '/images/projects/mobishop/login.png',
        alt: {
          ar: 'تسجيل دخول التاجر في Mobi Shop',
          en: 'Mobi Shop merchant login',
        },
        caption: {
          ar: 'تسجيل دخول التاجر ونقطة دخول المنتج',
          en: 'Merchant login and product entry point',
        },
      },
      {
        src: '/images/projects/mobishop/invoice.png',
        alt: {
          ar: 'فاتورة مبيعات Mobi Shop',
          en: 'Mobi Shop sales invoice',
        },
        caption: {
          ar: 'فاتورة مبيعات مولَّدة من سير عمل نقطة البيع',
          en: 'Sales invoice generated from the POS workflow',
        },
      },
      {
        src: '/images/projects/mobishop/icon.png',
        alt: {
          ar: 'هوية منتج Mobi Shop',
          en: 'Mobi Shop product identity',
        },
        caption: {
          ar: 'هوية المنتج',
          en: 'Product branding',
        },
      },
    ],
    links: {
      liveUrl: 'https://mobishop.online',
      githubUrl: 'https://github.com/alasermohamad94/mobishop',
      demoUrl: 'https://mobishop.online/marketplace',
    },
  },
  {
    name: 'Basera',
    slug: 'basera',
    tagline: {
      ar: 'منصة تعليمية للموبايل مصممة للمتعلمين المكفوفين.',
      en: 'Educational mobile platform designed for blind learners.',
    },
    description: {
      ar: 'Basera تطبيق تعليمي يضع إمكانية الوصول أولاً ويجمع التنقل الصوتي والدروس الصوتية والاختبارات وسير عمل المحتوى في الخلفية ليتمكن الطلاب المكفوفون من التعلم عبر الصوت.',
      en: 'Basera is an accessibility-first educational application that combines voice navigation, audio lessons, quizzes, and backend content workflows so blind students can learn through sound.',
    },
    category: 'mobile',
    status: 'completed',
    year: '2025–2026',
    featured: true,
    platform: 'Android',
    fileSize: '47.5 MB',
    role: {
      ar: 'تطوير متكامل عبر عميل Flutter وخلفية Django.',
      en: 'Full-stack development across Flutter client and Django backend.',
    },
    problem: {
      ar: 'المتعلمون المكفوفون يحتاجون برمجيات تعليمية يمكن التنقل فيها بالصوت والصوت — وليس واجهات تضيف تعليقات إلى تصميم بصري فحسب.',
      en: 'Blind learners need educational software that is navigable by voice and audio — not interfaces that merely add captions to a visual design.',
    },
    solution: {
      ar: 'بُني Basera حول تسجيل الدروس بالكلام إلى نص، وتشغيل النص إلى كلام، والتنقل الصوتي الكامل، ومكتبات صوتية، واختبارات صوتية، وأدوات مراجعة للمتطوعين، وتحميلات دون اتصال.',
      en: 'Built Basera around speech-to-text lesson recording, text-to-speech playback, full voice navigation, audio libraries, voice quizzes, volunteer review tools, and offline downloads.',
    },
    result: {
      ar: 'تطبيق Android للإصدار مع خلفية API داعمة ونموذج تفاعل يركز على إمكانية الوصول.',
      en: 'A release Android application with a supporting API backend and accessibility-focused interaction model.',
    },
    features: [
      { ar: 'تسجيل دروس بالكلام إلى نص', en: 'Speech-to-text lesson recording' },
      { ar: 'تشغيل النص إلى كلام', en: 'Text-to-speech playback' },
      { ar: 'تنقل صوتي كامل', en: 'Full voice navigation' },
      { ar: 'فئات مكتبة صوتية', en: 'Audio library categories' },
      { ar: 'اختبارات صوتية', en: 'Voice quizzes' },
      { ar: 'أدوات مراجعة للمتطوعين', en: 'Volunteer review tools' },
      { ar: 'ملخص صوتي ذكي', en: 'Smart audio summary' },
      { ar: 'بحث صوتي', en: 'Voice search' },
      { ar: 'تحميلات دون اتصال', en: 'Offline downloads' },
      {
        ar: 'دعم تركيز موجّه لـ TalkBack / VoiceOver',
        en: 'TalkBack / VoiceOver-oriented focus support',
      },
    ],
    technologies: [
      'Flutter',
      'Riverpod',
      'Dio',
      'Hive',
      'speech_to_text',
      'flutter_tts',
      'Django',
      'Django REST Framework',
    ],
    technicalHighlights: [
      {
        ar: 'نموذج تفاعل موبايل يضع إمكانية الوصول أولاً',
        en: 'Accessibility-first mobile interaction model',
      },
      {
        ar: 'بنية محتوى تتمحور حول الصوت',
        en: 'Audio-centric content architecture',
      },
      {
        ar: 'واجهات خلفية للمحتوى التعليمي وتدفقات المراجعة',
        en: 'Backend APIs for educational content and review flows',
      },
    ],
    coverImage: '/images/projects/basera/cover.png',
    screenshots: [
      {
        src: '/images/projects/basera/cover.png',
        alt: { ar: 'واجهة تطبيق بصيرة التعليمية', en: 'Basera educational app interface' },
        caption: {
          ar: 'تجربة صوتية وتعليمية للمستخدمين المكفوفين',
          en: 'Audio-first learning experience for blind users',
        },
      },
      {
        src: '/images/projects/basera/icon.png',
        alt: { ar: 'أيقونة تطبيق Basera', en: 'Basera app icon' },
        caption: {
          ar: 'هوية تطبيق Basera',
          en: 'Basera application identity',
        },
      },
    ],
    links: {
      githubUrl: 'https://github.com/alasermohamad94/Basera',
      apkUrl: '/downloads/basera-release.apk',
    },
  },
  {
    name: 'Smart School',
    slug: 'smart-school',
    tagline: {
      ar: 'منصة SaaS متعددة المستأجرين لإدارة المدارس.',
      en: 'Multi-tenant school management SaaS.',
    },
    description: {
      ar: 'منصة عمليات مدرسية تغطي الطلاب والمعلمين وأولياء الأمور والصفوف والحضور والدرجات والنقل والمالية والإشعارات ضمن بنية SaaS متعددة المستأجرين.',
      en: 'A school operations platform covering students, teachers, parents, classes, attendance, grades, transport, finance, and notifications in a multi-tenant SaaS architecture.',
    },
    category: 'saas',
    status: 'completed',
    year: '2025',
    featured: true,
    role: {
      ar: 'تطوير SaaS متكامل (Django + React).',
      en: 'Full-stack SaaS development (Django + React).',
    },
    problem: {
      ar: 'المدارس تحتاج نظاماً متصلاً واحداً لسير العمل الأكاديمي والتشغيلي بدلاً من جداول متفرقة وأدوات غير مترابطة.',
      en: 'Schools need one connected system for academic and operational workflows instead of scattered spreadsheets and disconnected tools.',
    },
    solution: {
      ar: 'تصميم SaaS متعدد المستأجرين بوحدات واعية للأدوار للأكاديميات والحضور والدرجات والنقل والمالية والإشعارات، بما في ذلك مستويات الاشتراك.',
      en: 'Designed a multi-tenant SaaS with role-aware modules for academics, attendance, grades, transport, finance, and notifications, including subscription tiers.',
    },
    features: [
      { ar: 'طلاب ومعلمون وأولياء أمور', en: 'Students, teachers, and parents' },
      { ar: 'صفوف ومواد', en: 'Classes and subjects' },
      { ar: 'تتبع الحضور', en: 'Attendance tracking' },
      { ar: 'إدارة الدرجات', en: 'Grades management' },
      { ar: 'وحدة النقل', en: 'Transport module' },
      { ar: 'وحدة المالية', en: 'Finance module' },
      { ar: 'إشعارات', en: 'Notifications' },
      { ar: 'رؤى لوحة المعلومات', en: 'Dashboard insights' },
      { ar: 'اشتراكات أساسي / احترافي', en: 'Basic / Professional subscriptions' },
      { ar: 'واجهة عربية RTL', en: 'Arabic RTL interface' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'Django',
      'Django REST Framework',
      'JWT',
      'MySQL / SQLite',
    ],
    coverImage: '/images/projects/smart-school/cover.png',
    screenshots: [
      {
        src: '/images/projects/smart-school/cover.png',
        alt: {
          ar: 'لوحة تحكم المدرسة الذكية',
          en: 'Smart School management dashboard',
        },
        caption: {
          ar: 'لوحة عمليات مدرسية للطلاب والحضور والدرجات',
          en: 'School operations dashboard for students, attendance, and grades',
        },
      },
    ],
    links: {
      githubUrl: 'https://github.com/alasermohamad94/smart_school',
    },
  },
  {
    name: 'Medicaloop',
    slug: 'medicaloop',
    tagline: {
      ar: 'منصة SaaS متعددة المستأجرين لعيادات الرعاية الصحية.',
      en: 'Multi-tenant healthcare clinic SaaS.',
    },
    description: {
      ar: 'منصة رعاية صحية لعمليات العيادة: المرضى والمواعيد والزيارات والوصفات وصفحات الأطباء العامة وأسس بوابة المريض وصلاحيات RBAC متعددة المستأجرين.',
      en: 'A healthcare platform for clinic operations: patients, appointments, visits, prescriptions, doctor public pages, patient portal foundations, and multi-tenant RBAC.',
    },
    category: 'saas',
    status: 'completed',
    year: '2025',
    featured: true,
    role: {
      ar: 'تطوير منتج متكامل عبر خدمات الخلفية وواجهة React.',
      en: 'Full-stack product development across backend services and React frontend.',
    },
    problem: {
      ar: 'العيادات تحتاج سير عمل منسقاً للمرضى والمواعيد والملاحظات السريرية والمتابعات — مع تحكم مناسب بالوصول عبر المؤسسات.',
      en: 'Clinics need coordinated workflows for patients, appointments, clinical notes, and follow-ups — with proper access control across organizations.',
    },
    solution: {
      ar: 'بناء SaaS رعاية صحية متعدد المستأجرين مع RBAC وإعدادات العيادة والحجز والجداول الزمنية للزيارات والوصفات/الملفات والإشعارات وأسس وحدات متخصصة مثل OBGYN.',
      en: 'Built a multi-tenant healthcare SaaS with RBAC, clinic settings, booking, visit timelines, prescriptions/files, notifications, and specialized module foundations such as OBGYN.',
    },
    features: [
      { ar: 'تعدد المستأجرين وRBAC', en: 'Multi-tenancy and RBAC' },
      { ar: 'إعدادات العيادة وساعات العمل', en: 'Clinic settings and working hours' },
      { ar: 'سجلات المرضى', en: 'Patient records' },
      { ar: 'صفحة طبيب عامة وحجز', en: 'Public doctor page and booking' },
      { ar: 'مواعيد', en: 'Appointments' },
      { ar: 'أسس بوابة المريض', en: 'Patient portal foundations' },
      { ar: 'زيارات وجدول زمني سريري', en: 'Visits and clinical timeline' },
      { ar: 'وصفات وملفات', en: 'Prescriptions and files' },
      { ar: 'متابعات وإشعارات', en: 'Follow-ups and notifications' },
      { ar: 'أسس وحدة OBGYN', en: 'OBGYN module foundations' },
      { ar: 'أسس الفوترة / الاشتراك', en: 'Billing / subscription foundations' },
    ],
    technologies: [
      'React',
      'MUI',
      'i18next',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Docker',
    ],
    coverImage: '/images/projects/medicaloop/cover.png',
    screenshots: [
      {
        src: '/images/projects/medicaloop/cover.png',
        alt: {
          ar: 'لوحة تحكم Medicaloop للعيادات',
          en: 'Medicaloop clinic operations dashboard',
        },
        caption: {
          ar: 'واجهة إدارة المرضى والمواعيد والزيارات',
          en: 'Interface for patients, appointments, and visits',
        },
      },
    ],
    links: {
      githubUrl: 'https://github.com/alasermohamad94/medicaloop',
    },
  },
  {
    name: 'Clinic Management',
    slug: 'clinic-management',
    tagline: {
      ar: 'نظام حجز وإدارة لعيادات العيادات الخارجية.',
      en: 'Outpatient clinic booking and management system.',
    },
    description: {
      ar: 'تطبيق ويب لإدارة العيادات لتهيئة العيادات وإدارة فترات المواعيد ومعالجة حجوزات المرضى ومراقبة الإحصاءات التشغيلية الحية.',
      en: 'A clinic management web application for configuring clinics, managing appointment slots, handling patient bookings, and monitoring live operational stats.',
    },
    category: 'web',
    status: 'live',
    year: '2025',
    featured: true,
    role: {
      ar: 'تطوير متكامل (Django + React).',
      en: 'Full-stack development (Django + React).',
    },
    problem: {
      ar: 'عيادات العيادات الخارجية تحتاج طريقة موثوقة لتهيئة التوفر وقبول حجوزات المرضى دون تعارضات يدوية في الفترات.',
      en: 'Outpatient clinics need a reliable way to configure availability and accept patient bookings without manual slot conflicts.',
    },
    solution: {
      ar: 'تنفيذ إنشاء/قراءة/تحديث/حذف للعيادات وتهيئة الفترات وتدفقات التفعيل/التعطيل وإلغاء الحجز الذي يعيد الفترات والبحث/التصفية وأدوات الإدارة.',
      en: 'Implemented clinic CRUD, slot configuration, activate/deactivate flows, booking cancellation that restores slots, search/filter, and admin tools.',
    },
    features: [
      { ar: 'CRUD للعيادات', en: 'Clinic CRUD' },
      { ar: 'تهيئة الفترات', en: 'Slot configuration' },
      { ar: 'تفعيل / تعطيل العيادات', en: 'Activate / deactivate clinics' },
      { ar: 'حجوزات المرضى', en: 'Patient bookings' },
      { ar: 'الإلغاء يعيد الفترات', en: 'Cancellation restores slots' },
      { ar: 'إحصاءات حية', en: 'Live stats' },
      { ar: 'بحث وتصفية', en: 'Search and filter' },
      { ar: 'أدوات إدارية', en: 'Admin tools' },
    ],
    technologies: ['React', 'Axios', 'Django', 'Django REST Framework', 'JWT', 'MySQL'],
    coverImage: '/images/projects/clinic/cover.png',
    screenshots: [
      {
        src: '/images/projects/clinic/cover.png',
        alt: {
          ar: 'واجهة حجز العيادات الخارجية',
          en: 'Outpatient clinic booking interface',
        },
        caption: {
          ar: 'منصة حجز المواعيد للمشفى الوطني — أعزاز',
          en: 'Appointment booking platform for Azaz National Hospital',
        },
      },
      {
        src: '/images/projects/clinic/preview.jpg',
        alt: {
          ar: 'معاينة نظام إدارة العيادة',
          en: 'Clinic management system preview',
        },
      },
    ],
    links: {
      liveUrl: 'https://www.azazhospital.online',
      githubUrl: 'https://github.com/alasermohamad94/clinic-management',
    },
  },
  {
    name: 'Crystal Store',
    slug: 'crystal-store',
    tagline: {
      ar: 'تجربة تجارة إلكترونية للسلع الرقمية: بطاقات وألعاب واشتراكات.',
      en: 'Digital goods e-commerce experience for cards, games, and subscriptions.',
    },
    description: {
      ar: 'عميل تجارة إلكترونية لبيع البرمجيات والألعاب والاشتراكات الرقمية، مع تدفقات الحساب وحزم المنتجات والطلبات وسجل الرصيد.',
      en: 'An e-commerce client for selling software, games, and digital subscriptions, with account flows, product packages, orders, and balance history.',
    },
    category: 'ecommerce',
    status: 'live',
    year: '2025',
    featured: false,
    platform: 'Android + Web',
    fileSize: '26.6 MB',
    role: {
      ar: 'تصميم وبناء وبرمجة تجربة المتجر.',
      en: 'Designed, built, and programmed the store experience.',
    },
    features: [
      { ar: 'تسجيل الدخول والتسجيل', en: 'Login and registration' },
      { ar: 'فئات ومنتجات', en: 'Categories and products' },
      { ar: 'حزم', en: 'Packages' },
      { ar: 'طلبات', en: 'Orders' },
      { ar: 'الملف الشخصي والرصيد', en: 'Profile and balance' },
      { ar: 'سجل الرصيد', en: 'Balance history' },
      { ar: 'واجهة عربية', en: 'Arabic UI' },
    ],
    technologies: ['Flutter', 'Dio', 'Provider', 'Django backend'],
    coverImage: '/images/projects/crystal/cover.png',
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
    links: {
      liveUrl: 'https://crystal4card.com',
      githubUrl: 'https://github.com/alasermohamad94/crystal_store',
      apkUrl: '/downloads/crystal-store-release.apk',
    },
  },
  {
    name: 'Alwaleed Online Store',
    slug: 'alwaleed-store',
    tagline: {
      ar: 'منصة تجارة إلكترونية للبطاقات والحزم الرقمية.',
      en: 'E-commerce platform for digital cards and packages.',
    },
    description: {
      ar: 'متجر إلكتروني مدعوم بـ Django للمنتجات والحزم الرقمية، بما في ذلك الحسابات والسلة/الطلبات ومنطق تسعير متدرج.',
      en: 'A Django-powered online store for digital products and packages, including accounts, cart/orders, and tiered pricing logic.',
    },
    category: 'ecommerce',
    status: 'completed',
    year: '2025',
    featured: false,
    role: {
      ar: 'بناء وتصميم وبرمجة المتجر.',
      en: 'Built, designed, and programmed the store.',
    },
    features: [
      { ar: 'حسابات', en: 'Accounts' },
      { ar: 'منتجات وحزم', en: 'Products and packages' },
      { ar: 'سلة وطلبات', en: 'Cart and orders' },
      { ar: 'مستويات المستخدم / تسعير الربح', en: 'User levels / profit pricing' },
      { ar: 'تكامل تواصل WhatsApp', en: 'WhatsApp contact integration' },
    ],
    technologies: ['Django', 'Bootstrap', 'JavaScript'],
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
    links: {
      githubUrl: 'https://github.com/alasermohamad94/alwaleed_store',
    },
  },
  {
    name: 'Tamayouz Card Store',
    slug: 'tamayouz-card',
    tagline: {
      ar: 'موقع تجارة إلكترونية للبرمجيات والألعاب والاشتراكات.',
      en: 'E-commerce website for software, games, and subscriptions.',
    },
    description: {
      ar: 'متجر إلكتروني بُني لبيع البرمجيات والألعاب ومختلف الاشتراكات الرقمية.',
      en: 'An online store built for selling software, games, and various digital subscriptions.',
    },
    category: 'ecommerce',
    status: 'completed',
    year: '2024',
    featured: false,
    role: {
      ar: 'بناء وتصميم وبرمجة المتجر.',
      en: 'Built, designed, and programmed the store.',
    },
    features: [
      { ar: 'كتالوج منتجات رقمية', en: 'Digital product catalog' },
      { ar: 'واجهة متجر إلكتروني', en: 'E-commerce storefront' },
      {
        ar: 'تدفقات بيع الاشتراكات والبرمجيات',
        en: 'Subscription and software sales flows',
      },
    ],
    technologies: ['Web', 'E-commerce'],
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
    links: {},
  },
  {
    name: 'Currency Exchange App',
    slug: 'currency-app',
    tagline: {
      ar: 'تطبيق موبايل لأسعار الصرف والفروع وحساب العملات.',
      en: 'Mobile app for exchange rates, branches, and currency calculation.',
    },
    description: {
      ar: 'تطبيق Flutter لشركة صرافة يعرض الأسعار الحية ومواقع الفروع وحاسبة عملات وتواصلاً أسرع مع العملاء.',
      en: 'A Flutter application for a currency exchange company showing live rates, branch locations, a currency calculator, and faster customer communication.',
    },
    category: 'mobile',
    status: 'completed',
    year: '2025',
    featured: false,
    platform: 'Android',
    role: {
      ar: 'تصميم وتطوير تطبيق الموبايل.',
      en: 'Designed and developed the mobile application.',
    },
    features: [
      { ar: 'قائمة أسعار الصرف (شراء/بيع)', en: 'Exchange rate list (buy/sell)' },
      { ar: 'حاسبة العملات', en: 'Currency calculator' },
      { ar: 'مواقع الفروع', en: 'Branch locations' },
      { ar: 'تواصل WhatsApp', en: 'WhatsApp contact' },
      { ar: 'شاشة حول', en: 'About screen' },
    ],
    technologies: ['Flutter', 'Dart', 'HTTP APIs'],
    coverImage: '/images/projects/currency/cover.png',
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
    links: {
      githubUrl: 'https://github.com/alasermohamad94/currency_app',
      liveUrl: 'http://alhassanexchange.com',
    },
  },
  {
    name: 'Masarifi',
    slug: 'masarifi',
    tagline: {
      ar: 'متتبع مالية شخصية دون اتصال لنظام Android.',
      en: 'Offline personal finance tracker for Android.',
    },
    description: {
      ar: 'تطبيق Flutter للمالية للدخل والمصروفات والديون والمهام — مع مخططات وترخيص مرتبط بالجهاز وتصدير/استيراد بيانات محلية.',
      en: 'A Flutter finance app for income, expenses, debts, and tasks — with charts, device-bound licensing, and local data export/import.',
    },
    category: 'mobile',
    status: 'completed',
    year: '2025',
    featured: false,
    platform: 'Android',
    fileSize: '25.9 MB',
    role: {
      ar: 'تصميم وتطوير التطبيق وأدوات الترخيص.',
      en: 'Designed and developed the application and license tooling.',
    },
    features: [
      {
        ar: 'دخل ومصروفات وديون ومهام',
        en: 'Income, expenses, debts, and tasks',
      },
      { ar: 'مخططات وملخصات', en: 'Charts and summaries' },
      {
        ar: 'تفعيل ترخيص مرتبط بالجهاز',
        en: 'Device-bound license activation',
      },
      { ar: 'تصدير/استيراد JSON', en: 'JSON export/import' },
      { ar: 'تقارير نصية عبر WhatsApp', en: 'WhatsApp text reports' },
      { ar: 'دعم CSV / المشاركة', en: 'CSV / share support' },
    ],
    technologies: ['Flutter', 'Provider', 'fl_chart', 'SQLite / local storage'],
    coverImage: '/images/projects/masarifi/cover.png',
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
    links: {
      githubUrl: 'https://github.com/alasermohamad94/Masarifi',
      apkUrl: '/downloads/masarifi-release.apk',
    },
  },
  {
    name: 'Taekwondo Club',
    slug: 'taekwondo-club',
    tagline: {
      ar: 'تطبيق Android دون اتصال لإدارة المتدربين والحضور في النادي.',
      en: 'Offline Android app for club trainee and attendance management.',
    },
    description: {
      ar: 'تطبيق Android أصلي لإدارة متدربي نادي التايكوندو والحضور والأحزمة والاشتراكات وتواصل الأوصياء — مع مولّد رموز ترخيص منفصل.',
      en: 'A native Android application for managing taekwondo club trainees, attendance, belts, subscriptions, and guardian communication — with a separate license code generator.',
    },
    category: 'mobile',
    status: 'completed',
    year: '2025',
    featured: false,
    platform: 'Android',
    fileSize: '7.2 MB',
    role: {
      ar: 'تصميم وتطوير تطبيق Android.',
      en: 'Designed and developed the Android application.',
    },
    features: [
      { ar: 'إدارة متدربين لعدة أندية', en: 'Multi-club trainee management' },
      { ar: 'تتبع الحضور', en: 'Attendance tracking' },
      {
        ar: 'أحزمة ووزن وعمر وهاتف الوصي',
        en: 'Belts, weight, age, and guardian phone',
      },
      { ar: 'تنبيهات انتهاء الاشتراك', en: 'Subscription expiry alerts' },
      {
        ar: 'رسائل WhatsApp للأوصياء',
        en: 'WhatsApp messages to guardians',
      },
      { ar: 'رموز ترخيص الجهاز', en: 'Device license codes' },
      {
        ar: 'استيراد/تصدير نسخة احتياطية JSON',
        en: 'JSON backup import/export',
      },
    ],
    technologies: ['Kotlin', 'Android', 'SQLite'],
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
    links: {
      apkUrl: '/downloads/taekwondo-club.apk',
    },
  },
  {
    name: 'Stolen Phone Tracking System',
    slug: 'stolen-phone-system',
    tagline: {
      ar: 'نظام تشغيلي لتتبع الهواتف المسروقة.',
      en: 'Operational system for tracking stolen phones.',
    },
    description: {
      ar: 'نظام متكامل طُوّر لتتبع الهواتف المسروقة، ويُشغَّل مع فريق تنسيق يغطي التسويق والأنشطة المرتبطة بالتطبيق.',
      en: 'A complete system developed to track stolen phones, operated together with a coordination team covering marketing and application-related activities.',
    },
    category: 'business',
    status: 'completed',
    year: '2021–2025',
    featured: false,
    role: {
      ar: 'تطوير النظام ودعم التنسيق التشغيلي المستمر.',
      en: 'Developed the system and supported ongoing operational coordination.',
    },
    features: [
      {
        ar: 'سير عمل تتبع الهواتف المسروقة',
        en: 'Stolen phone tracking workflows',
      },
      {
        ar: 'دعم المراقبة التشغيلية',
        en: 'Operational monitoring support',
      },
      {
        ar: 'التنسيق مع أنشطة التسويق والتطبيق',
        en: 'Coordination with marketing and application activities',
      },
    ],
    technologies: ['Custom software system'],
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
    links: {},
  },
  {
    name: 'Kids Quiz Learning Game',
    slug: 'kids-quiz-game',
    tagline: {
      ar: 'لعبة اختبارات تعليمية تحول الإجابات الخاطئة إلى شروحات.',
      en: 'Educational quiz game that turns wrong answers into explanations.',
    },
    description: {
      ar: 'لعبة تعليمية للأطفال تقدّم المعلومات بطريقة جذابة، وتشرح الإجابات الصحيحة عندما يختار الطفل خطأً، وتستخدم نظام نقاط لتحفيز التعلم.',
      en: 'A children’s educational game that delivers information in an engaging way, explains correct answers when a child chooses incorrectly, and uses a points system to motivate learning.',
    },
    category: 'mobile',
    status: 'completed',
    year: '2024',
    featured: false,
    role: {
      ar: 'تصميم تجربة اللعبة التعليمية.',
      en: 'Designed the educational game experience.',
    },
    features: [
      {
        ar: 'تدفق اختبارات تعليمية جذابة',
        en: 'Engaging educational quiz flow',
      },
      {
        ar: 'شروحات للإجابات غير الصحيحة',
        en: 'Explanations for incorrect answers',
      },
      {
        ar: 'نظام نقاط للتحفيز',
        en: 'Points system for motivation',
      },
    ],
    technologies: ['Mobile / Game UI'],
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
    links: {},
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug)
  if (!current) return projects.slice(0, limit)
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0
      const bScore = b.category === current.category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}
