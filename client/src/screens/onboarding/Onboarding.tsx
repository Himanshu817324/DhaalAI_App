import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ViewabilityConfig,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/navigation'; // Assuming this type path is correct for your project

const { width } = Dimensions.get('window');

// --- Define Navigation and Data Types ---

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface OnboardingItem {
  id: string;
  title: string;
  desc: string;
  image: any;
}

// --- Content from the second example ---
const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    title: 'Cybersecurity Protection',
    desc: 'Safeguard your digital life with enhanced protection.',
    image: require('../../assets/images/onboarding/shield.jpg'), // Update with your image path
  },
  {
    id: '2',
    title: 'Continuous Protection',
    desc: 'Secure your digital footprint with continuous monitoring.',
    image: require('../../assets/images/onboarding/shield.jpg'), // Update with your image path
  },
  {
    id: '3',
    title: 'Secure Data Management',
    desc: 'Get instant alerts for potential digital risks.',
    image: require('../../assets/images/onboarding/shield.jpg'), // Update with your image path
  },
];

// --- The Combined Component ---

export default function OnboardingScreen() {
  const navigation = useNavigation<NavProp>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic from the second example to finish onboarding and navigate
  const handleFinish = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      });
    } catch (e) {
      console.error('Failed to save onboarding status.', e);
    }
  };

  // Logic from the second example for efficient slide tracking
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<any> }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  // --- Render Functions ---

  const renderItem = ({ item }: { item: OnboardingItem }) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    );
  };

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
      />

      <View style={styles.bottomContainer}>
        {renderPagination()}
        <View style={styles.buttonWrapper}>
          {currentIndex === onboardingData.length - 1 && (
            <TouchableOpacity style={styles.button} onPress={handleFinish}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

// --- StyleSheet for Styling ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideContainer: {
    width: width,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '55%',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6B7280', // gray-500
    paddingHorizontal: 20,
    lineHeight: 28,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 20,
    backgroundColor: '#3ED3A3',
  },
  dotInactive: {
    width: 8,
    backgroundColor: '#D1D5DB', // gray-300
  },
  // Wrapper ensures button appearance doesn't cause layout shift
  buttonWrapper: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3ED3A3',
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderRadius: 30,
    // Shadow properties from the first example
    elevation: 10,
    shadowColor: '#3ED3A3',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});