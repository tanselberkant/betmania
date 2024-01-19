import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      authorize(credentials) {
        if (
          credentials?.username === process.env.SITE_ADMIN &&
          credentials?.password === process.env.SITE_PASSWORD
        ) {
          return { id: '1', name: 'admin', role: 'admin' };
        }
        if (
          credentials?.username === process.env.SITE_USER &&
          credentials?.password === process.env.SITE_USER_PASSWORD
        ) {
          return { id: '2', name: 'user', role: 'user' };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user && token.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
export default auth;
