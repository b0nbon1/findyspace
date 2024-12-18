import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import ContactInfo from './ContactInfo';

interface ContactCard {
  id: number;
  icon: any;
  name: string;
}

const ContactCards = [
  {
    id: 1,
    name: 'Help Center',
    icon: '/icons/help-center.svg',
  },
  {
    id: 2,
    name: 'Superhost Chat',
    icon: '/icons/superhost-chat.svg',
  },
  {
    id: 3,
    name: 'Blog Posts',
    icon: '/icons/blog-posts.svg',
  },
];

function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ width: '90%' }}>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '.75rem', sm: '.9rem', md: '1.2rem' },
          fontWeight: 500,
          color: '#5D33D5',
          pt: '72px',
          textAlign: 'center',
        }}
      >
        CONTACT US
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontWeight: { sm: 500, md: 700 },
          color: '#111827',
          textAlign: 'center',
        }}
      >
        Get in touch and let us know how we can help.
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          mt: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {ContactCards.map((card) => (
          <Grid item key={card.id} xs={11} sm={6} md={4}>
            <ContactCard {...card} />
          </Grid>
        ))}
      </Grid>
      <ContactInfo />
    </Container>
  );
}

function ContactCard({ id, name, icon }: ContactCard) {
  return (
    <Paper
      key={id}
      sx={{
        p: 1,
        m: 1,
        pr: 2,
        height: { xs: '180px', sm: '240px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#5D33D5',
          width: '90px',
          height: '90px',
          borderRadius: '15%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={icon} alt={name} />
      </Box>
      <Typography
        sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, fontWeight: 500, mt: 4 }}
      >
        {name}
      </Typography>
    </Paper>
  );
}

export default ContactPage;
