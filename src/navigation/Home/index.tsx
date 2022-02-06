import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EventDetail from '@screens/EventDetail';
import EventsFeed from '@screens/EventsFeed';
import Events from '@screens/Events';

import HomeHeader from '@organisms/HomeHeader';

const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="EventsFeed"
        component={EventsFeed}
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

export default HomeStackNavigation;
