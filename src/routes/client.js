import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsList from '../screens/client/ProductsList';

const Stack = createStackNavigator();

const Client = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductsList" component={ProductsList} />
    </Stack.Navigator>
  );
};

export default Client;
