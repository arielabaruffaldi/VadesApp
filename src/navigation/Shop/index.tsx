import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EventDetail from '@screens/EventDetail';
import Home from '@screens/Home';
import Events from '@screens/Events';

import Categories from '@screens/Categories';

import HomeHeader from '@organisms/HomeHeader';
import EventDetailHeader from 'src/components/organisms/EventDetailHeader';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
      })}
      // screenOptions={{headerTitle: props => <Header {...props} />}}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: props => <HomeHeader {...props} />}}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={({route}: any) => ({title: route.params.name})}
      />
      <Stack.Screen name="EventDetail" component={EventDetail} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigation;
