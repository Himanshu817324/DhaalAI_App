import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { TabStackParamList } from '../../../types/navigation';
import { tabIconMap } from '../../../constants/iconMap';
import HomeScreen from './Home';
import HistoryScreen from './History';
import ShareScreen from './Share';
import SettingScreen from './Stories';

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#7F56D9',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#18181B', borderTopColor: '#333' },
        tabBarIcon: ({ color }) => {
          const iconName = route.name.toLowerCase();
          return (
            <Image
              source={tabIconMap[iconName]}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}