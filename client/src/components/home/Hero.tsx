import { Box, Container } from '@mui/material';
import React from 'react';

function Hero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: '90%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginX: 'auto',
      }}
    >
      <img
        src="/home.jpg"
        alt="nairobi with buildings"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Container>
  );
}

export default Hero;
