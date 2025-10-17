import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignInVerify',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInVerifyPage = async (props: { params: { locale: string } }) => {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignInVerify',
  });

  return (
    <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 text-center shadow-sm">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
      <p className="mt-4 text-sm text-muted-foreground">{t('description')}</p>
    </div>
  );
};

export default SignInVerifyPage;
