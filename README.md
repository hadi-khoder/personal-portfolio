# Hadi Khoder — Portfolio Website

Personal portfolio for Hadi Khoder, a Software Engineer, Full-Stack Developer, and Software Development Team Leader based in Lebanon. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide, and Simple Icons.

## Local development

Use Node.js 22 (22.12 or newer).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Stop the server with Ctrl+C.

## Production verification

```bash
npm run typecheck
npm run build
npm start
```

The production build includes the home page, not-found page, favicon, Open Graph PNG, and robots.txt. Files in `public/` are served directly by Next.js locally and on Vercel.

## Portfolio content

- Name and professional title lead the hero beside the supplied graduation portrait.
- Existing dark palette, blue/lavender accents, typography families, section styling, and responsive navigation are retained.
- Larger body text, improved contrast, tighter section spacing, visible keyboard focus, skip navigation, accessible disclosure controls, and reduced-motion support.
- Professional experience and five projects use the supplied information only.
- Verified contributions are visible on the KidsMug and The Potlok cards.
- Education lists Arab Open University — MSc Computing, Cyber Security (in progress), and Lebanese International University — BSc Computer Science (graduate). Cisco Networking Academy certifications: Introduction to Networks and Network Security.
- Technology tags include brand icons where available, with descriptive technology labels always visible.
- LinkedIn, GitHub, WhatsApp, email, and phone links use the official supplied details.
- WhatsApp is available in the contact section and through a floating button.
- The original PDF is downloaded from `/Hadi-Khoder-CV.pdf` with the filename `Hadi-Khoder-CV.pdf`. Its contents and design are unchanged.

## Editing verified information

Edit `src/lib/portfolio.ts` for profile details, experience, education, certifications, projects, and skills.

Project cards accept these optional fields:

- `githubUrl`: the project's actual repository URL.
- `demoUrl`: the project's actual live demo URL.
- `responsibilities`: verified individual contributions shown directly on the card.
- Project status values are retained as source information but never rendered as badges or completion claims.
- `challenge`, `approach`, and `features`: verified project details displayed by the disclosure control.

All five project architecture diagrams are retained. Cards do not accept screenshot replacements. Missing repository and demo links are omitted. All descriptions, technologies, individual contributions, and existing scope remain unchanged. Project status badges are removed; this does not imply unfinished work is completed.

The `certifications` array contains the two supplied Cisco Networking Academy certifications. No credential URLs or education dates were supplied, so none are invented. Additional project contributions should only be added when verified.

## Assets and source

```text
public/
  Hadi-Khoder-CV.pdf           # Original supplied PDF, unchanged
  hadi-khoder-profile.jpeg    # Original supplied portrait
src/
  app/
    globals.css              # Dark theme, layouts, responsive refinements
    layout.tsx               # Metadata and Person structured data
    opengraph-image.tsx       # Native social preview PNG
    robots.ts                # Search crawler directives
    page.tsx
    icon.svg
  components/
    portfolio.tsx
    technology-icon.tsx
  lib/
    portfolio.ts
playwright.config.ts
tests/portfolio.spec.ts
```

## Browser and accessibility tests

```bash
npm run build
npm run test:e2e
```

Tests use installed Google Chrome by default, launch a temporary local production server on port 3100, and close it afterward. To use Playwright Chromium, install it with `npx playwright install chromium` and set `PLAYWRIGHT_CHANNEL=chromium` in your shell before running the tests.

Coverage includes 320px and 390px mobile widths, 768px tablet, 1440px desktop, horizontal overflow, portrait loading, project disclosures, mobile menu Escape/focus behavior, skip navigation, official link destinations, PDF HTTP status and byte integrity, SEO metadata, social image response, robots.txt, and axe WCAG A/AA scans. Screenshots and failure traces are saved in ignored `test-results/`.

Browser verification uses local Chrome. Live production checks are run against https://hadi-khoder.vercel.app using `PLAYWRIGHT_BASE_URL`.

Set `PLAYWRIGHT_BASE_URL` to the HTTPS production URL before `npm run test:e2e` to run the same checks against the live deployment without starting a local server.

## Vercel deployment

1. Push this project, including both files in `public/` and `package-lock.json`, to GitHub.
2. Import the repository into Vercel using its Next.js framework preset. Use Node.js 22, the project root directory, and the default `npm run build` command.
3. Set `NEXT_PUBLIC_SITE_URL` to the final public production URL in Vercel for canonical and social metadata; `.env.example` documents the variable. Vercel's production domain variable is used as a fallback. Local builds use localhost for image metadata and omit the canonical URL until a production URL exists.
4. Deploy, then verify the live home page, portrait, contact links, and `/Hadi-Khoder-CV.pdf` download.

No production domain, certification, project URL, institution, achievement, or completion claim is invented. Published repository: https://github.com/hadi-khoder/personal-portfolio. Production website: https://hadi-khoder.vercel.app. Vercel uses the free Hobby plan and automatically deploys the main branch.

## Latest verified results

- Production build and included TypeScript checks passed with Node.js 22.
- All five Playwright browser tests passed, covering all four viewport widths and keyboard navigation.
- Axe reported zero WCAG A/AA violations at the tested widths.
- Portrait, PDF, robots.txt, and social preview PNG returned successfully; PDF browser downloads preserved their exact filename and original bytes.
- The original portrait and original PDF match the supplied files by SHA-256.
- Desktop and mobile screenshots were visually reviewed. Contact link destinations and secure external-link attributes passed verification.

## Final production refinements

- Removed project status badges and their unused styles; preserved all five architecture diagrams and existing project content.
- Added the supplied university names, degrees, and Cisco Networking Academy certifications.
- Removed unused missing-technology placeholder markup and disabled Next.js development indicators.
- Photo, theme, typography, and responsive layout remain unchanged.


## Published production configuration

- GitHub: https://github.com/hadi-khoder/personal-portfolio (`main`).
- Vercel: https://hadi-khoder.vercel.app, project `hadi-khoder`, Next.js preset, Node.js 22.x, Hobby plan.
- The GitHub App is connected for automatic main-branch deployments. HTTPS and the production canonical URL are active.
- The live original PDF returns HTTP 200 with `application/pdf` and matches the supplied original bytes.
- No domains or paid subscriptions were purchased. The original design and assets remain unchanged.
