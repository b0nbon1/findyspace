import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import createEmotionCache from '../utils/createEmotionCache';
import theme from '../src/styles/theme';
import '../src/styles/globals.css';
import MainLayout from '../src/components/layouts/MainLayout';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
