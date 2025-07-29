import {NavigatorScreenParams} from '@react-navigation/native';

// -------- Onboarding Stack --------
export type OnboardingStackParamList = {
  Onboarding: undefined;
};

// -------- Auth Stack --------
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  OTP: { phNo: string };
};

// -------- Tab Stack (Main Tabs) --------
export type TabStackParamList = {
  Home: undefined;
  History: undefined;
  Share: undefined;
  Setting: undefined;
};

// -------- Main Stack --------
export type MainStackParamList = {
  Tabs: NavigatorScreenParams<TabStackParamList>;
  EditProfile: undefined;
  Information: undefined;
};

// -------- Root Stack --------
export type RootStackParamList = {
  Splash: undefined;
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainStack: NavigatorScreenParams<MainStackParamList>;
  NotFound: undefined;
};
