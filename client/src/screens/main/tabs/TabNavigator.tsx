import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import InsuranceScreen from './Insurance';
import ClaimScreen from './Claim';
import DetectScreen from './Detect';
import ProfileScreen from '../common/Profile';
import TabBarIcon from '../../../components/molecules/TabBarIcon';
import { RouteProp } from '@react-navigation/native';
import { TabStackParamList } from '../../../types/navigation';

const Tab = createBottomTabNavigator<TabStackParamList>();

const getTabBarIcon =
  (route: RouteProp<TabStackParamList, keyof TabStackParamList>) =>
  ({ color, focused }: { color: string; focused: boolean }) => {
    let iconName: string = 'home';

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Insurance':
        iconName = 'shield-checkmark';
        break;
      case 'Claim':
        iconName = 'document-text';
        break;
      case 'Detect':
        iconName = 'search';
        break;
      case 'Profile':
        iconName = 'person';
        break;
    }

    return <TabBarIcon name={iconName} color={color} focused={focused} />;
  };

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#7F56D9',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#0A0A0A',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: getTabBarIcon(route),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Insurance" component={InsuranceScreen} />
      <Tab.Screen name="Claim" component={ClaimScreen} />
      <Tab.Screen name="Detect" component={DetectScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
