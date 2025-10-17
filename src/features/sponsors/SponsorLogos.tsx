/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => (
  <LogoCloud text="Sponsored by">
    <a
      href="https://better-auth.com"
      target="_blank"
      rel="noopener"
      className="flex h-10 items-center justify-center rounded-md border border-border px-6 text-sm font-semibold tracking-wide text-foreground uppercase transition hover:border-primary/50 hover:text-primary"
    >
      Better Auth
    </a>

    <a
      href="https://l.crowdin.com/next-js"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/crowdin-dark.png"
        alt="Crowdin logo dark"
        className="dark:hidden"
        width="128"
        height="26"
      />
      <Image
        src="/assets/images/crowdin-white.png"
        alt="Crowdin logo light"
        className="hidden dark:block"
        width="128"
        height="26"
      />
    </a>

    <a
      href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/sentry-dark.png"
        alt="Sentry logo dark"
        className="dark:hidden"
        width="128"
        height="38"
      />
      <Image
        src="/assets/images/sentry-white.png"
        alt="Sentry logo light"
        className="hidden dark:block"
        width="128"
        height="38"
      />
    </a>

    <a
      href="https://launch.arcjet.com/Q6eLbRE"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/arcjet-light.svg"
        alt="Arcjet logo dark"
        className="dark:hidden"
        width="128"
        height="38"
      />
      <Image
        src="/assets/images/arcjet-dark.svg"
        alt="Arcjet logo light"
        className="hidden dark:block"
        width="128"
        height="38"
      />
    </a>

    <a
      href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/nextjs-boilerplate-saas.png"
        alt="Nextjs SaaS Boilerplate"
        width="128"
        height="30"
      />
    </a>
  </LogoCloud>
);
