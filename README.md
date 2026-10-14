# Nikhil Gopal More — Cosmic Portfolio

A production-ready, responsive portfolio built from the supplied resume. The site uses React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons, with a local royalty-free cosmic video and a static poster fallback.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

### Production build

```bash
npm run check
npm run preview
```

`npm run check` runs ESLint and a full TypeScript/Vite production build.

## Personalize the content

All portfolio content is centralized in:

```text
src/data/portfolio.ts
```

Update these fields first:

- `person` — name, title, location, email, biography, and career goal
- `links` — GitHub, LinkedIn, coding profiles, and resume path
- `skills` — only verified skills; no percentages are required
- `projects` — titles, descriptions, stacks, GitHub links, and live demos
- `timeline` and `certifications` — education, roles, training, and achievements
- `media` — background video, poster, and credit

GitHub and LinkedIn URLs are intentionally empty because they were not present in the supplied resume. The interface renders them as unavailable rather than linking to a fabricated profile. Add the full URLs in `portfolio.ts` to activate them.

### Add a real project

Edit an item in `portfolio.projects`:

```ts
{
  title: 'Your Project',
  eyebrow: 'FEATURED PROJECT',
  description: 'What it does, why it matters, and your contribution.',
  stack: ['React', 'TypeScript'],
  github: 'https://github.com/your-handle/your-repo',
  live: 'https://your-project.example.com',
  featured: true,
  placeholder: false,
  visual: 'terminal', // terminal | nodes | orbit
}
```

The included concept projects are clearly labeled and do not claim completed work.

## Contact form behavior

The current form is intentionally honest and backend-free:

1. It validates name, email, subject, and message.
2. It includes a hidden honeypot field for basic bot filtering.
3. It prepares a `mailto:` draft in the visitor's email application.
4. It never claims that a message was sent or stores data silently.

### Connect a real backend

Replace the `handleSubmit` delivery step in `src/components/Contact.tsx` with your preferred provider. Good options include:

- Resend + a Vercel/Netlify serverless function
- Formspree
- Netlify Forms
- EmailJS (client-side, but keep keys and abuse controls in mind)

For production email delivery, validate again on the server, add rate limiting, and use Turnstile or hCaptcha. Keep the existing loading, success, and error states and change the copy only after the API confirms delivery.

## Background performance and fallbacks

- Desktop: local MP4 wallpaper autoplays, loops, stays muted, and uses `playsInline`.
- Mobile, Data Saver, or `prefers-reduced-motion`: static poster loads by default.
- Visitors can toggle motion with the fixed control.
- A poster is always present underneath the video, so playback errors fail gracefully.
- Video: local WebM first (about 0.7 MB), with an MP4 fallback (about 5.2 MB), both at 1280×720.
- Poster: `public/images/cosmic-poster.jpg`.

To replace them, keep the same filenames or update `portfolio.media`.

## Accessibility

- Semantic sections, labels, landmarks, and heading hierarchy
- Keyboard-operable navigation and visible focus styles
- Skip link and active-section indication
- Form errors tied to their controls
- Strong dark-theme contrast
- Reduced-motion and high-contrast media queries
- Decorative visuals hidden from assistive technology where appropriate

## Deployment

### Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

`vercel.json` includes long-lived caching for immutable media.

### Netlify

1. Push the project to GitHub.
2. Create a new site from the repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

`netlify.toml` includes build and caching configuration.

## Project structure

```text
src/
  components/
    About.tsx
    Contact.tsx
    CosmicBackground.tsx
    CursorGlow.tsx
    Experience.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Projects.tsx
    Reveal.tsx
    SectionHeading.tsx
    Skills.tsx
  data/
    portfolio.ts
  App.tsx
  index.css
  hero-editorial.css
  main.tsx
public/
  images/cosmic-poster.jpg
  videos/cosmic-background.webm
  videos/cosmic-background.mp4
  resume.pdf
```

## Media credit

The looping background uses **“A red and purple nebula with stars in the background” by Frank Cone**, downloaded from Pexels under the Pexels free-use license:

- Source: https://www.pexels.com/video/a-red-and-purple-nebula-with-stars-in-the-background-17463487/
- License: https://www.pexels.com/license/

Attribution is included in the website footer even though Pexels does not require it.
