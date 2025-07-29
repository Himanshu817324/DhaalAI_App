import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#0A0A0A',
    borderTopWidth: 0,
    height: Platform.OS === 'ios' ? height * 0.1 : height * 0.085,
    paddingBottom: Platform.OS === 'ios' ? 10 : 8,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
});
