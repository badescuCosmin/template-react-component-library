import { Colors } from './tokens/colors';
import { Elevations } from './tokens/elevations';
import { Constants } from './constants';

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors;
    elevations: Elevations;
    constants: Constants;
  }

  interface ThemeOptions {
    colors: Colors;
    elevations: Elevations;
    constants: Constants;
  }

  interface TypographyVariants {
    p0: React.CSSProperties;
    p1: React.CSSProperties;
    technicalText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    p0?: React.CSSProperties;
    p1?: React.CSSProperties;
    technicalText?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p0: true;
    p1: true;
    technicalText: true;
    body1: false;
    body2: false;
    caption: false;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    contained: false;
    outlined: false;
    text: false;
    primary: true;
    secondary: true;
    tertiary: true;
  }
}
