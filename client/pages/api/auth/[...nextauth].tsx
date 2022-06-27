/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import {
  fbAppID,
  fbAppSecret,
  googleClientID,
  googleClientSecret,
} from '../../../config';

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: fbAppID,
      clientSecret: fbAppSecret,
    } as any),
    GoogleProvider({
      clientId: googleClientID,
      clientSecret: googleClientSecret,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    } as any),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('==========###>', token, user, account, profile);
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.id_token;
      }
      return token;
    },
  },
});
