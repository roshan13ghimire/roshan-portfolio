# Developer Portfolio

A clean, professional portfolio site built with React, Vite, and Tailwind CSS —
designed to be scanned by a recruiter in under two minutes.

## Tech stack

- React 18 (Vite)
- Tailwind CSS
- Framer Motion (subtle fade/slide reveals only)
- React Icons

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

```bash
npm run build     # production build → /dist
npm run preview   # preview the production build locally
```

## Customizing the content

Almost everything on the page is driven by plain data files in `src/data/`,
so you shouldn't need to touch component code to make it yours:

| File | Controls |
|---|---|
| `src/data/personalInfo.js` | Name, role, tagline, contact links, resume URL, About text |
| `src/data/skills.js` | Skill categories and items |
| `src/data/projects.js` | Project cards (title, description, tech, links) |
| `src/data/experience.js` | Work experience timeline |
| `src/data/education.js` | Education entries |
| `src/data/certifications.js` | Certifications (leave the array empty to hide the section) |
| `src/data/navLinks.js` | Navbar links |

### Assets to replace

- `public/profile-placeholder.svg` — swap for your real photo (update
  `photoUrl` in `personalInfo.js` to match the new filename).
- `public/resume.pdf` — add your resume PDF here (the Resume button already
  points at `/resume.pdf`).
- `public/projects/placeholder-*.svg` — swap for real project screenshots.

## Contact form

The contact form has no backend — submitting it opens a pre-filled email in
the visitor's mail client, addressed to the email in `personalInfo.js`. If
you'd rather accept submissions without leaving the page, wire up a service
like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)
inside `src/components/sections/Contact.jsx`'s `handleSubmit` function.

## Project structure

```
src/
  components/
    layout/      Navbar, Footer, Container
    ui/          Button, Badge, SectionHeading, Reveal (shared, reusable)
    sections/    One component per page section (Hero, About, Skills, ...)
  data/          All editable content, separate from markup
  hooks/         useScrolled, useActiveSection
  App.jsx
  main.jsx
  index.css
```

## Deployment

This is a static Vite app, so it deploys cleanly to Vercel, Netlify, or
GitHub Pages:

**Vercel:** import the repo at [vercel.com/new](https://vercel.com/new) —
it auto-detects Vite, no configuration needed.

**Netlify:** build command `npm run build`, publish directory `dist`.
