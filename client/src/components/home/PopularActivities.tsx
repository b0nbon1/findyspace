import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '../../icons/BusinessIcon';
import PartyIcon from '../../icons/PartyIcon';
import WeddingIcon from '../../icons/WeddingIcon';
import WorkspaceIcon from '../../icons/WorkspaceIcon';
import SectionHeader from './SectionHeader';

interface ActivityCardProps {
  id: number;
  Icon: any;
  spaces: number;
  name: string;
}

const activities = [
  {
    id: 0,
    Icon: <BusinessIcon />,
    name: 'Business Meeting',
    spaces: 500,
  },
  {
    id: 1,
    Icon: <WeddingIcon />,
    name: 'Wedding',
    spaces: 400,
  },
  {
    id: 2,
    Icon: <PartyIcon />,
    name: 'Party',
    spaces: 300,
  },
  {
    id: 3,
    Icon: <WorkspaceIcon />,
    name: 'Work Space',
    spaces: 200,
  },
];

function PopularActivities() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: '90%',
        my: 4,
      }}
    >
      <SectionHeader title="Most Popular Activities" hasSeeAll />
      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget turpis a
        vel ac odio velit. Nulla lorem id blandit amet.
      </Typography>
      <Grid container spacing={1} sx={{ mt: 4 }}>
        {activities.map((activity) => (
          <Grid item key={activity.id} xs={6} sm={4} md={3}>
            <ActivityCard {...activity} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function ActivityCard({ name, Icon, spaces, id }: ActivityCardProps) {
  return (
    <Paper
      key={id}
      sx={{
        p: 1,
        m: 1,
        pr: 2,
        height: { xs: '169px', sm: '200px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {Icon}
      <Box sx={{ mb: { xs: 0, sm: 1, md: 3 } }}>
        <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
          {name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: '#9EA1A8' }}
          >
            {spaces} Spaces
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
        </Box>
      </Box>
    </Paper>
  );
}

export default PopularActivities;
