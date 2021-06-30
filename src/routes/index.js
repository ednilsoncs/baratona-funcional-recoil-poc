import React from 'react';
import AdminNavigation from './manager';
import ClientNavigation from './client';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Admin" component={AdminNavigation} />
        <Tab.Screen name="Cliente" component={ClientNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
