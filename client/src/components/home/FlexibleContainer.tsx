import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Img } from './styles';

function FlexibleContainer() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#C3C4FE',
        height: { xs: '160px', md: '250px' },
        mt: { xs: 5, md: 15 },
        borderRadius: '10px',
        position: 'relative',
        width: '90%',
      }}
    >
      <Box
        sx={{
          width: { xs: '30px', md: '96px' },
          height: { xs: '30px', md: '96px' },
          backgroundColor: '#5D33D5',
          borderRadius: '50%',
          position: 'absolute',
          top: { xs: '70%', md: '50%' },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#F27956',
          m: 0,
          p: 0,
          width: { xs: '100px', md: '308px' },
          height: { xs: '100px', md: '308px' },
          marginLeft: { xs: '5%', sm: '30%', md: '20%' },
          clipPath: 'circle(47% at 50% 25%)',
        }}
      >
        <Img
          src="/Saly-2.png"
          alt="sally 2"
          style={{
            marginTop: '-30%',
            marginLeft: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          right: '10%',
          top: { xs: '20%', md: '40%' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '2rem' },
            color: '#fff',
            width: { xs: '60%', md: 'auto' },
          }}
        >
          Haven&apos;t decided on a space yet?
        </Typography>
        <Button variant="contained">I&apos;m Flexible</Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: '#F27956',
          width: { xs: '138px', md: '360px' },
          height: { xs: '138px', md: '360px' },
          clipPath: 'circle(46.5% at 99% 99%)',
          right: 0,
          bottom: 0,
          borderBottomRightRadius: '10px',
        }}
      />
    </Container>
  );
}

export default FlexibleContainer;
