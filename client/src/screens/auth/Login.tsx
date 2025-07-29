import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles from '../../styles/login.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const imagePaths = {
  background: require('../../assets/images/login/bg.png'),
  logo: require('../../assets/images/login/login-illustration.png'),
  googleIcon: require('../../assets/icons/google.png'),
  facebookIcon: require('../../assets/icons/facebook.png'),
};
type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<NavProp>();

  const handleSubmit = async () => {
  try {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    await AsyncStorage.setItem('isLoggedIn', 'true');

    navigation.replace('MainStack', {
      screen: 'Tabs',
      params: { screen: 'Home', params: undefined },
    });
  } catch (e) {
    console.error('Failed to save login status.', e);
    navigation.replace('AuthStack', { screen: 'Login' });
  }
};

  return (
    <ImageBackground
      source={imagePaths.background}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          {/* Top Illustration */}
          <Image source={imagePaths.logo} style={styles.logo} />

          {/* Login Form Container */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login With Email</Text>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor="#6a6a6a"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TouchableOpacity>
                <Text style={styles.verifyText}>Verify</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.orText}>or</Text>

            {/* Social Logins */}
            <TouchableOpacity style={styles.socialButton}>
              <Image source={imagePaths.googleIcon} style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Login With Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={imagePaths.facebookIcon}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Login With FaceBook</Text>
            </TouchableOpacity>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
