import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D7BF78'
    },
    secondary: {
      main: '#3D5E78'
    },
    error: {
      main: '#B62321'
    },
    success: {
      main: '#A1A332'
    },
    info: {
      main: '#15509F'
    }
  },
  typography: {
    fontFamily: [
      'Rajdhani'
    ].join(',')
  }
})

export const colors = {
  typography: '#fefefe'
}
