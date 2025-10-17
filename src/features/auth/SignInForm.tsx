'use client';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getI18nPath } from '@/utils/Helpers';

type SignInFormProps = {
  locale: string;
  callbackUrl?: string;
  initialError?: string | null;
};

export const SignInForm = (props: SignInFormProps) => {
  const t = useTranslations('SignIn');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
    props.initialError ? 'error' : 'idle',
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus('loading');
    const result = await signIn('resend', {
      email,
      callbackUrl:
        props.callbackUrl ?? getI18nPath('/dashboard', props.locale),
      redirect: false,
    });

    if (result?.error) {
      setStatus('error');
      return;
    }

    setStatus('sent');
  };

  const disabled = status === 'loading' || status === 'sent';

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-sm"
    >
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-sm text-muted-foreground">{t('description')}</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t('email_label')}</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
            disabled={disabled}
          />
        </div>

        <Button type="submit" className="w-full" disabled={disabled}>
          {status === 'loading' ? t('button_loading') : t('button_default')}
        </Button>

        {status === 'sent' && (
          <p className="rounded-md border border-green-400 bg-green-50 p-3 text-sm text-green-700 dark:border-green-900 dark:bg-green-900/30 dark:text-green-200">
            {t('sent')}
          </p>
        )}

        {status === 'error' && (
          <p className="rounded-md border border-destructive bg-destructive/10 p-3 text-sm text-destructive">
            {t('error_generic')}
          </p>
        )}
      </div>
    </form>
  );
};
