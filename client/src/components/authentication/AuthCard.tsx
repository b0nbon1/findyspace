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
import Router from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import LOGIN_WITH_EMAIL from '../../graphql/mutaions/loginWithEmail';
import REGISTER_WITH_EMAIL from '../../graphql/mutaions/registerWithEmail';

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
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    ...(!isLogin && {
      confirmPassword: yup
        .string()
        .required('confirmed password is required field')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
  });
  const [loginUser, { loading }] = useMutation(LOGIN_WITH_EMAIL);
  const [registerUser, { loading: registerLoading }] =
    useMutation(REGISTER_WITH_EMAIL);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ email, password }: any) => {
    try {
      let res;
      if (isLogin) {
        res = await loginUser({ variables: { email, password } });
        if (res.data?.loginWithEmail?.status) {
          handleClose();
          Router.reload();
        } else {
          enqueueSnackbar(
            'Failed to login, kindly check your email and password',
            {
              variant: 'error',
              autoHideDuration: 3000,
            },
          );
        }
      } else {
        res = await registerUser({ variables: { email, password } });
      }
    } catch (error) {
      enqueueSnackbar('Failed to login, kindly check your email and password', {
        variant: 'error',
        autoHideDuration: 3000,
      });
      console.log(error);
    }
  };

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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value || ''}
                  ref={ref}
                  fullWidth
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  placeholder="Email"
                />
              )}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography>Password</Typography>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value || ''}
                  ref={ref}
                  fullWidth
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  placeholder="Password"
                />
              )}
            />
          </Box>
          {!isLogin && (
            <Box sx={{ my: 2 }}>
              <Typography>Confirm Password</Typography>
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextField
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value || ''}
                    ref={ref}
                    fullWidth
                    type="password"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    placeholder="Confirm Password"
                  />
                )}
              />
            </Box>
          )}
          <LoadingButton
            fullWidth
            size="large"
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            loading={loading || registerLoading}
          >
            {isLogin ? 'Log In' : 'Sign up'}
          </LoadingButton>
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
          {!isLogin && (
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
