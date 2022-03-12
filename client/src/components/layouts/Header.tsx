import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {
  AppBarStyled, BecomeHost, Seperator, ToolbarStyled,
} from './styles';

function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Head>
        <title>Findyspace | home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBarStyled elevation={0} position="static">
        <Container maxWidth="xl">
          <ToolbarStyled>
            <Typography sx={{ flexGrow: 1 }}>FindySpace</Typography>
            <Box display="flex" alignItems="center">
              <BecomeHost sx={{ mx: 1 }} variant="outlined">Become A Host</BecomeHost>
              <Seperator sx={{ mx: 1 }} />
              <Button sx={{ mx: 1 }}>Sign Up</Button>
              <Button variant="contained" sx={{ mx: 1 }}>Log In</Button>
            </Box>
          </ToolbarStyled>
        </Container>
      </AppBarStyled>

    </>

  );
}

export default Header;
