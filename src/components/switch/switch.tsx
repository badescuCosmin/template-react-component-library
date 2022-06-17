import React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SwitchProps } from "@mui/material/Switch";
import { Switch as MuiSwitch } from "@mui/material";
import { MuiSwitchProps } from "./switch.types";
import { AddContactActiveIcon } from "../icons";

const IOSSwitch = styled((props: SwitchProps) => (
  <MuiSwitch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 49,
  height: 26,
  padding: 0,
  paddingLeft: 3,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transform: "translateX(3px)",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(23px)",
      color: theme.colors.white100,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.colors.green70,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: `6px solid ${theme.colors.white100}`,
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.colors.black40,
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const Switch = ({ isChecked, label, onChange, sx }: MuiSwitchProps) => (
  <>
    <AddContactActiveIcon />
    <FormControlLabel
      control={
        <IOSSwitch
          sx={{ m: 1 }}
          checked={isChecked}
          onChange={(e) => onChange(e)}
        />
      }
      label={label}
      sx={{ display: "inline", ...sx }}
    />
  </>
);
