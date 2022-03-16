import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function SearchBar() {
  return (
    <Paper
      elevation={0}
      sx={{
        position: 'absolute',
        bottom: { md: -48 },
        left: 0,
        right: 0,
        width: '80%',
        mx: 'auto',
        p: 1,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        height: 'auto',
        flexDirection: { xs: 'column', md: 'row' },
        borderRadius: 5,
        pb: 2,
      }}
    >
      <Box sx={{ mx: 1, flex: 1, width: { xs: '100%', md: 'auto' } }}>
        <Typography sx={{ my: 1 }}>Activity</Typography>
        <TextField size="small" InputLabelProps={{ shrink: false }} label="Choose a Category" select fullWidth placeholder="Choose a Category">
          <MenuItem>Work</MenuItem>
        </TextField>
      </Box>
      <Box sx={{ mx: 1, flex: 1, width: { xs: '100%', md: 'auto' } }}>
        <Typography sx={{ my: 1, flex: 1 }}>Date</Typography>
        <TextField size="small" fullWidth select placeholder="Enter an activity" />
      </Box>
      <Box sx={{ mx: 1, flex: 1, width: { xs: '100%', md: 'auto' } }}>
        <Typography sx={{ my: 1 }}>Location</Typography>
        <TextField size="small" fullWidth select placeholder="Search for location" />
      </Box>
      <Button
        variant="contained"
        sx={{
          my: { xs: 2, md: 0 },
          mx: 1,
          minHeight: '2.5rem',
          alignSelf: { md: 'flex-end' },
          width: { xs: '100%', md: 'auto' },
        }}
      >
        <SearchIcon />
        <Typography sx={{ ml: 1, display: { xs: 'block', md: 'none' } }}>Search</Typography>
      </Button>
    </Paper>
  );
}

export function SearchBarMobile() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '90%',
        mx: 'auto',
        mt: 4,
        p: 1,
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
        height: 'auto',
        flexDirection: { xs: 'column', md: 'row' },
        borderRadius: 5,
        pb: 2,
      }}
    >
      <Box sx={{ mx: 1, flex: 1, width: { xs: '100%', md: 'auto' } }}>
        <Typography sx={{ my: 1 }}>Activity</Typography>
        <TextField size="small" InputLabelProps={{ shrink: false }} label="Choose a Category" select fullWidth placeholder="Choose a Category">
          <MenuItem>Work</MenuItem>
        </TextField>
      </Box>
      <Box sx={{ mx: 1, flex: 1, width: { xs: '100%', md: 'auto' } }}>
        <Typography sx={{ my: 1, flex: 1 }}>Date</Typography>
        <TextField size="small" fullWidth select placeholder="Enter an activity" />
      </Box>
      <Box sx={{ mx: 1, flex: 1, width: { xs: '100%', md: 'auto' } }}>
        <Typography sx={{ my: 1 }}>Location</Typography>
        <TextField size="small" fullWidth select placeholder="Search for location" />
      </Box>
      <Button
        variant="contained"
        sx={{
          my: 2,
          mx: 1,
          minHeight: '2.5rem',
          width: '100%',
        }}
      >
        <SearchIcon />
        <Typography sx={{ ml: 1 }}>Search</Typography>
      </Button>
    </Paper>
  );
}

export default SearchBar;
