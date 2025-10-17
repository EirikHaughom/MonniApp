# Monni Landing Page Technical Implementation Guide / Teknisk Implementeringsguide

**Dokumenteier / Document Owner:** Frontend Platform Lead
**Sist oppdatert / Last Updated:** 2024-XX-XX
**Status:** Draft / Utkast
**Relaterte dokumenter / Related Docs:** `docs/specs/monni-landing-page-prd.md`

## 1. Scope / Omfang
- **NO:** Beskriver hvordan landingssiden implementeres i Next.js-miljøet med norsk som primærspråk og engelsk som sekundært.
- **EN:** Describes how to implement the landing page within the Next.js stack with Norwegian as the primary locale and English as secondary.

## 2. Arkitektur / Architecture
- **Framework:** Next.js App Router (`src/app`).
- **Styling:** Tailwind CSS + CSS Modules for edge cases.
- **State:** Lokal komponentstate med React hooks; ingen global state forventet.
- **Data:** Statisk innhold via lokal JSON/MDX med to språk.
- **Deployment:** Azure Container Apps via eksisterende pipeline.
- **Build targets:** Static rendering (`generateStaticParams`) for locale-ruter + edge cache.

## 3. Fil- og mappeoppsett / File & Folder Structure
```
src/
  app/
    [locale]/
      (marketing)/
        layout.tsx
        page.tsx
        components/
          Hero.tsx
          Features.tsx
          Gamification.tsx
          TrustSignals.tsx
          Testimonials.tsx
          Faq.tsx
          Footer.tsx
        data/
          content.no.json
          content.en.json
  features/
    analytics/
    gamification/
  libs/
    i18n/
docs/specs/
  monni-landing-page-prd.md
  monni-landing-page-technical-guide.md
```
- **NO:** Landingsside ligger i egen `(marketing)`-gruppe med språkparameter.
- **EN:** Landing page lives in dedicated `(marketing)` segment with locale param.

## 4. Internasjonalisering / Internationalization
- **Strategy:** Next.js innebygd i18n routing med `i18n.locales = ['no', 'en']`, default `no`.
- **Library:** `next-intl` for messages og `useTranslations` hook.
- **Content source:** `content.<locale>.json` for tekst; oppdel hero, features, faq etc.
- **Fallback:** Hvis nøkkel mangler på norsk, vis engelsk og logg warning i dev.
- **Locale switcher:** Komponent i navbar/hero som veksler mellom `/no` og `/en`.
- **Formatting:** Bruk `Intl.NumberFormat('nb-NO')` for NOK og `Intl.DateTimeFormat` for datoer.
- **Testing:** E2E dekk begge språk, spesielt CTA-flyt og FAQ.
- **Static provider setup:** Følg `NextIntlClientProvider` anbefalingen for statisk rendering:
  ```tsx
  <NextIntlClientProvider
    messages={messages}
    timeZone="Europe/Oslo"
    now={new Date()}
    locale={locale}
  >
    {children}
  </NextIntlClientProvider>;
  ```

## 5. Komponentprinsipper / Component Principles
- **NO:** Alle komponenter skrives på engelsk, men mottar `copy`-props fra i18n-laget.
- **EN:** Component logic and props remain English; UI strings are injected.
- **Shared props contract:**
  ```ts
  type HeroContent = {
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    badges: string[];
  };
  ```
- **Accessibility:** Heading-hierarki `h1` i hero, `h2` i seksjoner. Alt-tekst også oversatt.
- **Component library:** Bruk shadcn UI for Buttons, Tabs, Cards, Accordion; `Tabs`-komponenten med `MotionHighlight` gir animerte faner for gamification (se shadcn registry).

## 6. Design Tokens & Styling
- **Tailwind config:** Utvid med pastel-palett (se PRD) i `tailwind.config.js`.
- **Typography:** Definer `fontFamily` for Nunito/Poppins via `next/font`.
- **Spacing:** Bruk konsistente `pt/pb` for seksjoner (`py-20` desktop, `py-14` mobil).
- **Animations:** CSS `transition` og `@keyframes` for lett konfetti; unngå tunge libs.
- **Dark mode:** Ikke prioritert i første release; sørg for at paletten fungerer på hvit bakgrunn.
- **shadcn theming:** Synkroniser Tailwind tokens med shadcn konfig (se `components.json`) slik at komponenter som `Tabs` og `Button` arver pastel-paletten.

## 7. Seksjonsdetaljer / Section Implementation
1. **Hero:**
   - Server-komponent med `HeroContent`.
   - CTA buttons: `Link` + shadcn `Button` for App Store nedlasting og demo-modal.
   - Illustrasjon: importeres som SVG/React komponent.
2. **Social Proof:**
   - Render logos fra `content.logos` array; fallback `alt`-tekst.
3. **How It Works:**
   - Tre kort komponenter (`HowItWorksStep`).
   - Mobile: vertikal stack; desktop: `lg:grid-cols-3`.
4. **Key Features:**
   - `FeatureCard` med icon (SVG), tittel, body.
   - Gamification highlight linkes til egen seksjon.
5. **Screenshots & Demo:**
   - `Carousel` bruker `keen-slider` (lettvekts).
   - Demo CTA åpner video-modal (video hostes på Azure Blob Storage med norsk/engelsk undertekst).
6. **Savings Calculator Modal:**
   - shadcn `Dialog` med `Form` for kalkulator; åpnes via CTA.
   - Valider input client-side; kall eventuelt API (`/api/calc`) og vis resultatkort.
   - Logg `calculator_modal_open` og `calculator_modal_submit`.
7. **Gamification Spotlight:**
   - shadcn `Tabs` + `MotionHighlight` for leaderboard-kategorier, `Progress` for måloppnåelse.
   - Badges vises med shadcn `Tooltip` for forklaring.
8. **Trust & Security:**
   - Liste med PSD2, banknivå-kryptering (AES-256, TLS 1.3), GDPR; lenker til sikkerhetsside.
9. **Testimonials:**
   - `TestimonialCard` med `name`, `role`, `quote`, `avatar`.
10. **FAQ:**
   - shadcn `Accordion` (eller `Collapsible`) for spørsmålsstrukturen.
   - Schema.org `FAQPage` JSON-LD injiseres i `Head`.
11. **Footer:**
    - Lenker, språkvelger, sosiale medier ikoner (accessible `aria-label`).

## 8. Datakilder / Data Sources
- **Static JSON:** Lagrer tekststrenger, CTA URLs, KPI tall for hero.
- **Env vars:** `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL`, `NEXT_PUBLIC_DEMO_VIDEO_URL`, `NEXT_PUBLIC_CALCULATOR_URL`, `NEXT_PUBLIC_GA_ID`.
- **Feature flags:** `NEXT_PUBLIC_DEMO_MODE` (video vs. modal experience).
- **Demo video asset:** Marketing Video Lead leverer MP4 (H.264, 1080p, ≤150 MB) til Azure Blob; filnavn `monni-demo-no-en.mp4`, subtitles `monni-demo-no.vtt` og `monni-demo-en.vtt`.

## 8.1 Kalkulator API-kontrakt / Calculator API Contract
- **Endpoint:** `POST /api/calc/savings`
- **Request body (JSON):**
  ```json
  {
    "monthlyIncome": 60000,
    "monthlyExpenses": 45000,
    "savingsGoal": 120000,
    "locale": "no"
  }
  ```
- **Validation:** Alle felter > 0, `monthlyExpenses <= monthlyIncome`; valider også på server.
- **Response (200):**
  ```json
  {
    "potentialSavings": 15000,
    "recommendations": [
      "Reduser faste kostnader med 5 %",
      "Opprett automatisk trekk til høyrentekonto"
    ],
    "confidence": "medium"
  }
  ```
- **Errors:**
  - `400` ved valideringsfeil (returner `message` og `fields`).
  - `500` for interne feil (logg med Sentry).
- **Security:** Rate-limit 10 requests/min/IP, logg med `locale` og hashed session ID.
- **Ownership:** Frontend integrerer modal + client validation; Backend/API team leverer handler og drift.

## 9. Analytics & Tracking
- **Implementation:** Bruk `@/features/analytics/ga.ts` wrapper for `gtag`.
- **Events:**
  - `hero_cta_click`, `demo_view`, `calculator_modal_open`, `calculator_modal_submit`, `faq_open`, `language_switch`.
  - Inkluder `locale` og `cta_type` i event payload.
- **Consent banner:** Integrer eksisterende CMP; utsett GA init til samtykke.

## 10. SEO & Performance
- **Metadata API:** Sett `generateMetadata` per locale med tittel, description, alternates.
- **Open Graph:** Bruk `app/opengraph-image.tsx` for dynamisk bilde med norsk/engelsk tekst.
- **Structured data:** FAQ JSON-LD + `Product` markup for app.
- **Performance:** Prefetch kritiske assets, `next/image` for mockups, lazy-load tunge animasjoner.
- **Caching:** Bruk `revalidate = 3600`; oppdater innhold via `res.invalidateTag('landing')` ved behov.

## 11. Testing Strategi / Testing Strategy
- **Unit:** Vitest for komponenter (render, i18n).
- **Integration:** React Testing Library for seksjonskomposisjon.
- **E2E:** Playwright scenarier for `/no` og `/en` (hero CTA, demo video fra Azure Blob, kalkulator-modal åpne/send, FAQ) kjøres via Playwright MCP for konsistente pipelines.
- **Accessibility:** `@axe-core/playwright` kjør i CI.
- **Visual regression:** Chromatic/Storybook snapshots for kritiske seksjoner.

## 12. CI/CD & Deployment
- **Pipeline:**
  - `npm run lint`
  - `npm run check-types`
  - `npm run test`
  - `npm run build`
- **Container:** Prod build pakkes i eksisterende Docker; miljøvariabler injiseres via Azure App Config.
- **Smoke tests:** Etter deploy, kjør Playwright `landing-smoke.spec.ts` mot prod URL.

## 13. Sikkerhet & Personvern / Security & Privacy
- **Security posture:** Kommuniser at krypteringsnivået matcher norske banker (AES-256, TLS 1.3).
- **Data handling:** Ingen PII lagres lokalt; demo- og nyhetsbrevskjema poster til backend via HTTPS med rate limiting og input-validering.
- **Headers:** Sett `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options` i `next.config.mjs`.
- **GDPR:** Klar cookie-tekst og lenker til personvern.
- **Compliance copy:** Product Marketing + Compliance ferdigstiller sikkerhetstekst før launch.
  1. Product Marketing utarbeider førsteutkast basert på banknivå-kryptering, PSD2 og datalagring.
  2. Compliance gjennomgår tekst, legger til regulatoriske referanser og godkjenner.
  3. Endelig tekst legges inn i `content.no.json` og `content.en.json`; Engineering verifiserer layout.

## 14. Dependencies
- `next-intl`, `@headlessui/react`, `keen-slider`, `clsx`, `@heroicons/react`, `@/libs/analytics` (intern).
- Oppdater `package.json` med eksakte versjoner, kjør `npm audit`.

## 15. Milepæler / Milestones
1. **Design handoff:** Figma-komponenter signert av stakeholders.
2. **Skeleton implementation:** Strukturer ruter, layout, i18n.
3. **Content integration:** Fyll norsk/engelsk JSON, koble CTAer.
4. **Interactions & gamification visuals:** Progressbars, badges, animations ferdig.
5. **QA & Accessibility pass:** Alle tester grønne, Lighthouse ≥ 85 mobil.
6. **Launch readiness:** Stakeholder sign-off, analytics events verifisert, release plan bekreftet.

## 16. Åpne handlinger / Open Actions
- [ ] Velg endelig i18n-lib dersom `next-intl` erstattes i roadmap.
- [ ] Avklar demo-video produksjon og filformat (host: Azure Blob Storage).
- [ ] Sett opp Chromatic/alternativ for visuell regresjon hvis ikke eksisterende.
- [ ] Gjennomgå og godkjenn kalkulator API-kontrakt med backend-teamet.
- [ ] Dokumenter sikkerhetsbudskap sammen med compliance (følg trestegsprosessen over).
