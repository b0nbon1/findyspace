/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#5D33D5',
      light: '#C3C4FE',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
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
    h1: {
      fontFamily: [
        '"Readex Pro"',
        '-apple-system',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    h2: {
      fontFamily: [
        '"Readex Pro"',
        '-apple-system',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    h3: {
      fontFamily: [
        '"Readex Pro"',
        '-apple-system',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    h4: {
      fontFamily: [
        '"Readex Pro"',
        '-apple-system',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    h5: {
      fontFamily: [
        '"Readex Pro"',
        '-apple-system',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    h6: {
      fontFamily: [
        '"Readex Pro"',
        '-apple-system',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
});

export default Theme;
