/**
 * @format
 */

import 'react-native-gesture-handler'; // This MUST be the first line.
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);