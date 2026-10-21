# Mohamad Ahmad Hamdan — Portfolio

Premium personal portfolio for Mohamad Ahmad Hamdan (محمد أحمد حمدان) — SaaS, assessment platforms, business systems, and mobile products.

## Stack

- React 19 + TypeScript
- Vite
- React Router
- CSS Modules + design tokens

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Content

Edit structured data in `src/data/`:

- `personal.ts` — name, title, contact, about copy
- `projects.ts` — project case studies and links
- `skills.ts` — skill categories
- `experience.ts` — journey / education / courses
- `content.ts` — what I build, approach, philosophy

Assets live in `public/`:

- `public/cv/` — CV PDF
- `public/downloads/` — APK files
- `public/images/` — project screenshots and branding

## Routes

- `/` — homepage
- `/project/:slug` — project case study
