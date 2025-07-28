import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../../../styles/home.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
