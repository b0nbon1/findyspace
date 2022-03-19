import { Box, Button, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import { Img } from './styles';

function SupportContainer() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#C3C4FE',
        height: { xs: '110px', md: '250px' },
        my: { xs: 5, md: 15 },
        borderRadius: '10px',
        position: 'relative',
        width: '90%',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: { xs: '105px', md: '275px' },
          width: { xs: '105px', md: '275px' },
          background: '#F27956',
          clipPath: 'circle(50% at 0 100%)',
          bottom: 0,
          left: 0,
          borderBottomLeftRadius: '10px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: { xs: '120px', md: '340px' },
          width: { xs: '120px', md: '340px' },
          background: '#5D33D5',
          clipPath: 'circle(45.3% at 51% 25%)',
          top: 0,
          left: { xs: '50px', sm: '120px', md: '200px' },
          overflow: 'visible',
        }}
      />
      <CardMedia
        image="/Saly-14.png"
        sx={{
          position: 'absolute',
          left: { xs: '70px', sm: '140px', md: '240px' },
          top: { xs: '-30%', md: '-40%' },
          height: { xs: '130px', md: '388px' },
          width: { xs: '96px', md: '288px' },
          backgroundSize: 'contain',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: '10%',
          top: { xs: '20%', md: '40%' },
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1rem', md: '2rem' },
            color: '#fff',
            width: { xs: '90%', md: 'auto' },
            float: 'right',
          }}
        >
          Would you like to know more about us?
        </Typography>
        <Box sx={{ float: 'right' }}>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: '#fff',
              color: '#4C5567',
              p: { xs: 0.5, md: 1 },
              mr: 1,
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            Contact Agent
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              p: { xs: 0.5, md: 1 },
            }}
          >
            Visit Help Center
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: '#F27956',
          width: { xs: '158px', md: '380px' },
          height: { xs: '158px', md: '380px' },
          clipPath: 'circle(46.5% at 99% 99%)',
          right: 0,
          bottom: 0,
          borderBottomRightRadius: '10px',
        }}
      />
    </Container>
  );
}

export default SupportContainer;
