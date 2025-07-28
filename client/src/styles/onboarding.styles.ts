import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  slideContainer: {
    width,
    alignItems: 'center',
    paddingHorizontal: width * 0.08,
    justifyContent: 'center',
    paddingTop: height * 0.1,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
    letterSpacing: 1,
  },
  description: {
    fontSize: width * 0.04,
    textAlign: 'center',
    color: '#B8C5D6',
    paddingHorizontal: width * 0.05,
    lineHeight: width * 0.055,
    marginBottom: height * 0.06,
  },
  iconContainer: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  onboardingImage: {
    width,
    height: height * 0.4,
    top: -height * 0.06,
    resizeMode: 'contain',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: height * 0.05,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.04,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#4C6EF5',
    shadowColor: '#4C6EF5',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  dotInactive: {
    width: 8,
    backgroundColor: '#374151',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#4C6EF5',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
  buttonGradient: {
    paddingHorizontal: width * 0.15,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C6EF5',
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: width * 0.045,
    letterSpacing: 0.5,
  },
});

export default styles;
