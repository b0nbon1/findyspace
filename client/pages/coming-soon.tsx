import React, { useState } from 'react';
import Head from 'next/head';
import {
  Box, FormHelperText, Grid, TextField, Typography, useMediaQuery,
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
  const hidden = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(emailSchema),
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await axios
        .post('/api/firebase', data);
      enqueueSnackbar('Thanks joining us! We\'ll notify once we are live', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Thanks joining us! We\'ll notify once we are live', { variant: 'success' });
    }
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Findyspace | Coming Soon</title>
        <meta name="description" content="findy space coming soon to you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: 'auto', sm: '100vh' },
        }}
      >
        <Box component="header" sx={{ ml: 3, mt: 3 }}>
          <Image width={110} height={25} src="/findyspace.png" />
        </Box>
        {hidden && (
        <Box sx={{
          position: 'absolute',
          right: -412,
          top: -412,
          width: 824,
          height: 824,
          filter: 'blur(10rem)',
          background: 'rgba(242, 121, 86, .95)',
        }}
        />
        )}
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
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Box sx={{
              width: { xs: '90%', sm: '70%' },
              display: 'flex',
              mx: 'auto',
              flexDirection: 'column',
            }}
            >
              <Typography sx={{
                textAlign: { xs: 'center', sm: 'left' },
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              }}
              >
                Get Notified When We Launch
              </Typography>
              <Box sx={{
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
                        backgroundColor: '#fff',
                      }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      placeholder="Enter Your Email Address"
                      onChange={onChange}
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
                    '&:hover': {
                      backgroundColor: '#5D33D5',
                    },
                  }}
                >
                  Notify Me
                </LoadingButton>
              </Box>
              <FormHelperText sx={{ mb: 3, color: 'red' }}>{errors?.email?.message}</FormHelperText>
              <Typography>Don’t worry, we won’t spam you.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{
              height: '400px',
              width: '400px',
              background: '#F27956',
              borderRadius: '50%',
              position: 'relative',
              mx: 'auto',
            }}
            >
              <img
                style={{
                  position: 'absolute',
                  right: '-50px',
                  top: '-20px',
                  transform: 'rotate(28deg)',
                  height: '440px',
                  width: '440px',
                }}
                src="/rocket.png"
                alt="rocket launched"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
