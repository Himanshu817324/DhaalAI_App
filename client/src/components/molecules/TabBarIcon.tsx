// components/TabBarIcon.tsx
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type TabBarIconProps = {
  name: string;
  color: string;
  focused: boolean;
};

export default function TabBarIcon({ name, color, focused }: TabBarIconProps) {
  return (
    <Icon
      name={focused ? name : `${name}-outline`}
      size={24}
      color={color}
    />
  );
}
