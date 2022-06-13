import React from 'react';
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Header } from "./components/header";
import { theme } from "./theme";
import { Teams } from "./components/team";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box mt={4} marginX={2}>
        <Teams />
      </Box>
    </ThemeProvider>
  );
};
