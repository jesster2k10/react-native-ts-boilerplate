import theme from '../../theme/application';

type ThemeInterface = typeof theme['dark'] & typeof theme['light'];

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
