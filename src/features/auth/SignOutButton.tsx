'use client';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { getI18nPath } from '@/utils/Helpers';

export const SignOutButton = (props: { locale: string }) => {
  const t = useTranslations('UserProfile');

  return (
    <Button
      variant="outline"
      onClick={() =>
        signOut({
          callbackUrl: getI18nPath('/', props.locale),
        })}
    >
      {t('sign_out_button')}
    </Button>
  );
};
