# TBD — outstanding work

Live tracker for everything still to be decided, supplied or built. The spec
this is measured against is [`BRIEF.md`](./BRIEF.md).

Tick items off as they're done. Anything under **Blocking launch** must be
resolved before the site is shown to real parents.

---

## Decisions already made

| Question | Decision |
| --- | --- |
| Stack | Astro 5 + Tailwind CSS v4, static output |
| Hosting | Cloudflare Pages, `functions/` for the API |
| Enquiry delivery | Cloudflare Pages Function → Resend |
| Payments | Out of scope for the MVP |
| Scope | Phase 1 only, ultra-lean (see *Built* below) |
| Content | Placeholders throughout, all in `src/content/site.ts` |
| Palette | Deep navy primary, warm gold accent, near-white ground |
| Business name | "Eureka Academy" (working name — confirm before buying a domain) |

---

## Blocking launch

### Real content — all in `src/content/site.ts`

- [ ] **Phone number** — `site.phone` (href form) and `site.phoneDisplay`
- [ ] **Email address** — `site.email`
- [ ] **Location / area served** — `site.location`, and check `site.seoTitle`
      and `site.seoDescription` name the right town
- [ ] **Tutor bios** — `about.paragraphs`: who you are, academic backgrounds,
      why you started, what you think makes tutoring work
- [ ] **Stats** — `about.stats`. Currently 50+ students, 6+ years, 6 subjects,
      5 levels. Only publish numbers you can stand behind, and delete any you
      can't evidence.
- [ ] **Prices** — `pricing.tiers` (currently £30 / £35 / £40) and
      `pricing.package` (currently 10 sessions for £315, "save £35"). Check the
      arithmetic matches whatever discount you actually offer.
- [ ] **Session length** — the cards say 60 minutes in `tiers[].note`, and
      Pricing prints "All prices are per 60-minute session"
- [ ] **Subjects offered** — `subjects.items`. Confirm the levels on each card
      are ones you'll actually teach (English currently stops at GCSE).
- [ ] **Reviews** — `reviews.items`. **Every review on the site right now is
      invented sample copy.** Replace with real quotes you have permission to
      publish, or delete the section. Do not launch with the placeholders.
- [ ] **Socials** — `footer.socials` currently links to bare instagram.com and
      facebook.com. Point them at real accounts or remove them.

### Images — `public/images/`

- [ ] **Hero photo** — replace `tutoring.svg`, update `hero.image.src` / `.alt`
- [ ] **Tutors photo** — replace `tutors.svg`, update `about.image.src` / `.alt`
- [ ] Both frames expect a portrait ratio around 640×720. Export at roughly
      1280×1440, compress to WebP, keep each under ~300 KB.
- [ ] Write real alt text describing what's in each photo
- [ ] Consider a proper logo — the header is a text logo plus a generic icon,
      and `public/favicon.svg` is a placeholder lightbulb

### Configuration

- [ ] **`RESEND_API_KEY`** in the Cloudflare Pages project. Until this is set
      the form shows a success message but the enquiry is only written to the
      function log — **nothing is delivered.**
- [ ] **`ENQUIRY_TO`** — the inbox enquiries should land in
- [ ] **`ENQUIRY_FROM`** — a sender on a domain verified in Resend
- [ ] Send a real test enquiry end to end once the key is live
- [ ] Custom domain on the Pages project, then update `site.url` in
      `src/content/site.ts` and `site` in `astro.config.mjs` so canonical URLs
      and the sitemap are right

### Legal

- [ ] Privacy policy — the form collects names, emails, phone numbers and
      details about children, so this one genuinely matters
- [ ] Terms & conditions, including the cancellation policy
- [ ] Cookie policy — only needed if analytics get added
- [ ] `footer.legal` currently points both links at `#contact`. Point them at
      real pages.
- [ ] Decide how enquiry data is retained and for how long

---

## Built

Against the brief's section numbers:

- [x] §2 Navigation — sticky, smooth scroll, hamburger on mobile, accent CTA
- [x] §3 Hero — heading, body, two CTAs, image, decorative shapes, levels strip
- [x] §5 About Us — two columns, photo, "Meet Your Tutors", stats row
- [x] §6 Our Tutoring — four large feature cards
- [x] §10 Subjects — six subject cards with level pills
- [x] §12 Prices — three tiers, featured tier highlighted
- [x] §13 Multi-session discount — highlighted comparison banner
- [x] §15 Reviews — three testimonial cards *(static grid, no carousel)*
- [x] §17 Contact / enquiry — full form, client validation, success and error
      states, posts to `/api/enquiry`
- [x] §18 Direct contact — clickable `tel:` and `mailto:`
- [x] §19 Final CTA — navy band above the footer
- [x] §20 Footer — logo, nav, contact, socials, legal, copyright
- [x] §21–24 Design, cards, subtle animations, mobile responsiveness
- [x] §26 CTAs — "Book a Session" in the nav, hero, pricing and final CTA
- [x] §30 Technical — semantic HTML, labelled form controls, keyboard
      navigation, `prefers-reduced-motion`, meta tags, sitemap, favicon

### Verified

- Build and `tsc --noEmit` clean
- `/api/enquiry` tested under the real Cloudflare runtime (`wrangler pages
  dev`): 200 on a valid enquiry, 400 on missing fields, bad email and bad
  JSON, honeypot submissions silently dropped
- Headless Chrome at 1440px and 390px: no horizontal overflow, single `<h1>`,
  all section anchors present, no console errors
- Mobile menu opens and closes on tap, Escape and link click; form blocks
  empty and invalid submits, POSTs the expected payload, shows success and
  failure states

---

## Not built yet

### Cut from the MVP (Phase 1 sections in the brief we skipped)

- [ ] §4 Quick "Why us?" cards below the hero — overlaps §6 Our Tutoring, so
      it was dropped to avoid saying the same four things twice. Worth
      revisiting as a compact strip.
- [ ] §7 How sessions work — 01 → 02 → 03 → 04 process
- [ ] §8 What a session looks like — recap / teach / practise / apply / review
- [ ] §9 Who we help — 11+, KS2, KS3, GCSE, A Level cards
- [ ] §25 Full homepage order — the current page is nav, hero, about,
      tutoring, subjects, prices, reviews, contact, final CTA, footer

### Phase 2

- [ ] §11 Subject / level filter on the Subjects section
- [ ] §15 Review carousel — 3 cards on desktop, 1 on mobile, arrows and dots
- [ ] §14 Pricing FAQ accordion *(needs the answers written first: session
      length, online vs in person, free consultation, one-off sessions, how
      the 10-session discount works, cancellations, homework and resources)*
- [ ] §16 Results / progress section — **only with genuine, evidenced results**
- [ ] §23 Animated statistics counting into view
- [ ] §28 Free consultation banner
- [ ] §29 Stronger local SEO once the target area is confirmed
- [ ] §30 Analytics — and a cookie banner if anything non-essential is added.
      Cloudflare Web Analytics needs no banner and is the easier start.
- [ ] Open Graph share image

### Phase 3

- [ ] §27 Online booking — subject, year group, date/time, details, confirm
- [ ] Online payments, including buying the 10-session package
- [ ] Student login area and progress dashboard
- [ ] Automated booking confirmations and reminder emails
- [ ] Resources / homework portal

---

## Known rough edges

- [ ] The footer's one-line description is written in `Footer.astro` rather
      than `site.ts` — move it if you want everything in one place
- [ ] Fonts load from Google Fonts. Self-hosting the font would remove a
      third-party request (and a cookie-banner question).
- [ ] The enquiry form has a honeypot but no rate limiting. If spam becomes a
      problem, add Cloudflare Turnstile.
- [ ] No automated tests in the repo — the checks above were run ad hoc
