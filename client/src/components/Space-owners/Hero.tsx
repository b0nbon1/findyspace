import { Container, Skeleton, Typography } from '@mui/material';
import React from 'react';
import useProgressiveImage from '../../hooks/useProgressiveImage';

function Hero() {
  const loadedImage = useProgressiveImage(
    'https://findy-coming-soon.s3.eu-west-1.amazonaws.com/home.jpg',
  );
  return (
    <Container maxWidth="lg">
      <Skeleton
        variant="rectangular"
        width="90%"
        sx={{
          height: {
            xs: '200px',
            sm: '250px',
            md: '350px',
            lg: '500px',
          },
          mx: 'auto',
          my: 1,
          borderRadius: '15px',
        }}
      />
    </Container>
  );
}

export default Hero;
