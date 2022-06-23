import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import FAQs from '../src/components/Space-owners/FAQs';
import Hero from '../src/components/Space-owners/Hero';
import HostingWorks from '../src/components/Space-owners/HostingWorking';
import HowTo from '../src/components/Space-owners/HowTo';

function SpaceOwner() {
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Hero />
      <HowTo />
      <HostingWorks />
      <FAQs />
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          background: '#C3C4FE',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '100px', md: '300px' },
          color: '#ffffff',
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: '1rem', md: '2rem' }, fontWeight: 'bold' }}
        >
          Create your first listing today
        </Typography>
        <Button variant="contained" sx={{ textTransform: 'none' }}>
          Become A Host
        </Button>
        <Box
          sx={{
            clipPath: 'circle(17.2% at 18% 100%)',
            background: '#F27956',
            width: { xs: '300px', md: '800px' },
            height: { xs: '300px', md: '800px' },
            left: '5%',
            position: 'absolute',
            bottom: 0,
          }}
        />
        <Box
          sx={{
            clipPath: 'circle(85.1% at 100% 85%)',
            background: '#5D33D5',
            width: { xs: '100px', md: '300px' },
            height: { xs: '100px', md: '300px' },
            right: 0,
            position: 'absolute',
            bottom: 0,
          }}
        />
      </Box>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default SpaceOwner;
