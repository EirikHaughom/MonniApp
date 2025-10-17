'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export const AuthSessionProvider = (props: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  return (
    <SessionProvider session={props.session ?? undefined}>
      {props.children}
    </SessionProvider>
  );
};
