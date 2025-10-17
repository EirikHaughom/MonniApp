import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'OrganizationSelection',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const OrganizationSelectionPage = async (props: {
  params: { locale: string };
}) => {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'OrganizationSelection',
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xl rounded-lg border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {t('description')}
        </p>
      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default OrganizationSelectionPage;
