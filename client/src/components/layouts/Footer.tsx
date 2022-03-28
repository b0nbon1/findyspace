import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FindySpaceLogo from './FindySpaceLogo';

export interface FooterProps {
  hideLinks?: boolean | undefined;
}

function Footer({ hideLinks }: FooterProps) {
  return (
    <Container>
      {!hideLinks && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <FindySpaceLogo />
          </Box>
          <Box>
            <Grid container spacing={2}>
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
          </Box>
        </Box>
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
