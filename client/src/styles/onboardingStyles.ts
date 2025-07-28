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
  buttonContainer: {
    position: 'absolute', // Position it over the FlatList
    bottom: 50,           // 50 pixels from the bottom
    width: '100%',        // Take up the full width to center the button
    alignItems: 'center', // Center the button horizontally
  },
  button: {
    backgroundColor: '#007AFF', // Example background color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
