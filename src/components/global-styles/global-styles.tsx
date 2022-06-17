import React from "react";
import { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";

import "./fonts.css";

export const GlobalStyles = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
