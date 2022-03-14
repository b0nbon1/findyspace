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
        bottom: -48,
        left: 0,
        right: 0,
        width: '80%',
        mx: 'auto',
        p: 1,
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
      }}
    >
      <Box sx={{ mx: 1, flex: 1 }}>
        <Typography sx={{ my: 1 }}>Activity</Typography>
        <TextField InputLabelProps={{ shrink: false }} label="Choose a Category" select fullWidth placeholder="Choose a Category">
          <MenuItem>Work</MenuItem>
        </TextField>
      </Box>
      <Box sx={{ mx: 1, flex: 1 }}>
        <Typography sx={{ my: 1, flex: 1 }}>Date</Typography>
        <TextField fullWidth select placeholder="Enter an activity" />
      </Box>
      <Box sx={{ mx: 1, flex: 1 }}>
        <Typography sx={{ my: 1 }}>Location</Typography>
        <TextField fullWidth select placeholder="Search for location" />
      </Box>
      <Button variant="contained" sx={{ mx: 1, minHeight: '3.5rem', alignSelf: 'flex-end' }}>
        <SearchIcon />
      </Button>
    </Paper>
  );
}

export default SearchBar;
