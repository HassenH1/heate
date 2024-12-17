import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { type Theme } from "@mui/material";

// @todo fix this type issue 
const common: Omit<Theme, 'palette'> = {
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
}

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
  ...common
}))

const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#32ace2',
      main: '#0098DB',
      dark: '#0079af',
      // light: '#38476C',
      // main: '#071A48',
      // dark: '#051439',
      contrastText: '#fff',
    },
    secondary: {
      light: '#38476C',
      main: '#071A48',
      dark: '#051439',
      // light: '#32ace2',
      // main: '#0098DB',
      // dark: '#0079af',
      contrastText: '#fff',
    }
  },
  ...common,
}))

export { lightTheme, darkTheme }
