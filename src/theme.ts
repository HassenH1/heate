import green from '@mui/material/colors/green';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#38476C',
      main: '#071A48',
      dark: '#051439',
      contrastText: '#fff',
    },
    secondary: {
      light: '#32ace2',
      main: '#0098DB',
      dark: '#0079af',
      contrastText: '#fff',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: 'forestgreen',
          }
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px inset",
            // "-webkit-box-shadow": "0 0 0 100px inset",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: green[800]
          }
        }
      }
    }
  },
  shape: { borderRadius: 3 },
}))

const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#32ace2',
      main: '#0098DB',
      dark: '#0079af',
      contrastText: '#fff',
    },
    secondary: {
      light: '#38476C',
      main: '#071A48',
      dark: '#051439',
      contrastText: '#fff',
    },
    background: {
      default: "#FAFAFA"
    },
    text: { primary: '#333333' }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: 'forestgreen',
          }
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: 'secondary'
      }
    }
  },
  shape: { borderRadius: 3 },
}))

export { lightTheme, darkTheme }
