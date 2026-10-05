# Youssef Sherif — Portfolio

Portfolio of Youssef Sherif, Machine Learning Developer, designed by Hazem Elerefy. A native Next.js App Router site with React components and Motion animations, built on the Noir Lumière layout and adapted from a photography portfolio to a machine-learning one.

## Develop

```sh
npm ci
npm run dev      # http://localhost:3000
```

## Deploy

```sh
npm ci
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain so the sitemap, robots file and social cards use the right address. No backend is required: the contact form opens the visitor's mail app with a drafted message.

## Content

All copy lives in `content/site.ts` and comes from Youssef's CV (`public/youssef-sherif-cv.pdf`) and project repositories.

## Media

- **Project figures** — DAFEsteel publication figures and detections, Corelytics plots and Logistics EDA charts, taken from the project repositories.
- **Editorial photography** (`public/media/ph/`) — CC0 / public-domain photographs sourced through Openverse, cropped and graded for the site. Sources are listed in `public/media/CREDITS.md`.
- **DAFEsteel poster** — the project's own poster from Youssef's portfolio repository.
- **Portrait and AI imagery** — from Youssef's existing portfolio.
- **Fonts** — Cabinet Grotesk (Fontshare free licence), Instrument Serif and Inter (SIL Open Font License).
