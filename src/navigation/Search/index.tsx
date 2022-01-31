import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from '@screens/Search';

const Stack = createNativeStackNavigator();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={({route, navigation}) => ({
        headerShown: false, 
      })}>
      <Stack.Screen name="SearchScreen" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
