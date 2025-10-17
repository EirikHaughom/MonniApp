'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

import { ActiveLink } from '@/components/ActiveLink';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ToggleMenuButton } from '@/components/ToggleMenuButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/templates/Logo';
import { getI18nPath } from '@/utils/Helpers';

export const DashboardHeader = (props: {
  menu: {
    href: string;
    label: string;
  }[];
}) => {
  const locale = useLocale();
  const { data: session, status } = useSession();
  const tUser = useTranslations('UserProfile');

  return (
    <>
      <div className="flex items-center">
        <Link href="/dashboard" className="max-sm:hidden">
          <Logo />
        </Link>

        <svg
          className="size-8 stroke-muted-foreground max-sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M17 5 7 19" />
        </svg>

        <nav className="ml-3 max-lg:hidden">
          <ul className="flex flex-row items-center gap-x-3 text-lg font-medium [&_a]:opacity-75 [&_a:hover]:opacity-100">
            {props.menu.map(item => (
              <li key={item.href}>
                <ActiveLink href={item.href}>{item.label}</ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex items-center gap-x-1.5 [&_li[data-fade]]:opacity-60 [&_li[data-fade]:hover]:opacity-100">
          <li data-fade>
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ToggleMenuButton />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {props.menu.map(item => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>

          {/* PRO: Dark mode toggle button */}

          <li data-fade>
            <LocaleSwitcher />
          </li>

          <li>
            <Separator orientation="vertical" className="h-4" />
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-x-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium transition hover:bg-muted"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary uppercase">
                    {session?.user?.email?.[0]?.toUpperCase()
                    ?? session?.user?.name?.[0]?.toUpperCase()
                    ?? 'U'}
                  </span>
                  <span className="max-w-32 truncate text-left">
                    {status === 'loading'
                      ? 'Loading'
                      : session?.user?.email
                        ?? session?.user?.name
                        ?? 'Signed user'}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem asChild>
                  <Link
                    href={getI18nPath('/dashboard/user-profile', locale)}
                  >
                    {session?.user?.email ?? 'Account settings'}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={async (event) => {
                    event.preventDefault();
                    await signOut({
                      callbackUrl: getI18nPath('/', locale),
                    });
                  }}
                >
                  {tUser('sign_out_button')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </>
  );
};
