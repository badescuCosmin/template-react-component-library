import { Components } from "@mui/material/styles";
import { colors } from "../theme";

export const MuiButtonBaseTheme: Components["MuiButtonBase"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      [`&.MuiPickersDay-root.Mui-selected`]: {
        backgroundColor: `${colors.green100} !important`,
      },
    },
  },
};
