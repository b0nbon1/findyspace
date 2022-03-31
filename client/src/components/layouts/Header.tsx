import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBarStyled, BecomeHost, Seperator, ToolbarStyled } from './styles';
import AuthCard from '../authentication/AuthCard';

export interface HeaderProps {
  title?: string | undefined;
  description?: string | undefined;
}

function Header({ description, title }: HeaderProps) {
  const router = useRouter();
  console.log(router.pathname);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [openSignup, setOpenSignup] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenSignup = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };
  const handleOpenLogin = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Head>
        <title>findyspace | {title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="http://findy.space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBarStyled elevation={0} position="static">
        <Container maxWidth="xl">
          <ToolbarStyled>
            <Box sx={{ flex: 1, my: 1 }}>
              <Link href="/">
                <img
                  src="/main-logo.png"
                  style={{ cursor: 'pointer' }}
                  alt="logo"
                  width="150"
                />
              </Link>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {router.pathname !== '/space-owner' && (
                <>
                  <Link href="/space-owner">
                    <BecomeHost sx={{ mx: 1 }} variant="outlined">
                      Become A Host
                    </BecomeHost>
                  </Link>
                  <Seperator sx={{ mx: 1 }} />
                </>
              )}
              <Button sx={{ mx: 1 }} onClick={() => setOpenSignup(true)}>
                Sign Up
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 1, borderRadius: '4px' }}
                onClick={() => setOpenLogin(true)}
              >
                Log In
              </Button>
            </Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {anchorEl ? (
                <CloseIcon />
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2.66675H14V4.00008H2V2.66675ZM6 7.33341H14V8.66675H6V7.33341ZM2 12.0001H14V13.3334H2V12.0001Z"
                    fill="#4C5567"
                  />
                </svg>
              )}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Typography sx={{ fontWeight: 'bold' }}>Sign up</Typography>
              </MenuItem>
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Typography>Log in</Typography>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Typography>Become Host</Typography>
              </MenuItem>
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Typography>Help</Typography>
              </MenuItem>
            </Menu>
          </ToolbarStyled>
        </Container>
      </AppBarStyled>
      <AuthCard
        isLogin={false}
        open={openSignup}
        handleClose={() => setOpenSignup(false)}
        handleAuth={handleOpenLogin}
      />
      <AuthCard
        isLogin
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
        handleAuth={handleOpenSignup}
      />
    </>
  );
}

Header.defaultProps = {
  description:
    'findyspace or findmyspace Africa app is used to explore spaces in Kenya and East Africa. Explore events, meeting, fun locations available',
  title: 'Explore event spaces, meeting places and workspaces near you',
};

export default Header;
