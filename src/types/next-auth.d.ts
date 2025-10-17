import type { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  type Session = DefaultSession & {
    user?: DefaultSession['user'] & {
      id: string;
    };
  };

  type User = DefaultUser & {
    id: string;
  };
}
