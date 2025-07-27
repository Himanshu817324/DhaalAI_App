import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../screens/main/tabs/TabNavigator';
import EditProfile from '../../screens/main/common/EditProfile';
import Information from '../../screens/main/common/Information';
import type { MainStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="Information" component={Information} />
  </Stack.Navigator>
);

export default MainStack;