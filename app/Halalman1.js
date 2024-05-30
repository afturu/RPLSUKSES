import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const onPressButton = () => {
    console.log('Button pressed ...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>Welcome to Dextera!</Text>
        <Text style={styles.subtitle}>
          Connect your financial life and unlock personalized financial services
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.appleButton} onPress={onPressButton}>
            <Text style={styles.appleButtonText}>Continue with Apple</Text>
            <Icon name="apple" size={20} color="#101213" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftColumn: {
    width: width * 0.5,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101213',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#101213',
    marginBottom: 20,
  },
  buttons: {
    alignItems: 'center',
  },
  appleButton: {
    width: 230,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#F1F4F8',
  },
  appleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#101213',
    marginRight: 10,
  },
  rightColumn: {
    width: width * 0.5,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default LoginScreen;