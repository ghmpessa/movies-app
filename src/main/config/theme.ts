import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#AB2F2E',
      light: '#B54E4D',
      dark: '#320000',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#949494',
    },
    background: {
      default: '#171717',
      paper: '#111111',
    },
    text: {},
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", sans-serif',
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    button: {
      fontWeight: 600,
    },
  },
})
