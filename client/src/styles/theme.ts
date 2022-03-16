import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#5D33D5',
      light: '#C3C4FE',
    },
    background: {
      default: '#F8FAFC',
    },
    secondary: {
      main: '#F27956',
    },
    success: {
      main: '#2BBF57',
    },
    warning: {
      main: '#F5CE40',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      '-apple-system',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default Theme;
