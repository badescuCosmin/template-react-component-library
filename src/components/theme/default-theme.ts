import { createTheme } from "@mui/material/styles";
import { colors } from "./tokens/colors";
import { typography } from "./tokens/typography";
import { elevations } from "./tokens/elevations";
import { MuiButtonTheme } from "../button";
import { MuiIconTheme } from "../icon";
import { constants } from "./constants";
import { MuiCssBaselineTheme } from "../global-styles";
import {
  MuiDatePickerTheme,
  MuiFilledInputTheme,
  MuiFormLabelTheme,
  MuiSelectTheme,
  MuiAutocompleteTheme,
} from "../withLabelInput";

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
    MuiSvgIcon: MuiIconTheme,
    MuiCssBaseline: MuiCssBaselineTheme,
    MuiTextField: MuiFilledInputTheme,
    MuiButtonBase: MuiDatePickerTheme,
    MuiFormLabel: MuiFormLabelTheme,
    MuiSelect: MuiSelectTheme,
    MuiAutocomplete: MuiAutocompleteTheme,
  },
  constants,
});
