import React from "react";
import { Theme, ThemeProvider as MUiThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "../global-styles";
import { defaultTheme } from "./default-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return (
    <MUiThemeProvider theme={theme}>
      <GlobalStyles>{children}</GlobalStyles>
    </MUiThemeProvider>
  );
};
