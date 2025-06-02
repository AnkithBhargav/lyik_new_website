
export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
      light: '#D3A4FF',
      dark: '#9F63FF',
      contrastText: '#000000',
    },
    secondary: {
      main: '#03DAC6',
      light: '#33E1D1',
      dark: '#018786',
      contrastText: '#000000',
    },
    error: {
      main: '#CF6679',
      light: '#DA7F8F',
      dark: '#B54B5B',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFC571',
      dark: '#F59905',
    },
    info: {
      main: '#64B5F6',
      light: '#83C3F7',
      dark: '#0A7FD9',
    },
    success: {
      main: '#81C784',
      light: '#97D199',
      dark: '#4CAF50',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#ABABAB',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
        contained: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
};