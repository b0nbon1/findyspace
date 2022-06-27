import { Box, Container, Button, Paper, Typography } from '@mui/material';
import React from 'react';

function AccountsLayout({ children }: any) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: { xs: 2, md: 4 },
        mx: 'auto',
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row' }}>
        <Box display="flex" flexDirection="column" sx={{ mr: 5 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: '700' }}>
            Settings
          </Typography>
          <Button>Account</Button>
          <Button>Notifications</Button>
          <Button>Password</Button>
          <Button>Payments</Button>
        </Box>
        <Paper sx={{ p: 5, flex: 1, mr: 0, minHeight: '85vh' }}>
          {children}
        </Paper>
      </Box>
    </Container>
  );
}

export default AccountsLayout;
