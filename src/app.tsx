import '@lib/setup';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';
import theme from './theme/application';
import RootNavigator from './navigation/navigators/root';
import {navigationRef} from './services/navigation';

const App = () => {
  const scheme = useColorScheme() || 'light';
  const appTheme = theme[scheme] || theme.light;

  return (
    <ThemeProvider theme={appTheme}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
