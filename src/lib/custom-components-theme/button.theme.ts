import { Components } from "@mui/material/styles";
import { buttonClasses } from "@mui/material";
import { colors, elevations } from "../theme";

export const MuiButtonTheme: Components["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "26px",
      letterSpacing: "0.46px",
      padding: "5px 22px",
      borderRadius: "4px",
      [`&.${buttonClasses.disabled}`]: {
        color: colors.black40,
      },
    },
    endIcon: {
      marginLeft: "8px",
      marginRight: "-8px",
    },
    startIcon: {
      marginLeft: "-8px",
      marginRight: "8px",
    },
  },
  variants: [
    {
      props: {
        variant: "primary",
      },
      style: {
        boxShadow: elevations[1],
        color: colors.white100,
        backgroundColor: colors.green70,
        "&:hover": {
          backgroundColor: colors.green80,
          boxShadow: elevations[4],
        },
        "&:active": {
          backgroundColor: colors.green100,
          boxShadow: elevations[1],
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: colors.black10,
          boxShadow: "none",
        },
      },
    },
    {
      props: {
        variant: "secondary",
      },
      style: {
        color: colors.green70,
        backgroundColor: colors.transparent,
        boxShadow: "none",
        border: `1px solid ${colors.green70}`,
        "&:hover": {
          backgroundColor: colors.green10,
        },
        "&:active": {
          backgroundColor: colors.green20,
        },
        [`&.${buttonClasses.disabled}`]: {
          borderColor: colors.black40,
        },
      },
    },
    {
      props: {
        variant: "tertiary",
      },
      style: {
        paddingLeft: "11px",
        paddingRight: "11px",
        color: colors.green70,
        "&:hover": {
          backgroundColor: colors.green10,
        },
        "&:active": {
          backgroundColor: colors.green20,
        },
        [`&.${buttonClasses.disabled}`]: {
          borderColor: colors.black40,
        },
      },
    },
  ],
};
