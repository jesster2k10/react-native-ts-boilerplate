import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import useNavigationStyles from '../use-navigation-styles';
import routes from '../routes';
import Home from '../../views/home/home';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {headerStyle, headerTitleStyle} = useNavigationStyles();
  const screenOptions = {
    headerStyle,
    headerTitleStyle,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.home} component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
