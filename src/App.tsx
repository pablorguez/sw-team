import React from 'react';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/header';
import { theme } from './theme';
import { Team } from './components/team';

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Team />
    </ThemeProvider>
  )
}
