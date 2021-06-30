import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddProduct from '../screens/admin/AddProduct';
import ProductsList from '../screens/admin/ProductsList';

const Stack = createStackNavigator();

function Admin() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductsList" component={ProductsList} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
}

export default Admin;
