import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Link as MuiLink,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

interface AuthCardProp {
  open: boolean;
  handleClose(): void;
  handleAuth(): void;
  isLogin: boolean;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 280, sm: 440, md: 500 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function AuthCard({ open, handleClose, isLogin, handleAuth }: AuthCardProp) {
  return (
    <Modal
      open={open}
      BackdropComponent={Backdrop}
      closeAfterTransition
      onClose={handleClose}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ my: 2 }}>
            <Typography>Email</Typography>
            <TextField fullWidth type="email" placeholder="Email" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography>Password</Typography>
            <TextField fullWidth type="password" placeholder="Password" />
          </Box>
          <Button fullWidth size="large" variant="contained">
            {isLogin ? 'Log In' : 'Sign up'}
          </Button>
          {isLogin && (
            <Box display="flex" justifyContent="center" sx={{ my: 4 }}>
              <MuiLink sx={{ textDecoration: 'none' }} href="/forgot-password">
                Forgot Password?
              </MuiLink>
            </Box>
          )}
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              height: '.6rem',
              display: 'flex',
              alignItems: 'flex-end',
              my: isLogin ? 1 : 5,
              '&::before, &::after': {
                content: '""',
                flex: 1,
                borderTop: '1px solid #E6E6ED',
                height: '.7rem',
              },
            }}
          >
            <Box sx={{ mx: '.5rem' }}>
              <Typography
                sx={{
                  fontSize: '1rem',
                  width: '100%',
                  color: '#4C5567',
                }}
              >
                or continue with
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button size="large" fullWidth variant="outlined">
                <img
                  style={{ marginRight: '.5rem', width: '24px' }}
                  alt="Google"
                  src="./icons/google.svg"
                />
                <Typography sx={{ fontSize: '0.65rem' }}>
                  {isLogin ? 'Log In' : 'Sign up'} with Google
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button size="large" variant="outlined" fullWidth>
                <img
                  style={{ marginRight: '.5rem', width: '24px' }}
                  alt="Facebook"
                  src="./icons/facebook.svg"
                />
                <Typography sx={{ fontSize: '0.65rem' }}>
                  {isLogin ? 'Log In' : 'Sign up'} with Facebook
                </Typography>
              </Button>
            </Grid>
          </Grid>
          {isLogin && (
            <Typography sx={{ my: 2, textAlign: 'center' }}>
              By continuing you agree to our{' '}
              <MuiLink href="/terms" sx={{ textDecoration: 'none' }}>
                Terms
              </MuiLink>{' '}
              &{' '}
              <MuiLink href="/privacy-policy" sx={{ textDecoration: 'none' }}>
                Privacy Policy
              </MuiLink>
            </Typography>
          )}
          <Divider sx={{ my: 2 }} />
          {isLogin ? (
            <Typography sx={{ my: 1, textAlign: 'center', fontWeight: 500 }}>
              Don&apos;t have an Account?{' '}
              <MuiLink
                onClick={() => handleAuth()}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                Sign Up
              </MuiLink>
            </Typography>
          ) : (
            <Typography sx={{ my: 1, textAlign: 'center', fontWeight: 500 }}>
              Already have an Account?{' '}
              <MuiLink
                onClick={() => handleAuth()}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                Log In
              </MuiLink>
            </Typography>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default AuthCard;
