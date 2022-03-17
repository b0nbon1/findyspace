import { CardMedia, Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import LocationPinIcon from '../../icons/LocationPinIcon';

interface PopularLocationCardProp {
  id: number;
  name: string;
  distance: string;
  image: string | null;
}

const locations = [
  {
    id: 0,
    name: 'Nairobi',
    distance: '8km',
    image: '/nairobi-loaction.jpg',
  },
  {
    id: 1,
    name: 'Kisumu',
    distance: '398km',
    image: '/kisumu-location.jpg',
  },
  {
    id: 2,
    name: 'Mombasa',
    distance: '468km',
    image: '/mombasa-location.jpg',
  },
  {
    id: 3,
    name: 'Marsabit',
    distance: '379km',
    image: '/marsabit-location.jpg',
  },
];

function PopularLocations() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: '90%',
        my: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' }, mb: 2 }}
      >
        People love these locations
      </Typography>
      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget turpis a
        vel ac odio velit. Nulla lorem id blandit amet.
      </Typography>
      <Grid container spacing={2}>
        {locations.map((location) => (
          <Grid key={location.id} item xs={12} sm={6} md={3}>
            <PopularLocationCard {...location} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function PopularLocationCard({
  id,
  name,
  distance,
  image,
}: PopularLocationCardProp) {
  return (
    <CardMedia
      key={id}
      image={image as string}
      sx={{
        color: '#fff',
        height: '320px',
        borderRadius: 2,
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', bottom: '10%', left: '8%' }}>
        <LocationPinIcon />
        <Typography
          sx={{
            fontFamily: '"Readex Pro"',
            fontWeight: 600,
            fontSize: '1.3rem',
            mt: 3,
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: '0.875rem' }}>{distance}</Typography>
      </Box>
    </CardMedia>
  );
}

export default PopularLocations;
