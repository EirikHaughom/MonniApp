import { redirect } from 'next/navigation';

import { auth } from '@/libs/auth';
import { getI18nPath } from '@/utils/Helpers';

type CenteredLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function CenteredLayout(props: CenteredLayoutProps) {
  const session = await auth();
  const userId = session?.user?.id;
  const { locale } = await props.params;

  if (userId) {
    redirect(getI18nPath('/dashboard', locale));
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
