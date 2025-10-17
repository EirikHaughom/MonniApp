import { getTranslations } from 'next-intl/server';

import { SignInForm } from '@/features/auth/SignInForm';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

type SignInPageProps = {
  params: { locale: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

const SignInPage = (props: SignInPageProps) => {
  const callbackUrlParam = props.searchParams?.callbackUrl;
  const callbackUrl = Array.isArray(callbackUrlParam)
    ? callbackUrlParam[0]
    : callbackUrlParam;
  const errorParam = props.searchParams?.error;
  const initialError = Array.isArray(errorParam) ? errorParam[0] : errorParam;

  return (
    <SignInForm
      locale={props.params.locale}
      callbackUrl={callbackUrl}
      initialError={initialError}
    />
  );
};

export default SignInPage;
