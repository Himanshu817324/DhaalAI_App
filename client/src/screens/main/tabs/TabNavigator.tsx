import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import TabBarIcon from '../../../components/atoms/TabBarIcon';
import { RouteProp } from '@react-navigation/native';
import { TabStackParamList } from '../../../types/navigation';
import styles from '../../../styles/tabNavigator.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryScreen from './History';
import ShareScreen from './Share';
import StoriesScreen from './Stories';

const Tab = createBottomTabNavigator<TabStackParamList>();

const routeIconMap: Record<keyof TabStackParamList, string> = {
  Home: 'home',
  History: 'history',
  Share: 'share',
  Setting: 'setting',
};

const getTabBarIcon =
  (route: RouteProp<TabStackParamList, keyof TabStackParamList>) =>
  ({ color, focused }: { color: string; focused: boolean }) => {
    const iconName = routeIconMap[route.name];
    return <TabBarIcon name={iconName} color={color} focused={focused} />;
  };


export default function TabNavigator() {
  return (
    <SafeAreaView style={styles.safeArea}>
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
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
        <Tab.Screen name="Setting" component={StoriesScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
