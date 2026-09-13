# Eureka Academy

Marketing site for Eureka Academy, a UK private tutoring business. Built with
[Astro](https://astro.build) and Tailwind CSS v4, deployed as a static site on
Cloudflare Pages with a single Pages Function for the enquiry form.

This is a bare-bones MVP: one page, no payments, no booking system. Everything a
non-developer needs to change lives in **`src/content/site.ts`**.

## Documentation

- [`docs/BRIEF.md`](docs/BRIEF.md) — the original website brief, kept as the
  reference spec.
- [`docs/TBD.md`](docs/TBD.md) — what still needs deciding, supplying or
  building, including everything that must be done before launch.

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

To test the `/api/enquiry` function locally you need Wrangler, which serves the
built site and the `functions/` directory together:

```bash
npm run build
npx wrangler pages dev dist
```

## Editing the content

Open `src/content/site.ts`. It holds the business details, hero copy, tutor
bios, stats, subjects, prices, reviews and contact form options.

Everything commented `PLACEHOLDER` must be replaced before launch:

- `site.phone`, `site.phoneDisplay`, `site.email`, `site.location`, `site.url`
- `about.paragraphs` — the real story of why you started tutoring
- `about.stats` — only publish numbers you can stand behind
- `pricing.tiers` and `pricing.package` — the real rates and discount
- `reviews.items` — **every review is sample copy.** Replace with real,
  permission-given quotes, or delete the section, before going live.
- `footer.socials` — remove any account you do not have

Images in `public/images/` are placeholder SVGs. Swap `tutoring.svg` (hero) and
`tutors.svg` (about) for real photos and update the `src` and `alt` values in
`site.ts`. Keep them under ~300 KB and use a `.webp` or `.jpg`.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, and pick this repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. The `functions/` directory at the repo root is picked up
   automatically and served at `/api/*` — no extra configuration.

### Enquiry email

The form posts to `/api/enquiry`, which emails the enquiry via
[Resend](https://resend.com) (free tier is ample). Add these under
**Settings → Variables and Secrets** for the Pages project:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | API key from the Resend dashboard (mark as a secret) |
| `ENQUIRY_TO` | Where enquiries land, e.g. `hello@eurekaacademy.co.uk` |
| `ENQUIRY_FROM` | A verified sender, e.g. `Eureka Academy <enquiries@yourdomain.co.uk>` |

Until `RESEND_API_KEY` is set the form still shows a success message but the
enquiry is only written to the function log — **nothing is delivered**, so set
it before you send anyone to the site. Locally, put the same values in a
`.dev.vars` file (already gitignored).

### Custom domain

Pages project → **Custom domains** → add your domain, then update `site.url` in
`src/content/site.ts` and the `site` value in `astro.config.mjs` so canonical
URLs and the sitemap point at the right place.

## Project structure

```
src/
  content/site.ts      all editable copy
  components/          one .astro file per page section
  layouts/Base.astro   html shell, SEO tags, scroll-reveal script
  pages/index.astro    section order
  styles/global.css    design tokens and shared component classes
functions/api/         Cloudflare Pages Functions
public/                favicon, placeholder images, robots.txt
```

## Not built yet

Deliberately out of scope for this MVP: online booking, payments, student
logins, the subject/level filter, review carousel, FAQ accordion and the
results section. The content file and section-per-component layout are set up
so these can be added later without a rewrite.
