import React, { useEffect } from 'react';
import SplashScreen from '../screens/Splash';
import OnboardingStack from './onboarding/OnboardingStack';
import AuthStack from './auth/AuthStack';
import MainStack from './main/MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setInitialState } from '../store/slices/authSlice';


const RootNavigator = () => {
  const { hasSeenOnboarding, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const onboardingStatus = await AsyncStorage.getItem('hasSeenOnboarding');
        const loginStatus = await AsyncStorage.getItem('isLoggedIn');
        dispatch(setInitialState({
          hasSeenOnboarding: onboardingStatus === 'true',
          isLoggedIn: loginStatus === 'true',
        }));
      } catch (error) {
        console.error('Failed to load status from storage', error);
      }
    };

    checkStatus();
  }, [dispatch]);


  if (!hasSeenOnboarding && !isLoggedIn) {
      return <OnboardingStack />
  }

  if (hasSeenOnboarding && !isLoggedIn) {
      return <AuthStack/>
  }

  if (hasSeenOnboarding && isLoggedIn) {
      return <MainStack />
  }

  return <SplashScreen />;

};

export default RootNavigator;