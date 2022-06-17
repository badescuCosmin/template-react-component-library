import { createTheme } from "@mui/material/styles";
import { colors } from "./tokens/colors";
import { typography } from "./tokens/typography";
import { elevations } from "./tokens/elevations";
import { constants } from "./constants";
import {
  MuiAutocompleteTheme,
  MuiSelectTheme,
  MuiFormLabelTheme,
  MuiButtonBaseTheme,
  MuiTextFieldTheme,
  MuiBaselineTheme,
  MuiSvgIconTheme,
  MuiButtonTheme,
  MuiIconButtonTheme,
} from "../custom-components-theme";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.green100,
    },
  },
  colors,
  typography,
  elevations,
  components: {
    MuiButton: MuiButtonTheme,
    MuiSvgIcon: MuiSvgIconTheme,
    MuiCssBaseline: MuiBaselineTheme,
    MuiTextField: MuiTextFieldTheme,
    MuiButtonBase: MuiButtonBaseTheme,
    MuiFormLabel: MuiFormLabelTheme,
    MuiSelect: MuiSelectTheme,
    MuiAutocomplete: MuiAutocompleteTheme,
    MuiIconButton: MuiIconButtonTheme,
  },
  constants,
});
