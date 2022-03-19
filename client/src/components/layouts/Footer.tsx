import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

export interface FooterProps {
  hideLinks?: boolean | undefined;
}

function Footer({ hideLinks }: FooterProps) {
  return (
    <Container>
      {!hideLinks && (
        <Grid container spacing={2}>
          <Grid item>
            <Typography>findyspace</Typography>
          </Grid>
          <Grid item container>
            <Grid item>
              <Typography>Company</Typography>
            </Grid>
            <Grid item>
              <Typography>Activities</Typography>
            </Grid>
            <Grid item>
              <Typography>Location</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Box display="flex">
        <Typography />
      </Box>
    </Container>
  );
}

Footer.defaultProps = {
  hideLinks: false,
};

export default Footer;
