import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lottie: {
    width: 300,
    height: 300,
  },
  image: {
    width: '80%',
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 15,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
