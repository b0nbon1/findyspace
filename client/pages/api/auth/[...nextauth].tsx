import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import { fbAppID, fbAppSecret } from '../../../config';

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: fbAppID,
      clientSecret: fbAppSecret,
    } as any),
  ],
});
