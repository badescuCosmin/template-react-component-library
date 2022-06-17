import { Components } from "@mui/material/styles";
import { colors } from "../theme";

export const MuiTextFieldTheme: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      borderRadius: "4px",
      [`.MuiInputLabel-root.MuiInputLabel-animated.MuiInputLabel-shrink.Mui-focused`]:
        {
          color: colors.black100,
        },
      [`.Mui-focused fieldset`]: {
        border: `1px solid ${colors.black100} !important`,
      },
      [`.MuiOutlinedInput-root.MuiInputBase-root`]: {
        backgroundColor: colors.white98,
      },
      [`.MuiOutlinedInput-root.MuiInputBase-root fieldset`]: {
        borderColor: colors.black70,
      },
      [`.MuiOutlinedInput-root.MuiInputBase-root.Mui-error fieldset`]: {
        borderColor: colors.red70,
      },
      [`.MuiOutlinedInput-input.MuiInputBase-input`]: {
        fontSize: "16px",
      },
      [`.MuiInputAdornment-root`]: {
        marginTop: "0 !important",
        width: "15px",
      },
      [`.MuiFilledInput-root`]: {
        backgroundColor: colors.white98,
        borderRadius: "4px",
        border: `1px solid ${colors.black20}`,
        paddingLeft: 0,
      },
      ".MuiFilledInput-root:hover, .MuiFilledInput-root.Mui-focused": {
        backgroundColor: colors.white98,
      },
      ".MuiFilledInput-root.Mui-focused": {
        borderColor: colors.black100,
      },
      [`.MuiIconButton-root`]: {
        position: "absolute",
        right: "13px",
      },
    },
  },
};
