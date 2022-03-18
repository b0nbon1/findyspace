import React, { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  CardMedia,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const emailSchema = Yup.object({
  email: Yup.string().email().required(),
});

function Home() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(emailSchema),
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await axios.post('/api/firebase', data);
      reset({});
      enqueueSnackbar("Thanks joining us! We'll notify once we are live", {
        variant: 'success',
      });
    } catch (error) {
      reset({});
      enqueueSnackbar("Thanks joining us! We'll notify once we are live", {
        variant: 'success',
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>
          Findyspace | Coming Soon | Explore event spaces, meeting places and
          workspaces near you
        </title>
        <meta
          name="keywords"
          content={[
            'findy',
            'findyspace',
            'space',
            'event locations',
            'co-working spaces',
          ].join(',')}
        />
        <meta
          name="description"
          content="findyspace or findmyspace Africa app is used to explore spaces in Kenya and East Africa. Explore events, meeting, fun locations available"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: 'auto', sm: '100vh' },
        }}
      >
        <Box component="header" sx={{ ml: 3, my: 3 }}>
          <Image width={200} height="50" src="/main-logo.png" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            display: { xs: 'none', sm: 'block' },
            right: -412,
            top: -412,
            width: 824,
            height: 824,
            filter: 'blur(10rem)',
            background: 'rgba(242, 121, 86, .95)',
          }}
        />
        <Grid
          container
          alignItems="center"
          display="flex"
          sx={{
            my: 'auto',
            height: '80%',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
          }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: { xs: '95%', sm: '70%' },
                display: 'flex',
                mx: 'auto',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                }}
              >
                Get Notified When We Launch
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  fontWeight: 200,
                  fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' },
                }}
              >
                Are you ready to have an amazing unforgettable experiences?
                Discover the best location to host your events.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #E6E6ED',
                  height: '48px',
                  borderRadius: '20px',
                  pl: 2,
                  mt: 3,
                }}
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      variant="standard"
                      value={value || ''}
                      sx={{
                        flexGrow: 1,
                        backgroundColor: '#F8FAFC',
                      }}
                      InputProps={{
                        disableUnderline: true,
                        sx: { backgroundColor: '#F8FAFC' },
                      }}
                      placeholder="Enter Your Email Address"
                      onChange={(e) => {
                        e.target.value = e.target.value.trim();
                        onChange(e);
                      }}
                    />
                  )}
                />
                <LoadingButton
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                  loading={loading}
                  sx={{
                    mr: 0.5,
                    minWidth: 'max-content',
                    borderRadius: '15px',
                    backgroundColor: '#5D33D5',
                    fontSize: { xs: '0.5rem', md: '0.875rem' },
                    '&:hover': {
                      backgroundColor: '#5D33D5',
                    },
                  }}
                >
                  Notify Me
                </LoadingButton>
              </Box>
              <FormHelperText sx={{ mb: 1, color: 'red' }}>
                {errors?.email?.message}
              </FormHelperText>
              <Typography sx={{ mb: 3 }}>
                Don’t worry, we won’t spam you.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: { xs: '200px', md: '400px' },
                width: { xs: '200px', md: '400px' },
                background: '#F27956',
                borderRadius: '50%',
                position: 'relative',
                mx: 'auto',
              }}
            >
              <CardMedia
                sx={{
                  position: 'absolute',
                  right: { xs: '-25px', md: '-50px' },
                  top: { xs: '-10px', md: '-20px' },
                  transform: 'rotate(28deg)',
                  height: { xs: '220px', md: '440px' },
                  width: { xs: '220px', md: '440px' },
                }}
                image="/rocket.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
