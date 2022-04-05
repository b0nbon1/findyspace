import React from 'react';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Head from 'next/head';

const BackButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: '4px',
  fontSize: 16,
  padding: '12px 12px',
  margin: '32px auto',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#5D33D5',
  color: '#F9F9FA',
  '&:hover': {
    backgroundColor: '#5D33D2',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#5D33D5',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

function Page404() {
  return (
    <>
      <Head>
        <title>findyspace | 404</title>
        <meta name="description" content="page not found" />
      </Head>
      <div style={{ width: '100%', margin: 0, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              py: { xs: 2, sm: 8, md: 10 },
              px: 0,
              m: 0,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            }}
          >
            <CardMedia
              sx={{
                height: { xs: '320px', sm: '504px', md: '608px' },
                width: { xs: '340px', sm: '540px', md: '608px' },
                m: 'auto',
              }}
              image="/Saly-11.png"
            />
            <Box
              sx={{
                width: { xs: '100%', sm: '100%', md: '50%' },
                textAlign: { xs: 'center', sm: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.75rem' },
                  lineHeight: 1.5,
                  py: 2,
                }}
              >
                Oops!
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.75rem' },
                  lineHeight: 1.5,
                  pb: 2,
                }}
              >
                Something went wrong.
              </Typography>
              <Typography
                sx={{
                  color: '#4C5567',
                  fontSize: '1.25rem',
                  lineHeight: 1.5,
                  pb: 2,
                }}
              >
                Error 404 Page Not Found
              </Typography>
              <BackButton>Back to Home Page</BackButton>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Page404;
