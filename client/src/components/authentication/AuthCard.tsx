import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

interface AuthCardProp {
  open: boolean;
  handleClose(): void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function AuthCard({ open, handleClose }: AuthCardProp) {
  return (
    <Modal
      open={open}
      BackdropComponent={Backdrop}
      closeAfterTransition
      onClose={handleClose}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ my: 2 }}>
            <Typography>Email</Typography>
            <TextField fullWidth type="email" placeholder="Email" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography>Password</Typography>
            <TextField fullWidth type="password" placeholder="Password" />
          </Box>
          <Button fullWidth variant="contained">
            Sign Up
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default AuthCard;
