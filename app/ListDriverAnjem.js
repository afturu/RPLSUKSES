import React, { useState, useEffect } from 'eact';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'eact-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/Black_White_Elegant_Monogram_Initial_Name_Logo_1.png')}
        style={styles.logo}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.push('Halaman1')}>
        <Text style={styles.createAccountButtonText}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Button pressed...')}>
        <Text style={styles.loginButtonText}>Log In</Text>
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
  logo: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  createAccountButton: {
    backgroundColor: '#17DAC4',
    padding: 12,
    borderRadius: 8,
    marginTop: 350,
  },
  createAccountButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Readex Pro',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 38,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#17DAC4',
    fontFamily: 'Readex Pro',
  },
});

export default HomePage;