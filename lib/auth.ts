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
        console.log(credentials);
        if (
          credentials?.username === process.env.SITE_ADMIN &&
          credentials?.password === process.env.SITE_PASSWORD
        ) {
          return { id: '1', name: 'admin' };
        }

        return null;
      },
    }),
  ],
};

export default auth;
