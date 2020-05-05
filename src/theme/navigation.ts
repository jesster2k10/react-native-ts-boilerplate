import colors from './colors';

/**
 * React-navigation related styles
 */
export default {
  light: {
    headerStyle: {
      backgroundColor: colors.light.header,
    },
    headerTitleStyle: {
      color: colors.light.headerText,
    },
    tabBarOptions: {
      style: {
        backgroundColor: colors.light.header,
      },
    },
  },
  dark: {
    headerStyle: {
      backgroundColor: colors.dark.header,
    },
    headerTitleStyle: {
      colors: colors.dark.headerText,
    },
    tabBarOptions: {
      style: {
        backgroundColor: colors.dark.header,
      },
    },
  },
};
