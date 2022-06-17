import { Components } from '@mui/material/styles';
import { colors } from '../theme';

export const MuiDatePickerTheme: Components['MuiButtonBase'] = {
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

export const MuiFilledInputTheme: Components['MuiTextField'] = {
  styleOverrides: {
    root: {
      borderRadius: '4px',
      [`.MuiInputLabel-root.MuiInputLabel-animated.MuiInputLabel-shrink.Mui-focused`]: {
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
        fontSize: '16px',
      },
      [`.MuiInputAdornment-root`]: {
        marginTop: '0 !important',
        width: '15px',
      },
      [`.MuiFilledInput-root`]: {
        backgroundColor: colors.white98,
        borderRadius: '4px',
        border: `1px solid ${colors.black20}`,
        paddingLeft: 0,
      },
      '.MuiFilledInput-root:hover, .MuiFilledInput-root.Mui-focused': {
        backgroundColor: colors.white98,
      },
      '.MuiFilledInput-root.Mui-focused': {
        borderColor: colors.black100,
      },
      [`.MuiIconButton-root`]: {
        position: 'absolute',
        right: '13px',
      },
    },
  },
};

export const MuiFormLabelTheme: Components['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      fontSize: '14px',
      paddingTop: '2px',
      paddingLeft: '2px',
    },
  },
};

export const MuiSelectTheme: Components['MuiSelect'] = {
  styleOverrides: {
    select: {
      padding: '0 6px',
      borderRadius: '4px',
      height: '24px',
      fontSize: '12px',
      border: `1px solid ${colors.black20}`,
      '&:focus': {
        border: `1px solid ${colors.black100}`,
      },
    },
  },
};

export const MuiAutocompleteTheme: Components['MuiAutocomplete'] = {
  styleOverrides: {
    paper: {
      marginTop: '10px',
    },
    option: {
      '&:hover': {
        background: `${colors.green10} !important`,
      },
    },
    root: {
      [`.MuiOutlinedInput-root.MuiInputBase-root`]: {
        height: 48,
      },
      [`.MuiInputLabel-root`]: {
        marginTop: '-4px',
      },
      [`.MuiOutlinedInput-input.MuiInputBase-input `]: {
        padding: 0,
      },
    },
  },
};
