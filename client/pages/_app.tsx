import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import createEmotionCache from '../src/utils/createEmotionCache';
import theme from '../src/styles/theme';
import '../src/styles/globals.css';
import MainLayout from '../src/components/layouts/MainLayout';
import client from '../src/utils/client';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SnackbarProvider>
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
