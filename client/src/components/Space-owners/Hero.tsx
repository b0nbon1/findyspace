import { Skeleton, Typography, Box, CardMedia, Button } from '@mui/material';
import React from 'react';
import useProgressiveImage from '../../hooks/useProgressiveImage';

function Hero() {
  const loadedImage = useProgressiveImage(
    'https://findy-coming-soon.s3.eu-west-1.amazonaws.com/home.jpg',
  );
  return (
    <Box
      sx={{
        background: '#F8FAFC',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row-reverse' },
        alignItems: 'center',
        mb: 2,
      }}
    >
      {loadedImage ? (
        <CardMedia
          image={loadedImage}
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: '360px', md: '640px' },
            color: '#fff',
            backdropFilter: 'blur(6px)',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              background:
                'linear-gradient(0deg, rgba(47,47,47,0.8267682072829132) 35%, rgba(255,255,255,0) 100%)',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <Box sx={{ position: 'absolute', zIndex: 10, bottom: 0, m: 2 }}>
            <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.875rem' } }}>
              Super Host
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
            >
              John Doe, Nairobi KE
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.875rem' } }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              mi mi egestas id urna arcu, ornare blandit. Augue eget orci amet,
              odio volutpat. Habitant sed congue elit aliquet. Fermentum, urna
              tincidunt sapien, laoreet felis in magna mauris enim.
            </Typography>
          </Box>
        </CardMedia>
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{
            height: {
              xs: '200px',
              sm: '250px',
              md: '350px',
              lg: '500px',
            },
            width: {
              xs: '100%',
              md: '50%',
            },
            float: 'right',
            mt: 0,
            borderRadius: '15px',
          }}
        />
      )}
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        sx={{ width: { xs: '90%', md: '35%' }, mx: 'auto' }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '1rem', md: '2.5rem' },
            mt: { xs: 2, md: 0 },
          }}
        >
          List your space and earn money
        </Typography>
        <Typography sx={{ my: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit mi
          mi egestas id urna arcu, ornare blandit.
        </Typography>
        <Button variant="contained" sx={{ width: 'fit-content', mt: 1 }}>
          Become A Host
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
