import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cart from '@screens/Cart';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStackNavigation;
