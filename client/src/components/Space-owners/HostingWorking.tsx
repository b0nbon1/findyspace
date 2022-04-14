import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const steps = [
  {
    id: 1,
    color: '#F27956',
    img: 'Saly-12.png',
  },
  {
    id: 2,
    color: '#C3C4FE',
    img: 'Saly-31.png',
  },
  {
    id: 3,
    color: '#5D33D5',
    img: 'Saly-26.png',
    diff: true,
  },
];

function HostingWorks() {
  return (
    <Container
      maxWidth="lg"
      sx={{ width: '90%', my: 20, position: 'relative' }}
    >
      <Typography variant="h4">How hosting works</Typography>
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' }, mb: 10 }}
      >
        <Box
          sx={{
            width: { xs: '270px', md: '360px' },
            height: { xs: '270px', md: '360px' },
            borderRadius: '50%',
            backgroundColor: steps[0].color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 1, md: 0 },
          }}
          key={steps[0].id}
        >
          <Box
            component="img"
            sx={{
              height: steps[0].diff
                ? { xs: '287px', md: '363px' }
                : { xs: '300px', md: '410px' },
            }}
            src={steps[0].img}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '40%' }, mx: 'auto' }}>
          <Typography variant="h6">Register as a host</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus a
            placerat vulputate commodo, tincidunt tincidunt phasellus etiam
            donec. Quis varius ut scelerisque dictum. Consequat tellus et
            eleifend consectetur in enim nullam odio rutrum. Consectetur id
            feugiat orci, purus scelerisque vitae mauris odio est.{' '}
          </Typography>
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          position: 'absolute',
          width: '40%',
          top: '300px',
          left: '380px',
          display: { xs: 'none', md: 'block' },
        }}
        src="wavyline1.png"
      />
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row-reverse' }, mb: 10 }}
      >
        <Box
          sx={{
            width: { xs: '270px', md: '360px' },
            height: { xs: '270px', md: '360px' },
            borderRadius: '50%',
            backgroundColor: steps[1].color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 1, md: 0 },
          }}
          key={steps[1].id}
        >
          <Box
            component="img"
            sx={{
              height: steps[1].diff
                ? { xs: '287px', md: '363px' }
                : { xs: '300px', md: '410px' },
            }}
            src={steps[1].img}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '40%',
            },
            mx: 'auto',
          }}
        >
          <Typography variant="h6">
            Communicate with potential clients
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus a
            placerat vulputate commodo, tincidunt tincidunt phasellus etiam
            donec. Quis varius ut scelerisque dictum. Consequat tellus et
            eleifend consectetur in enim nullam odio rutrum. Consectetur id
            feugiat orci, purus scelerisque vitae mauris odio est.{' '}
          </Typography>
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          position: 'absolute',
          width: '60%',
          bottom: '320px',
          left: '200px',
          display: { xs: 'none', md: 'block' },
        }}
        src="wavyline2.png"
      />
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' }, mb: 10 }}
      >
        <Box
          sx={{
            width: { xs: '270px', md: '360px' },
            height: { xs: '270px', md: '360px' },
            borderRadius: '50%',
            backgroundColor: steps[2].color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 1, md: 0 },
          }}
          key={steps[2].id}
        >
          <Box
            component="img"
            sx={{
              height: steps[2].diff
                ? { xs: '287px', md: '363px' }
                : { xs: '300px', md: '410px' },
            }}
            src={steps[2].img}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '40%' }, mx: 'auto' }}>
          <Typography variant="h6">Host a client and receive funds</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus a
            placerat vulputate commodo, tincidunt tincidunt phasellus etiam
            donec. Quis varius ut scelerisque dictum. Consequat tellus et
            eleifend consectetur in enim nullam odio rutrum. Consectetur id
            feugiat orci, purus scelerisque vitae mauris odio est.{' '}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default HostingWorks;
