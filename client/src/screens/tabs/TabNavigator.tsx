import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import InsuranceScreen from './Insurance';
import ClaimScreen from './Claim';
import DetectScreen from './Detect';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Insurance" component={InsuranceScreen} />
      <Tab.Screen name="Claim" component={ClaimScreen} />
      <Tab.Screen name="Detect" component={DetectScreen} />
    </Tab.Navigator>
  );
}