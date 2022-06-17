import { Components } from "@mui/material/styles";

export const MuiIconButtonTheme: Components["MuiIconButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      padding: "0",
    },
  },
};
