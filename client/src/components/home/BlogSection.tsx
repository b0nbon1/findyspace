import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';

const blogs = [
  {
    category: 'HOSTING',
    id: 0,
    title: 'How to get your first booking',
    img: '/nairobi.jpg',
  },
  {
    category: 'GUEST',
    id: 1,
    title: 'Top 10 locations to choose for your upcoming wedding',
    img: '/locks.jpg',
  },
];

function BlogSection() {
  return (
    <Container maxWidth="lg" sx={{ my: 10, width: '90%' }}>
      <SectionHeader
        title="Get More Insights From our Blog"
        hasSeeAll={false}
      />
      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <Grid key={blog.id} xs={12} md={6} item>
            <Box
              sx={{
                height: { xs: '200px', md: '360px' },
                backgroundImage: `url('${blog.img}')`,
                borderRadius: '16px',
                p: { xs: 3, md: 4 },
                position: 'relative',
              }}
            >
              <Typography sx={{ color: '#F27956' }}>{blog.category}</Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '.9rem', sm: '1.2rem', md: '1.5rem' },
                  color: '#ffffff',
                  width: { xs: '100%', sm: '80%', md: '60%' },
                }}
              >
                {blog.title}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: '#fff',
                  color: '#111827',
                  position: 'absolute',
                  bottom: '10%',
                  '&:hover': {
                    background: '#fff',
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BlogSection;
