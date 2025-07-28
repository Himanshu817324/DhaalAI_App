// RootNavigator.tsx
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import OnboardingStack from './onboarding/OnboardingStack';
import AuthStack from './auth/AuthStack';
import MainStack from './main/MainStack';
import type { RootStackParamList } from '../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('Splash');

  useEffect(() => {
    const checkInitialRoute = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
        
        if (!hasSeenOnboarding) {
          setInitialRoute('OnboardingStack');
        } else {
          setInitialRoute('AuthStack');
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setInitialRoute('OnboardingStack');
      } finally {
        setIsLoading(false);
      }
    };

    checkInitialRoute();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator 
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;