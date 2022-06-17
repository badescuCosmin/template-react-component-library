import { Components } from '@mui/material/styles';
import { colors } from '../theme';

export const MuiCssBaselineTheme: Components['MuiCssBaseline'] = {
  styleOverrides: {
    body: {
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      backgroundColor: colors.white89,
      color: colors.black100,
    },
    a: {
      textDecoration: 'none',
    },
  },
};
