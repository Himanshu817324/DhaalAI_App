import React from 'react';
import { Image, StyleSheet } from 'react-native';
import tabIconMap from '../../constants/tabIconMap';

type TabBarIconProps = {
  name: string;
  color: string;
  focused: boolean;
};

export default function TabBarIcon({ name, color, focused }: TabBarIconProps) {
  const iconKey = focused ? name : `${name}-outline`;
  const iconSource = tabIconMap[iconKey];

  return (
    <Image
      source={iconSource}
      style={[styles.icon, { tintColor: color }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
