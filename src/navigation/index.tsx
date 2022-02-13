import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabsNavigator from './BottomTab';
import Login from '@screens/Auth/Login';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const [isAuth, setIsAuth] = useState(null)
  return (
    <NavigationContainer>
      {isAuth ? <BottomTabsNavigator /> : <Login />}
    </NavigationContainer>
  );
};

export default AppNavigation;
