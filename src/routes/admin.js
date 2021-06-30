import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddProduct from '../screens/admin/AddProduct';
import ProductsList from '../screens/client/ProductsList';

const Stack = createStackNavigator();

function Admin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="ProductsList" component={ProductsList} />
    </Stack.Navigator>
  );
}

export default Admin;
