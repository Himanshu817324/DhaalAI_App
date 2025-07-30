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
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';

const imagePaths = {
  background: require('../../assets/images/login/bg.png'),
  logo: require('../../assets/images/login/login-illustration.png'),
  googleIcon: require('../../assets/icons/google.png'),
  facebookIcon: require('../../assets/icons/facebook.png'),
};

export default function LoginScreen() {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const user = { name: 'Tushar Singh' }; // Example user data
      await AsyncStorage.setItem('isLoggedIn', 'true');
      dispatch(login(user)); // ✅ Dispatch action
    } catch (e) {
      console.error('Failed to save login status.', e);
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
          <Image source={imagePaths.logo} style={styles.logo} />
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login With Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor="#6a6a6a"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={imagePaths.googleIcon} style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Login With Google</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

// Add these styles to your login.styles.ts or include them here
const styles = StyleSheet.create({
    backgroundContainer: { flex: 1 },
    safeArea: { flex: 1 },
    container: { flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 20 },
    logo: { width: 250, height: 250, resizeMode: 'contain', marginTop: 20 },
    formContainer: { width: '100%', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10, padding: 20 },
    title: { fontSize: 22, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', borderRadius: 5, paddingHorizontal: 10 },
    input: { flex: 1, color: '#fff', height: 50 },
    verifyText: { color: '#7F56D9', fontWeight: 'bold' },
    orText: { color: '#aaa', textAlign: 'center', marginVertical: 15 },
    socialButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 5, marginBottom: 10 },
    socialIcon: { width: 20, height: 20, marginRight: 15 },
    socialButtonText: { color: '#000', fontWeight: '600' },
    submitButton: { width: '100%', backgroundColor: '#7F56D9', padding: 15, borderRadius: 5, alignItems: 'center', marginVertical: 20 },
    submitButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});