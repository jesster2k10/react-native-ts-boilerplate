import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '../../src/theme/application';

/**
 * Wraps a component in a ThemeProvider to allow testing
 * themed styled components
 */

interface MockedComponentProps {
  Component: any;
}

const MockedComponent = ({Component}: MockedComponentProps) => {
  return (
    <ThemeProvider theme={theme.light}>
      <Component />
    </ThemeProvider>
  );
};

export default MockedComponent;
