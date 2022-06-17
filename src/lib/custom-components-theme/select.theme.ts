import { Components } from "@mui/material/styles";
import { colors } from "../theme";

export const MuiSelectTheme: Components["MuiSelect"] = {
  styleOverrides: {
    select: {
      padding: "0 6px",
      borderRadius: "4px",
      height: "24px",
      fontSize: "12px",
      border: `1px solid ${colors.black20}`,
      "&:focus": {
        border: `1px solid ${colors.black100}`,
      },
    },
  },
};
