# Monni Landing Page Implementation Checklist

Bruk denne sjekklisten for å sikre at alle tekniske og innholdsmessige krav fra PRD og den tekniske guiden er oppfylt før lansering.

## 1. Forberedelser & Planlegging
- [ ] Bekreft prosjektteam og ansvarlige eiere (Design, Frontend, Backend/API, Product Marketing, Compliance, Marketing Video Lead).
- [ ] Opprett feature-branch `feature/monni-landing-page`.
- [ ] Installer nødvendige pakker (`next-intl`, shadcn-komponenter, `keen-slider`, `@headlessui/react`, `@heroicons/react`).
- [ ] Synkroniser Tailwind-konfig med pastel-fargepaletten og shadcn tokens.
- [ ] Oppdater `components.json` og importer shadcn-komponenter (Buttons, Tabs, Cards, Accordion, Dialog, Tooltip, Progress).

## 2. Internasjonalisering (i18n)
- [ ] Konfigurer `next-intl` routing (`locales: ['no', 'en']`, `defaultLocale: 'no'`).
- [ ] Opprett `src/libs/i18n/routing.ts` og `request.ts` iht. `defineRouting`.
- [ ] Implementer `NextIntlClientProvider` med `timeZone`, `now` og `locale` for statisk rendering.
- [ ] Lag `content.no.json` og `content.en.json` med struktur for hero, sections, FAQ, CTA-tekster.
- [ ] Bygg språkvelger som bytter mellom `/no` og `/en` og logger `language_switch` event.

## 3. Design Tokens & Styling
- [ ] Importer og aktiver Nunito/Poppins via `next/font`.
- [ ] Legg til pastel-palett (blå, grønn, fersken, krem, marine) i Tailwind-tema.
- [ ] Sikre konsistent spacing (seksjoner med `py-20` desktop, `py-14` mobil).
- [ ] Definer globale animasjonsklasser for subtile micro-interactions.
- [ ] Valider kontrast og fokus-states mot WCAG AA.

## 4. Seksjonsimplementasjon
- [ ] Sett opp `src/app/[locale]/(marketing)/layout.tsx` og `page.tsx` som server-komponenter med data-props.
- [ ] Implementer hero-seksjon med shadcn Buttons, badges og illustrasjon.
- [ ] Bygg social proof seksjon med logoliste og fallback-alt-tekst.
- [ ] Implementer “How it works” med tre cards (`HowItWorksStep`).
- [ ] Lag key features grid med shadcn Cards og ikonkomponenter.
- [ ] Konfigurer `keen-slider` for screenshots/demo-karusell.
- [ ] Lag demo-modal (shadcn Dialog) som spiller av Azure Blob-video med norsk/engelsk undertekst.
- [ ] Bygg savings calculator modal med shadcn Dialog + Form, klientvalidering, API-kall og resultatvisning.
- [ ] Implementer gamification spotlight med shadcn Tabs/MotionHighlight, Progress-bar og Tooltips.
- [ ] Utform trust & security-seksjon med PSD2, kryptering, GDPR budskap og lenker.
- [ ] Lag testimonials komponent med sitater og roller.
- [ ] Implementer FAQ med shadcn Accordion og injiser schema JSON-LD.
- [ ] Bygg footer med lenker, språkvelger, sosiale medier (accessible labels).

## 5. Data & API
- [ ] Fyll inn JSON-innhold for begge språk (hero, features, gamification, FAQ, trust copy).
- [ ] Opprett Azure Blob-referanser i `.env` (`NEXT_PUBLIC_DEMO_VIDEO_URL` + subtitles).
- [ ] Implementer `POST /api/calc/savings` handler (validering, rate limiting, logging, Sentry).
- [ ] Sett opp environment variabler for app store-lenker, kalkulator-URL og GA ID.
- [ ] Verifiser at feature flag `NEXT_PUBLIC_DEMO_MODE` styrer modal vs. videoembed oppførsel.

## 6. Analytics & Telemetri
- [ ] Importer GA wrapper (`@/features/analytics/ga.ts`) og initialiser etter cookie-samtykke.
- [ ] Logg følgende events: `hero_cta_click`, `demo_view`, `calculator_modal_open`, `calculator_modal_submit`, `faq_open`, `language_switch`.
- [ ] Legg til metadata (locale, CTA-type) i event payloads.
- [ ] Valider at consent banner blokkerer GA til samtykke er gitt.

## 7. SEO & Performance
- [ ] Implementer `generateMetadata` per locale (title, description, alternates).
- [ ] Lag `app/opengraph-image.tsx` for dynamisk NO/EN-tekst.
- [ ] Legg inn FAQ og Product schema JSON-LD.
- [ ] Optimaliser bilder med `next/image` og prefetch kritiske assets.
- [ ] Sett `revalidate = 3600` og konfigurer `res.invalidateTag('landing')` for oppdateringer.
- [ ] Kjør Lighthouse (mobil) og bekreft score ≥ 85.

## 8. Testing & QA
- [ ] Skriv Vitest-enhetstester for nøkkelkomponenter (Hero, CalculatorModal, Tabs).
- [ ] Legg til integrasjonstester med React Testing Library for seksjoner og i18n.
- [ ] Implementer Playwright MCP e2e-scenarier for `/no` og `/en` (hero CTA, demo, calculator modal, FAQ).
- [ ] Kjør `@axe-core/playwright` for tilgjengelighetskontroll.
- [ ] Oppdater Storybook/Chromatic for visuelle regresjoner.
- [ ] Bekreft at alle tester kjøres i CI (`npm run lint`, `npm run check-types`, `npm run test`, `npm run build`).

## 9. Sikkerhet & Compliance
- [ ] Legg til sikkerhetsoverskrift (CSP, HSTS, X-Frame-Options) i `next.config.mjs`.
- [ ] Dokumenter databehandling (ingen lokal PII, HTTPS, rate limiting).
- [ ] Følg trestegsprosessen for sikkerhetstekst (Product Marketing → Compliance review → Engineering sign-off).
- [ ] Sørg for at kalkulator-API logger hashed session ID og respekterer rate limit.
- [ ] Verifiser at demo- og nyhetsbrevskjema sender via HTTPS med input-validering.

## 10. Deployment
- [ ] Bekreft at Azure Container Apps pipeline henter nye env-variabler.
- [ ] Kjør full bygg og deploy til staging-miljø.
- [ ] Utfør Playwright smoke-test (`landing-smoke.spec.ts`) på staging og prod.
- [ ] Samle stakeholder sign-off (Product Lead, Marketing Lead, Compliance, Engineering Manager).

## 11. Innhold & Assets
- [ ] Mottak demo-video (MP4, H.264, 1080p ≤150 MB) + NO/EN VTT-filer fra Marketing Video Lead.
- [ ] Integrer video-url og undertekster i modal.
- [ ] Sikre at alle tekstressurser (FAQ, trust copy, CTAer) er oversatt og korrekturleset.
- [ ] Last opp partnerlogoer og bekreft lisens/brukstillatelse.
- [ ] Arkiver kildeassets i godkjent lagringsplass (Figma, Drive, e.l.).

## 12. Etter lansering
- [ ] Overvåk GA dashboards for KPIer (nedlastinger, demo-visninger, kalkulatorbruk).
- [ ] Planlegg første A/B-test (CTA tekst eller hero bakgrunn).
- [ ] Oppdater FAQ basert på kundestøtte-innspill.
- [ ] Evaluer gamification-engasjement og juster utfordringer ved behov.
- [ ] Dokumenter læring og oppdater sjekklisten for fremtidige versjoner.
