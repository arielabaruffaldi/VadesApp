import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CartStackNavigation from './Cart';
import CustomTabBar from '@organisms/CustomTabBar';
import ProfileStackNavigation from './Profile';
import FavouritesStackNavigation from './Favourites';
import HomeStackNavigation from './Home';
import SearchStackNavigation from './Search';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props: any) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Search" component={SearchStackNavigation} />
        <Tab.Screen name="Cart" component={CartStackNavigation} />
        <Tab.Screen name="Favourites" component={FavouritesStackNavigation} />
        <Tab.Screen name="Profile" component={ProfileStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
