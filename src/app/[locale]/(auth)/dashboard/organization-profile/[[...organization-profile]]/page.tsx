import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { TitleBar } from '@/features/dashboard/TitleBar';

const OrganizationProfilePage = async (props: { params: { locale: string } }) => {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'OrganizationProfile',
  });

  return (
    <>
      <TitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />

      <div className="max-w-2xl space-y-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{t('overview_title')}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t('overview_description')}
          </p>
        </div>

        <div className="rounded-lg border border-dashed border-primary/40 bg-primary/5 p-6">
          <h3 className="text-base font-semibold text-primary">
            {t('todo_title')}
          </h3>
          <p className="mt-2 text-sm text-primary/80">
            {t('todo_description')}
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-4 border-primary/40 text-primary hover:bg-primary/10"
          >
            <a href="https://better-auth.com/docs" target="_blank" rel="noreferrer">
              {t('todo_cta')}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrganizationProfilePage;
