import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function SectionHeader({
  title,
  hasSeeAll,
}: {
  hasSeeAll: boolean;
  title: string;
}) {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' } }}
      >
        {title}
      </Typography>
      {hasSeeAll && (
        <Button
          sx={{ color: '#5D33D5', fontSize: '14px', textTransform: 'none' }}
        >
          See All
        </Button>
      )}
    </Box>
  );
}

export default SectionHeader;
