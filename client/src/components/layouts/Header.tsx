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
import { AppBarStyled, BecomeHost, Seperator, ToolbarStyled } from './styles';
import FindySpaceLogo from './FindySpaceLogo';

export interface HeaderProps {
  title?: string | undefined;
  description?: string | undefined;
}

function Header({ description, title }: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClose = () => {
    setAnchorEl(null);
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
            <FindySpaceLogo />
            <Box
              display="flex"
              alignItems="center"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <BecomeHost sx={{ mx: 1 }} variant="outlined">
                Become A Host
              </BecomeHost>
              <Seperator sx={{ mx: 1 }} />
              <Button sx={{ mx: 1 }}>Sign Up</Button>
              <Button variant="contained" sx={{ mx: 1 }}>
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
                    fill="#4      elevation={2}
                    sx={{
                    borderRadius: '.5rem',
                    width: { xs: '100%', sm: '100%', md: '55%' },
                    order: { xs: 1, sm: 1, md: 2 },
                    }C5567"
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
    </>
  );
}

Header.defaultProps = {
  description:
    'findyspace or findmyspace Africa app is used to explore spaces in Kenya and East Africa. Explore events, meeting, fun locations available',
  title: 'Explore event spaces, meeting places and workspaces near you',
};

export default Header;
