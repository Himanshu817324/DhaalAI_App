import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../../screens/main/tabs/TabNavigator';
// import EditProfile from '../../screens/main/common/Profile';
import type { MainStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={TabNavigator} />
    {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
  </Stack.Navigator>
);

export default MainStack;