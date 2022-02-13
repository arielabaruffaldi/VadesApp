import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import BottomTabsNavigator from './BottomTab';
import LoginStackNavigation from './Auth';
import {useSelector} from 'react-redux';
import {RootState} from '@store/';

const AppNavigation = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  return (
    <NavigationContainer>
      {userId ? <BottomTabsNavigator /> : <LoginStackNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
