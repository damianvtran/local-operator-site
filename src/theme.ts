import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a1a1a',
      dark: '#121212',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#81C784',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          borderBottom: '1px solid #333333',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          borderColor: '#ffffff',
        },
        outlined: {
          borderColor: '#ffffff',
          '&:hover': {
            borderColor: '#4CAF50',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #333333',
        },
      },
    },
  },
});

export default theme;