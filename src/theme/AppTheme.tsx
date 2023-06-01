import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactChild } from "react";
import { purpleTheme } from './';
export const AppTheme = ( {children}:  {children:ReactChild} ) => (
  <ThemeProvider theme={purpleTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
