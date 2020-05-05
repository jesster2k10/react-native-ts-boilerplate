/**
 * The global application theme used in the styled-components
 * ThemeProvider component
 */

import colors from './colors';
import metrics from './metrics';
import {lightFonts, darkFonts, families} from './fonts';
import rfs from './rfs';
import themeStyles from './styles';

export default {
  dark: {
    ...colors.dark,
    ...metrics,
    fonts: lightFonts,
    families,
    rfs,
    ...themeStyles.dark,
  },
  light: {
    ...colors.light,
    ...metrics,
    fonts: darkFonts,
    families: families,
    rfs,
    ...themeStyles.light,
  },
};
