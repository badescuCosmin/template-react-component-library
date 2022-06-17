import { ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonPropsBase = Omit<
  MuiButtonProps,
  | 'color'
  | 'size'
  | 'variant'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'centerRipple'
  | 'focusRipple'
  | 'disableFocusRipple'
  | 'TouchRippleProps'
  | 'disableElevation'
>;
