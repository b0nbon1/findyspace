import {
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

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
      <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}>People love these locations</Typography>
      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Eget turpis a vel ac odio velit. Nulla lorem id blandit amet.
      </Typography>
      <Grid container>
        {locations.map((location) => (
          <Grid item xs={6} sm={4} md={3}>
            <PopularLocationCard {...location} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function PopularLocationCard({
  id, name, distance, image,
}: PopularLocationCardProp) {
  return (
    <CardMedia
      key={id}
      image={image as string}
      sx={{ color: '#fff', height: '320px', borderRadius: 2 }}
    >
      <Typography>{name}</Typography>
      <Typography>{distance}</Typography>
    </CardMedia>
  );
}

export default PopularLocations;
