import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsList from '../screens/client/ProductsList';
import Cart from '../screens/client/Cart';

const Stack = createStackNavigator();

const Client = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductsList" component={ProductsList} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default Client;
