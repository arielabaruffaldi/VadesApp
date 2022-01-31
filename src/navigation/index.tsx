import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopStackNavigation from './Shop';
import CartStackNavigation from './Cart';

const BottomTab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Shop">
        <BottomTab.Screen name="Shop" component={ShopStackNavigation} />
        <BottomTab.Screen name="Cart" component={CartStackNavigation} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
