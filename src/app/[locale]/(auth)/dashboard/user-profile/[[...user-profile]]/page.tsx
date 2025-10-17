import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { SignOutButton } from '@/features/auth/SignOutButton';
import { TitleBar } from '@/features/dashboard/TitleBar';
import { auth } from '@/libs/auth';
import { getI18nPath } from '@/utils/Helpers';

const UserProfilePage = async (props: { params: { locale: string } }) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect(getI18nPath('/sign-in', props.params.locale));
  }

  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'UserProfile',
  });

  return (
    <>
      <TitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />

      <div className="grid max-w-xl gap-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{t('details_title')}</h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-medium text-foreground">{t('email_label')}</dt>
              <dd>{user.email}</dd>
            </div>
            {user.name && (
              <div>
                <dt className="font-medium text-foreground">{t('name_label')}</dt>
                <dd>{user.name}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{t('security_title')}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t('security_description')}
          </p>
          <div className="mt-4">
            <SignOutButton locale={props.params.locale} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
