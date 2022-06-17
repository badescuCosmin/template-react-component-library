import { Components } from "@mui/material/styles";
import { colors } from "../theme";

export const MuiAutocompleteTheme: Components["MuiAutocomplete"] = {
  styleOverrides: {
    paper: {
      marginTop: "10px",
    },
    option: {
      "&:hover": {
        background: `${colors.green10} !important`,
      },
    },
    root: {
      [`.MuiOutlinedInput-root.MuiInputBase-root`]: {
        height: 48,
      },
      [`.MuiInputLabel-root`]: {
        marginTop: "-4px",
      },
      [`.MuiOutlinedInput-input.MuiInputBase-input `]: {
        padding: 0,
      },
    },
  },
};
