import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Proof from './Proof';
import Screen from './Screen';
import Home from './Home';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen" component={Screen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}