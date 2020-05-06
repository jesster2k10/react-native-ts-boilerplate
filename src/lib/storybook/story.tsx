/**
 * A simple component that to use for your storybook views that allows you to
 * use themed styled components. Centers the view.
 */

import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {useColorScheme} from 'react-native';
import applicationTheme from '@theme/application';

interface StoryProps {
  children: React.ReactNode;
}

const Story = ({children}: StoryProps) => {
  const scheme = useColorScheme() || 'light';
  const theme = applicationTheme[scheme];
  return (
    <ThemeProvider theme={theme}>
      <Center>{children}</Center>
    </ThemeProvider>
  );
};

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
  padding: ${({theme}) => theme.containerPadding}px;
`;

export default Story;
