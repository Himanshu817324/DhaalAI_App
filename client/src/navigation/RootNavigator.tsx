import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './onboarding/onboardingStack';
import AuthStack from './auth/authStack';
import MainStack from './main/mainStack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const RootStack = createNativeStackNavigator();

export default function Navigation() {
  const { isLoggedIn, hasSeenOnboarding } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!hasSeenOnboarding ? (
          <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
        ) : !isLoggedIn ? (
          <RootStack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <RootStack.Screen name="MainStack" component={MainStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}