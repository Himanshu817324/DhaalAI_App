import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../../screens/tabs/tabNavigator';
import EditProfile from '../../screens/common/EditProfile';
import ClaimDetails from '../../screens/common/ClaimDetails';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ClaimDetails" component={ClaimDetails} />
    </Stack.Navigator>
  );
}
