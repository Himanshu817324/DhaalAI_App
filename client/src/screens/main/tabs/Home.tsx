import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScr from '../../../components/molecules/tabs/home';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeScr />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  }
});

export default HomeScreen;