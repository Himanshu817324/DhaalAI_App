import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../../../styles/home.styles';
import HomeScr from '../../../components/molecules/tabs/home';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeScr />
    </SafeAreaView>
  );
};

export default HomeScreen;
