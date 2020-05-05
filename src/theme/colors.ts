/**
 * Base application colors
 * Feel free to remove the colors that don't suit the theme of your app.
 */
export const palette = {
  fuschia: '#ff236a',
  green: '#6DD400',
  darkGreen: '#55A302',
  aqua: '#008493',
  swampGreen: '#004343',
  deepDarkGreen: '#003939',
  brightGreen: '#E7FBEE',
  lightGreen: '#77E6B6',
  red: '#ff5151',
  yellow: '#ffc212',
  purple: 'rgb(134, 65, 244)',
  iosblue: '#147EFB',
  blue: '#2277F1',
  iosBlue: '#147EFB',
  darkBlue: '#0032FF',
  lightGrey: '#E5ECEC',
  sunset: '#F8F9D3',
  nightSky: '#1c2c41',
  eveningSky: '#2f4258',
  black: '#0e1111',
  deepBlack: 'rgb(0, 0, 0, 1)',
  lightBlack: 'rgb(22, 22, 22)',
  white: '#ffffff',
  lightRed: 'rgb(255,234,238)',
};

/**
 * Light mode colors.
 * The default colors applied
 */
export const lightColors = {
  backgroundInverted: palette.lightGrey,
  background: palette.white,
  headings: palette.black,
  headingsInverted: palette.black,
  text: palette.black,
  textInverted: palette.black,
  danger: palette.lightRed,
  dangerDark: palette.red,
  header: palette.white,
  headerText: palette.black,
  success: palette.green,
  accent: palette.sunset,
  accentInverted: palette.green,
  border: palette.lightGrey,
  caption: palette.sunset,
};

/**
 * Dark mode colors
 */
export const darkColors = {
  ...lightColors,
  background: palette.lightBlack,
  backgroundInverted: palette.lightBlack,
  headings: palette.white,
  headingsInverted: palette.white,
  text: palette.white,
  textInverted: palette.white,
  header: palette.lightBlack,
  headerText: palette.white,
  border: palette.deepBlack,
};

/**
 * Themed colors
 */
const colors = {
  ...lightColors,
  light: lightColors,
  dark: darkColors,
};

export default colors;
