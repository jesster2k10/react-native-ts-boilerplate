import {Platform} from 'react-native';
import rfs from './rfs';
import colors from './colors';

/**
 * An object of common font families.
 * Change this to update fonts for the entire application
 */
export const families = {
  regular: Platform.select({
    ios: 'Avenir-Book',
    android: 'sans-serif',
  }),
  medium: Platform.select({
    ios: 'Avenir-Medium',
    android: 'sans-serif-medium',
  }),
  bold: Platform.select({
    ios: 'Avenir-Bold',
    android: 'sans-serif',
  }),
};

/**
 * An object of common font sizes.
 * Uses a responsive font scale helper function
 */
export const sizes = {
  body: rfs(14),
  small: rfs(12),
  caption: rfs(12),
  navigation: rfs(18),
  heading: rfs(24),
  title: rfs(20),
  button: rfs(16),
};

/**
 * An object of common font styles.
 */
export const styles = {
  body: {
    fontFamily: families.regular,
    color: colors.text,
  },
  title: {
    fontFamily: families.bold,
    color: colors.headings,
  },
};

/**
 * Typography styles used throughout the application.
 * Any changes here will reflect all text.
 */
export const lightFonts = {
  body: {
    ...styles.body,
    fontSize: sizes.body,
  },
  paragraph: {
    ...styles.body,
    fontSize: sizes.body,
    lineHeight: 22,
  },
  bold: {
    ...styles.body,
    fontFamily: families.bold,
    fontSize: sizes.body,
  },
  boldTitle: {
    ...styles.title,
    fontFamily: families.bold,
    fontSize: sizes.body,
  },
  boldSmall: {
    ...styles.body,
    fontFamily: families.bold,
    fontSize: sizes.small,
  },
  medium: {
    ...styles.body,
    fontFamily: families.medium,
    fontSize: sizes.body,
  },
  caption: {
    ...styles.body,
    fontFamily: families.regular,
    marginTop: 5,
    fontSize: sizes.caption,
    color: colors.caption,
  },
  captionUppercase: {
    ...styles.body,
    fontFamily: families.medium,
    fontSize: sizes.caption,
    color: colors.caption,
    textTransform: 'uppercase',
  },
  small: {
    ...styles.body,
    fontSize: sizes.small,
  },
  smallTitle: {
    ...styles.title,
    fontFamily: families.medium,
    fontSize: sizes.body,
  },
  heading: {
    ...styles.title,
    fontSize: sizes.heading,
    lineHeight: sizes.heading * 1.5,
  },
  title: {
    ...styles.title,
    fontSize: sizes.title,
  },
  navigation: {
    ...styles.title,
    fontSize: 17,
    fontFamily: families.bold,
  },
};

/**
 * Returns the above object with all the colors changed to the dark text color
 * defined in the colors.ts file.
 */
export const darkFonts = Object.entries(lightFonts).reduce(
  (initial: any, [key, value]) => {
    return {
      ...initial,
      [key]: {
        ...value,
        color: colors.dark.text,
      },
    };
  },
  {},
);

export default {
  ...lightFonts,
  light: lightFonts,
  dark: darkFonts,
};
