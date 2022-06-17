import React from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonPropsBase, ButtonVariant } from "./button.types";

interface ButtonProps extends ButtonPropsBase {
  variant?: ButtonVariant;
}

export const Button = React.memo(
  ({ variant = "primary", children, ...restProps }: ButtonProps) => (
    <MuiButton {...restProps} size="medium" variant={variant}>
      {children}
    </MuiButton>
  )
);
