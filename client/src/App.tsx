import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;