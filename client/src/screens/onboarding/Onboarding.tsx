import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ViewabilityConfig,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/navigation';
import styles from '../../styles/onboarding.styles';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface OnboardingItem {
  id: string;
  title: string;
  desc: string;
}

const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    title: 'CyberSecurity',
    desc: 'The Content is Important And Its safety is More Important',
  },
  {
    id: '2',
    title: 'Advanced Protection',
    desc: 'Secure your digital footprint with continuous monitoring and real-time threat detection',
  },
  {
    id: '3',
    title: 'Complete Security',
    desc: 'Get instant alerts for potential digital risks and comprehensive data protection',
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation<NavProp>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFinish = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('AuthStack', { screen: 'Login' });
    } catch (e) {
      console.error('Failed to save onboarding status.', e);
      navigation.replace('AuthStack', { screen: 'Login' });
    }
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<any> }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View style={styles.slideContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
      <View style={styles.iconContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/onboarding/onboarding2.png')}
            style={styles.onboardingImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {onboardingData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/onboarding/bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
        />
        <View style={styles.bottomContainer}>
          {renderPagination()}
          <TouchableOpacity style={styles.button} onPress={handleFinish}>
            <View style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
