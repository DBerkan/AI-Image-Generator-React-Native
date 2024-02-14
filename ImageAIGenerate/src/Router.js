import axios from 'axios';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  function StackNavigator() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: true}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
