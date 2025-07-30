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
  StyleSheet,
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setOnboardingSeen } from '../../store/slices/authSlice';


interface OnboardingItem {
  id: string;
  title: string;
  desc: string;
}

const onboardingData: OnboardingItem[] = [
  { id: '1', title: 'CyberSecurity', desc: 'The Content is Important And Its safety is More Important' },
  { id: '2', title: 'Advanced Protection', desc: 'Secure your digital footprint with continuous monitoring' },
  { id: '3', title: 'Complete Security', desc: 'Get instant alerts for potential digital risks' },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const handleFinish = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      dispatch(setOnboardingSeen());
    } catch (e) {
      console.error('Failed to save onboarding status.', e);
    }
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<any> }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig: ViewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View style={styles.slideContainer}>
        <Image
          source={require('../../assets/images/onboarding/onboarding2.png')}
          style={styles.onboardingImage}
          resizeMode="contain"
        />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
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
        />
        <View style={styles.bottomContainer}>
          {renderPagination()}
          <TouchableOpacity style={styles.button} onPress={handleFinish}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// Add these styles to your onboarding.styles.ts or include them here
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: { flex: 1 },
    safeArea: { flex: 1 },
    slideContainer: {
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    onboardingImage: {
        width: width * 0.8,
        height: width * 0.8,
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
    dotActive: {
        backgroundColor: '#fff',
        width: 20,
    },
    dotInactive: {
        backgroundColor: '#666',
        width: 10,
    },
    button: {
        backgroundColor: '#7F56D9',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});