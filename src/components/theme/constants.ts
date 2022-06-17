export interface Constants {
  sidebarWidth: string;
  pageHeaderHeight: string;
  debounceInterval: number;
  formInputSize: {
    xSmall: string;
    small: string;
    large: string;
    xLarge: string;
  };
  snackbarErrorLocations: {
    VEHICLES: string;
    DRIVERS: string;
    PROVIDERS: string;
    CORPORATE_ACCOUNTS: string;
  };
}
const FORM_INPUT_SIZE = {
  xSmall: '127px',
  small: '240px',
  large: '496px',
  xLarge: '816px',
};
const SNACKBAR_ERROR_LOCATIONS = {
  VEHICLES: 'vehicles',
  DRIVERS: 'drivers',
  PROVIDERS: 'providers',
  CORPORATE_ACCOUNTS: 'corporateAccounts',
};
export const SIDEBAR_WIDTH = '80px';
export const PAGE_HEADER_HEIHGT = '54px';

const DEBOUNCE_INTERVAL = 250;

export const constants: Constants = {
  sidebarWidth: SIDEBAR_WIDTH,
  pageHeaderHeight: PAGE_HEADER_HEIHGT,
  debounceInterval: DEBOUNCE_INTERVAL,
  formInputSize: FORM_INPUT_SIZE,
  snackbarErrorLocations: SNACKBAR_ERROR_LOCATIONS,
};
