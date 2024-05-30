import React, { useState, useEffect } from 'eact';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'eact-native';

const HomePage = () => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    // Initialize unfocus node (not needed in React Native)
  }, []);

  const handlePress = () => {
    // Handle press event for "Create an Account" button
    console.log('Create an Account button pressed');
  };

  const handleLoginPress = () => {
    // Handle press event for "Log In" button
    console.log('Log In button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/images/Black_White_Elegant_Monogram_Initial_Name_Logo_1.png')}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#17DAC4',
    padding: 10,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Readex Pro',
  },
});

export default HomePage;