import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

export default function LoginScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => dispatch(login({ email: 'test@example.com' }))} />
    </View>
  );
}
