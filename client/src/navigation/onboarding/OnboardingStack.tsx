import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../types/navigation';
import Onboarding from '../../screens/onboarding/Onboarding';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

export default OnboardingStack;
