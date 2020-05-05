import {useColorScheme} from 'react-native';
import {navigationStyles} from '../theme';

function useNavigationStyles() {
  const scheme = useColorScheme() || 'light';
  return navigationStyles[scheme];
}

export default useNavigationStyles;
