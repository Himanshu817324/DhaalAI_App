import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import RegisterScreen from '../../screens/auth/Register';
import OTPScreen from '../../screens/auth/OTP';
import type { AuthStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="OTP" component={OTPScreen} />
  </Stack.Navigator>
);

export default AuthStack;