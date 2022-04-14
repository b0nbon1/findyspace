import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';

const reasons = [
  {
    id: 0,
    name: 'Easy Navigation',
    icon: '/icons/easy-nav.svg',
  },
  {
    id: 1,
    name: 'Top Locations',
    icon: '/icons/top-locations.svg',
  },
  {
    id: 2,
    name: 'Fast Booking',
    icon: '/icons/fast-booking.svg',
  },
  {
    id: 5,
    name: 'Ample Support',
    icon: '/icons/ample-support.svg',
  },
];

function HowTo() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ width: '90%', my: 20 }}>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          height: {
            xs: '0.6rem',
            md: '1rem',
          },
          display: 'flex',
          alignItems: 'flex-end',
          '&::before, &::after': {
            content: '""',
            flex: 1,
            borderTop: '1px solid #E6E6ED',
            height: { xs: '0.6rem', md: '1rem' },
          },
        }}
      >
        <Box sx={{ mx: '1rem' }}>
          <Typography
            sx={{
              color: '#5D33D5',
              width: '100%',
              fontSize: { xs: '0.875rem', md: '1.1rem' },
            }}
          >
            HOST WITH US
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '.8rem', sm: '1.2rem', md: '2rem' },
              fontWeight: 700,
              width: '100%',
            }}
          >
            Convert your space into cash
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ textAlign: 'center', mt: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus a
        placerat vulputate commodo, tincidunt tincidunt phasellus etiam donec.
        Quis varius ut scelerisque dictum. Consequat tellus et eleifend
        consectetur in enim nullam odio rutrum. Consectetur id feugiat orci,
        purus scelerisque vitae mauris odio est.{' '}
      </Typography>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <img
            src="https://findy-coming-soon.s3.eu-west-1.amazonaws.com/home.jpg"
            alt="why us"
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            sx={{
              mt: { xs: 1, md: 0 },
              ml: { xs: 0, md: 1 },
              '& > :nth-of-type(1), & > :nth-of-type(4), & > :nth-of-type(5)': {
                [theme.breakpoints.up('md')]: {
                  backgroundColor: '#F8FAFC',
                },
              },
              '& > :nth-of-type(even)': {
                [theme.breakpoints.down('md')]: {
                  backgroundColor: '#F8FAFC',
                },
              },
            }}
            container
          >
            {reasons.map((reason) => (
              <Grid key={reason.id} item xs={12} sm={6}>
                <Box
                  className="tiles"
                  sx={{
                    height: { xs: '180px', md: '280px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img src={reason.icon} alt={reason.name} />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {reason.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HowTo;
