import React from 'react';
import AdminNavigation from './admin';
import ClientNavigation from './client';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RecoilRoot} from 'recoil';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              color: '#fff',
            },
            tabStyle: {
              backgroundColor: '#001529',
            },
          }}>
          <Tab.Screen
            name="Admin"
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return <Icon name="account" color="#fff" size={30} />;
              },
            }}
            component={AdminNavigation}
          />
          <Tab.Screen
            name="Cliente"
            component={ClientNavigation}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return <Icon name="account" color="#fff" size={30} />;
              },
            }}
          />
        </Tab.Navigator>
      </RecoilRoot>
    </NavigationContainer>
  );
}

export default Router;
