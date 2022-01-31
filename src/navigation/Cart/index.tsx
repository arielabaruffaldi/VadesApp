import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cart from '@screens/Cart';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={({route, navigation}) => ({
        headerShown: false, 
        // contentStyle: {backgroundColor: Colors.white}
      })}>
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStackNavigation;
