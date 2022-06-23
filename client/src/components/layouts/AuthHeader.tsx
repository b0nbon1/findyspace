import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Link,
} from '@mui/material';
import Head from 'next/head';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useRouter } from 'next/router';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { deepPurple } from '@mui/material/colors';
import { AppBarStyled, ToolbarStyled } from './styles';
import AuthCard from '../authentication/AuthCard';

export interface AuthHeaderProps {
  title?: string | undefined;
  description?: string | undefined;
  user?: any | undefined;
}

const paths = [
  {
    url: '/bookings',
    name: 'Bookings',
    id: 1,
  },
  {
    url: '/chat',
    name: 'Messages',
    id: 2,
  },
  {
    url: '/help',
    name: 'Help',
    id: 3,
  },
];

function AuthHeader({ description, title, user }: AuthHeaderProps) {
  const router = useRouter();
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
            <Box sx={{ flex: 2, my: 1 }}>
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
              sx={{
                display: { xs: 'none', md: 'flex' },
                flex: 2,
                justifyContent: 'flex-end',
              }}
            >
              {paths.map((path) => (
                <Link
                  key={path.id}
                  sx={{
                    textDecoration: 'none',
                    mr: 2,
                    color:
                      router.asPath === path.url
                        ? 'primary.main'
                        : 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                  href={path.url}
                >
                  {path.name}
                </Link>
              ))}
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  py: 0.8,
                  px: 1.5,
                  borderColor: '#c6c6c6',
                  color: 'inherit',
                  borderRadius: 8,
                  mr: 2,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
                href="/bookings"
              >
                Switch to Hosting
              </Button>
              <Button sx={{ position: 'relative', p: 0, minWidth: 0, mr: 2 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    width: '.7rem',
                    height: '.7rem',
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    right: 3,
                    top: 4,
                  }}
                />
                <NotificationsNoneOutlinedIcon
                  sx={{
                    fontSize: '2rem',
                    fontWeigt: '100',
                    color: '#545252',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                />
              </Button>
              <Button
                sx={{ position: 'relative', p: 0, minWidth: 0, mr: 2 }}
                href="/account"
              >
                <Avatar
                  sx={{
                    bgcolor: deepPurple[300],
                    height: '2.2rem',
                    width: '2.2rem',
                    border: '3px #5D33D5 solid',
                    cursor: 'pointer',
                  }}
                  src={user.profile_pic ?? 'https://i.pravatar.cc/300'}
                />
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
                <Button
                  sx={{ color: 'inherit', p: 0, textTransform: 'none' }}
                  onClick={() => setOpenLogin(true)}
                >
                  <Typography>Messages</Typography>
                </Button>
              </MenuItem>
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Link href="/bookings">
                  <Typography>Bookings</Typography>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Link href="/contact-us">
                  <Typography>Help</Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Link href="/manage-listing">
                  <Typography>Manage listings</Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Link href="/contact-us">
                  <Typography>Account</Typography>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ mr: 4 }} onClick={handleClose}>
                <Link href="/logout">
                  <Typography>Logout</Typography>
                </Link>
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

AuthHeader.defaultProps = {
  description:
    'findyspace or findmyspace Africa app is used to explore spaces in Kenya and East Africa. Explore events, meeting, fun locations available',
  title: 'Explore event spaces, meeting places and workspaces near you',
  user: null,
};

export default AuthHeader;
