import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';
import useProgressiveImage from '../../hooks/useProgressiveImage';
import SearchBar from './SearchBar';
import { MainContainer } from './styles';

function Hero() {
  const loadedImage = useProgressiveImage('https://findy-coming-soon.s3.eu-west-1.amazonaws.com/home.jpg');
  return loadedImage ? (
    <MainContainer
      maxWidth="lg"
      sx={{
        width: '90%',
        height: {
          xs: '200px', sm: '250px', md: '350px', lg: '500px',
        },
        pl: { xs: 1, md: 2 },
        background: `url(${loadedImage}) rgba(0, 0, 0, 0.3)`,
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        mx: 'auto',
        my: { xs: 0, md: '1rem' },
        position: 'relative',
      }}
    >
      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '2rem', md: '4rem' } }}>Find new locations</Typography>
      <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: { xs: '.8rem', md: '1rem' } }}>Enjoy your activities at an exclusive place.</Typography>
      <SearchBar />
    </MainContainer>
  ) : (
    <Skeleton
      variant="rectangular"
      width="90%"
      sx={{
        height: {
          xs: '200px', sm: '250px', md: '350px', lg: '500px',
        },
        mx: 'auto',
        my: 1,
        borderRadius: '15px',
      }}
    />
  );
}

export default Hero;
