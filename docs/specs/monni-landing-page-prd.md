# Monni Landing Page PRD / Produktkravdokument

**Dokumenteier / Document Owner:** Growth & Product Marketing
**Sist oppdatert / Last Updated:** 2024-XX-XX
**Status:** Draft / Utkast
**App-slogan / App Tagline:** Økonomi gjort enkelt!

## 1. Oversikt / Overview
- **NO:** Lage en moderne, lekende landingsside for Monni som hjelper norske forbrukere å velge appen for helhetlig økonomistyring og motiverende sparing.
- **EN:** Build a modern, playful landing page for Monni that convinces Norwegian consumers to choose the app for holistic money management and motivating savings.

## 2. Formål & Mål / Purpose & Goals
- **NO:** Øke merkevarekjennskap, drive nedlastinger og skape trygghet rundt PSD2-tilkoblet økonomistyring.
- **EN:** Grow brand awareness, drive app downloads, and instill trust in PSD2-enabled financial control.
- **Primære KPIer / Primary KPIs:** Nedlastinger/registreringer første måned, onboarding fullføringsgrad, DAU/MAU, aktiverte sparetiltak, henvisninger, NPS.
- **Sekundære KPIer / Secondary KPIs:** CTA-CTR, demo-visninger, kalkulator-interaksjoner, FAQ-engasjement.

## 3. Bakgrunn / Background
- **NO:** Norske brukere mangler oversikt på tvers av banker, føler seg usikre på lånerenter og trenger konkrete sparegrep. Økende levekostnader skaper smertespunkter.
- **EN:** Norwegians struggle with cross-bank visibility, feel unsure about loan rates, and crave actionable savings advice as living costs rise.

## 4. Målgrupper / Target Audiences
- **Primær (25–45):**
  - **NO:** Yngre profesjonelle, småbarnsforeldre og etablerte par med boliglån.
  - **EN:** Young professionals, young families, and established couples with mortgages.
- **Sekundær (18–25):**
  - **NO:** Studenter og unge voksne som lærer grunnleggende økonomistyring.
  - **EN:** Students and young adults learning foundational money skills.

## 5. Verdiforslag / Value Proposition
- **NO:** Én app for å forstå, sammenligne og forbedre økonomien din.
- **EN:** One app to understand, compare, and improve your finances.
- **Kjernepunkter / Core Pillars:**
  - **Helhetsoversikt / Total overview:** Samler kontoer, lån, investeringer via PSD2.
  - **Smart spareveiledning / Smart savings guidance:** AI-analyse av forbruk og kostnadskutt.
  - **Coach / Coach:** Personlige tiltak basert på mål og livsstil.
  - **Rentekomparator / Rate comparator:** Automatisk innsikt i hvor du sparer mest.
  - **Gamifisert økonomi / Gamified finance:** Poeng, badges, utfordringer, leaderboards.

## 6. Ønsket brukerreise / Desired User Journey
1. **NO:** Land på hero, forstår verdiforslaget, får trygghet via banksikkerhet.
   **EN:** Land on hero, grasp value proposition, feel trust from bank security.
2. **NO:** Utforsker “Hvordan funker det?” seksjon og ser at oppsett er enkelt.
   **EN:** Explore “How it works” section and see set-up simplicity.
3. **NO:** Blir inspirert av gamification og skjermbilder.
   **EN:** Feel motivated by gamification and screenshots.
4. **NO:** Finner CTA som passer (Last ned, Se demo, Beregn sparing).
   **EN:** Choose relevant CTA (Download, Watch demo, Calculate savings).
5. **NO:** Fullfører handling (laster ned appen eller ser demo).
   **EN:** Complete action (downloads the app or watches the demo).

## 7. Sideoppsett / Page Structure
1. **Hero med CTA / Hero with CTA:**
   - **NO:** Stor tagline “Økonomi gjort enkelt!”, kort undertekst, primær CTA `Last ned appen` + sekundær `Se demo`.
   - **EN:** Prominent tagline “Økonomi gjort enkelt!”, supporting copy, primary CTA `Download the app` + secondary `Watch demo`.
   - Visual: Mobilmockup med dashboard og pastel bakgrunn.
2. **Sosial proof / Social proof:**
   - Logos, ratings, eller “Elsket av 15 000 brukere i beta”.
3. **Hvordan det fungerer / How it works:**
   - Tre trinn (Koble bank, Oppdag innsikt, Ta handling) med lekne illustrasjoner.
4. **Nøkkelfunksjoner / Key Features:**
   - Kortkort med ikoner for oversikt, sparecoach, rentekomparator, gamification, trygghet.
5. **Skjermbilder & Demo / Screenshots & Demo:**
   - Interaktiv slider eller video med undertekster på norsk og engelsk (video hostes på Azure Blob Storage).
6. **Gamification spotlight (shadcn Tabs & Cards):**
   - Leaderboards (“Toppspareren”, “Pensjonisten”), badges, progressbars, ukentlige utfordringer.
7. **Trygghet & sikkerhet / Trust & Security:**
   - PSD2, banknivå-kryptering (AES-256, TLS 1.3), GDPR, partnerbanker.
8. **Kundehistorier / Testimonials:**
   - 2–3 sitater (NO/EN), evt. med rolle (“Småbarnsmor”, “Student”).
9. **FAQ:**
   - 6–8 spørsmål; dual language toggle.
10. **Footer:**
    - Lenker til personvern, vilkår, kundeservice, press, sosiale medier.
11. **Komponentbibliotek / Component Library:**
    - Leveres med shadcn UI-moduler (Buttons, Tabs, Cards, Accordion, Dialog) for konsistent pastel-estetikk.

## 8. Innhold & Tone / Content & Tone
- **NO:** Uformell, støttende og motiverende. Bruk dagligtale, emoji-aksenter sparsommelig (✨, 💸).
- **EN:** Informal, supportive, motivational. Everyday language with light emoji accents.
- **Mikrocopy-eksempler / Microcopy Examples:**
  - **NO:** “Du er 70 % mot feriesparingen. Heia deg!”
  - **EN:** “You’re 70% toward that getaway fund. Go you!”
- **CTA-tekst / CTA Copy:**
  - `Last ned appen` / `Download the app`
  - `Kom i gang gratis` / `Get started free`
  - `Beregn hvor mye du kan spare` / `See how much you can save`
  - `Se demo` / `Watch demo`
  - `Prøv uten innlogging` / `Try without logging in`

## 9. Visuelt design / Visual Design
- **Fargepalett / Palette:** Pastellblå (#B8D4FF), myk grønn (#B7E4C7), fersken (#FFD6BA), krem (#FFF6EB), dyp marine (#1E2A38) for kontrast.
- **Typografi / Typography:** Nunito eller Poppins til headinger og brødtekst; tall med høy lesbarhet.
- **Illustrasjoner / Illustrations:** Lekne, flate illustrasjoner av hverdagsøkonomi (kaffekopp, mobil, graf).
- **Bevegelse / Motion:** Delikat parallax eller micro-interactions når brukere scroller til gamification-elementer.
- **Tilgjengelighet / Accessibility:** Kontrast minimum WCAG AA, klare fokus-states, norsk nynorsk-støtte vurderes senere.

## 10. Gamification Detaljer / Gamification Details
- **Leaderboards:**
  - **NO:** “Toppspareren”, “Pengeflytteren”, “Pensjonisten”, “Investoren”.
  - **EN:** “Top Saver”, “Cash Flow Champ”, “Pension Pro”, “Investor Ace”.
- **Badges:** Milepæler for `Spart 5 000 kr`, `Fullført 3 budsjettu prøver`, `Investerte første gang`.
- **Utfordringer / Challenges:** Ukentlig spareutfordring med poeng og konfetti-animasjon ved fullføring.
- **Deling / Sharing:** Del progresjon via lenke eller sosiale medier (Vipps-liknende UI).
- **Progress visning / Progress Display:** Sirkeldiagram + progressbar med muntre pastellgradienter.

## 11. Funksjonelle krav / Functional Requirements
- **Flerspråklig / Bilingual:** Støtt norsk og engelsk content-lag; default norsk med språkvelger.
- **CTA-flyt:** Primær CTA leder til app store lenker eller nedlastingsmodal. Sekundære CTAer trigger demo-modal, sparekalkulator (modal), eller nyhetsbrev-registrering.
- **Responsive:** Optimaliser for mobil først; desktop >1200px, tablet 768–1024, mobil 360–640.
- **Performance:** Lighthouse score ≥ 85 på mobil; lazy-load tunge ilustrasjoner.
- **Integrasjoner:**
  - PSD2 onboarding (info modal).
  - Google Analytics for hendelser.
- **Trygghet:** PSD2-tekst, sikkerhetsmerker for kryptering, lenke til sikkerhetsside.
- **Feature flag:** Styrer demo-modal vs. videoembed; ingen ventelistehåndtering.
- **SEO:** Title/description for norsk (primær), meta alternativer for engelsk, schema.org FAQ markup.

## 12. Tekniske og operasjonelle krav / Technical & Operational Requirements
- **Stack:** Next.js + Tailwind CSS front-end, Azure Container Apps hosting.
- **CMS:** Ingen CMS; innhold kodes som JSON/MDX for tospråklig støtte.
- **Versjonskontroll:** Feature branch `feature/monni-landing-page` + PR med design-skjermbilder og sjekkliste.
- **Utrulling / Deployment:** Automatisk via eksisterende pipeline; inkluder liveness-sjekk.
- **Vedlikehold / Maintenance:** Oppdater FAQ og gamification innhold kvartalsvis med produktdata.

## 13. Analyse & Sporing / Analytics & Tracking
- **Hendelser / Events:**
  - Hero CTA klikk (NO/EN).
  - Demo visning, kalkulator-modal fullført, nyhetsbrev-innsending.
  - Scroll dybde (75 %), FAQ åpnet, språk bytte.
- **Dashboards:** Google Analytics + Looker Studio for KPI-oversikt.
- **Eksperimenter:** A/B test CTA-tekst (“Last ned appen” vs “Kom i gang gratis”), hero bakgrunner, gamification highlight posisjon.

## 14. Innholdsressurser / Content Assets
- **Behov:**
  - Mobilmockups (Dashboard, rentekomparator, progressbar).
  - Illustrasjoner av glade nordmenn, badges, konfetti.
  - Kundesitater (tekst + evt. foto med samtykke).
  - Demo-video (hostes på Azure Blob Storage) med norsk/engelsk undertekst (Marketing Video Lead).
  - FAQ-tekst, sikkerhetstekst (Product Marketing + Compliance), partnerlogos.
- **Ansvarlige / Owners:** Designteam for visuals, Product Marketing for tekst, Compliance for sikkerhetskopi, Marketing Video Lead for demo, Engineering for kalkulator-modal API.

## 15. Lanseringsplan / Launch Plan
- **Pre-lansering / Pre-launch:** Teaser-kampanje i sosiale medier, partnerskap med finansbloggere, presseomtale.
- **Lanseringsuke / Launch week:** PR-melding, nyhetsbrev, målrettede annonser, push til eksisterende beta-brukere.
- **Etter lansering / Post-launch:** Optimaliser CTA, oppdater FAQ med vanlige spørsmål, implementer første A/B-test, følg opp demo-engasjement.

## 16. Risikoer & Åpne spørsmål / Risks & Open Questions
- **Risikoer / Risks:**
  - Lav tillit til PSD2/fintech generelt → må adresseres med tydelig sikkerhetstekst om kryptering på banknivå.
  - Komplekse gamification-elementer kan forsinke leveransen.
  - Balanse mellom norsk og engelsk innhold kan overbelaste layout.
- **Åpne spørsmål / Open Questions:**
  1. Demo-video: Marketing Video Lead bekreftet som ansvarlig—avklar manus og format (anbefalt MP4/H.264, 1080p).
  2. Trengs integrasjon mot referral-program ved lansering eller senere fase?

## 17. Godkjenning / Approval
- **Stakeholdere / Stakeholders:** Product Lead, Marketing Lead, Compliance, Engineering Manager.
- **Beslutningsport / Decision Gate:** Sign-off når designprototype og tekstutkast er klare, før utvikling sprint.

## 18. Vedlegg / Appendices
- **Referanser / References:** Kron.no, Dreams.com/no, Sbanken.no, Fink.no.
- **Relaterte dokumenter / Related Docs:** Brand guidelines (under arbeid), produktroadmap Q3, beta-feedback rapport.
