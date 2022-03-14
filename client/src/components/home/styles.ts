import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainContainer = styled(Container)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  padding: '0',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));
