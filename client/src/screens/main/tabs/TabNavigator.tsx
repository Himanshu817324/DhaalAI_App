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
import styles from '../../../styles/tabNavigator.styles';

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
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
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
