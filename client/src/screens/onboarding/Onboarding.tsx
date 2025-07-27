import React, { useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/onboardingStyles';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/navigation';

const SLIDER_WIDTH = Dimensions.get('window').width;

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const onboardingData = [
  {
    title: 'Cybersecurity Protection',
    desc: 'Safeguard your digital life with enhanced protection.',
    image: require('../../assets/images/onboarding/shield.jpg'),
  },
  {
    title: 'Protection',
    desc: 'Secure your digital footprint with continuous monitoring.',
    image: require('../../assets/images/onboarding/shield.jpg'),
  },
  {
    title: 'Secure Data Management',
    desc: 'Get instant alerts for potential digital risks.',
    image: require('../../assets/images/onboarding/shield.jpg'),
  },
];

const Onboarding = () => {
  const carouselRef = useRef(null);
  const navigation = useNavigation<NavProp>();

  const handleFinish = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.reset({
      index: 0,
      routes: [{ name: 'AuthStack' as keyof RootStackParamList }],
    });
  };

  const renderItem = ({ item, index }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
      {index === onboardingData.length - 1 && (
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={onboardingData}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        layout={'default'}
      />
    </View>
  );
};

export default Onboarding;
