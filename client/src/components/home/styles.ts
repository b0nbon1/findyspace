import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainContainer = styled(Container)(() => ({
  backgroundRepeat: 'no-repeat',
  padding: '0',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const Img = styled('img')({});
