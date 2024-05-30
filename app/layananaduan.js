import React, { useState, useEffect } from 'eact';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'eact-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomePage = () => {
  const [focused, setFocused] = useState(false);

  const handlePress = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} onBlur={handleBlur}>
        <Image
          source={require('./assets/images/Black_White_Elegant_Monogram_Initial_Name_Logo_1.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Halaman1')}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed...')}>
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
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#4B39EF',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Halaman1" component={Halaman1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;