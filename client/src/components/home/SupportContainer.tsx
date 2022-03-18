import { Container, Typography } from '@mui/material';
import React from 'react';

function SupportContainer() {
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
      <Typography>Would you like to know more about us?</Typography>
    </Container>
  );
}

export default SupportContainer;
