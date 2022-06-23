import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import App from 'next/app';
import createEmotionCache from '../src/utils/createEmotionCache';
import theme from '../src/styles/theme';
import '../src/styles/globals.css';
import MainLayout from '../src/components/layouts/MainLayout';
import client from '../src/utils/client';
import webAuth from '../src/utils/webAuth';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
    user,
  } = props;
  return (
    <SessionProvider session={pageProps?.session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              maxSnack={3}
            >
              <MainLayout user={user}>
                <Component {...pageProps} user={user} />
              </MainLayout>
            </SnackbarProvider>
          </ApolloProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (context: any) => {
  let user;
  if (typeof window === 'undefined') {
    user = webAuth(context.ctx);
  }
  return {
    ...App.getInitialProps(context),
    user,
  };
};

export default MyApp;
