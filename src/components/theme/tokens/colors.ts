export const colors = {
  black100: '#1C2A39',
  black70: '#5C6878',
  black50: '#7E8287',
  black40: '#B5B5B7',
  black20: '#C5C5C7',
  black10: '#D4D4D4',

  white100: '#FFFFFF',
  white98: '#FAFAFA',
  white95: '#F3F3F3',
  white92: '#EBEBEB',
  white89: '#E3E3E3',
  white80: '#F0EEF1',

  green100: '#22593F',
  green80: '#2E654B',
  green70: '#3B8160',
  green50: '#599C7C',
  green20: '#BDDECE',
  green10: '#CFE5DB',
  green5: '#f7fcf7',
  green200: '#32FC68',

  red100: '#BA311C',
  red80: '#C73822',
  red70: '#DA3D25',

  confirm: '#41A132',
  warning: '#ffa412',
  transparent: 'rgba(0, 0, 0, 0)',

  capabilitiesGreen: '#519d56',
  capabilitiesBlue: '#5987cc',
  capabilitiesYellow: '#d6a247',
  capabilitiesDefault: '#987dad',

  linkBlue: '#0044c9',

  disabled: '#b5b5b7',
};

export type ColorName = keyof typeof colors;
export type Colors = typeof colors;
