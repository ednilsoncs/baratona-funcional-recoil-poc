import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsList from '../screens/client/ProductsList';

const Stack = createStackNavigator();

function Client() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsList" component={ProductsList} />
    </Stack.Navigator>
  );
}

export default Client;
