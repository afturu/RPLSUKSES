import React, { useState, useEffect } from 'eact';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'eact-native';

const Aftersubmit = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Close button pressed')}>
          <Image source={require('./close-icon.png')} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Animated.View
          style={{
            opacity: animation,
            transform: [{ scale: animation }],
          }}
        >
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Image source={require('./check-icon.png')} style={styles.checkIcon} />
            </View>
          </View>
        </Animated.View>
        <Animated.Text
          style={{
            opacity: animation,
            transform: [{ scale: animation }],
          }}
        >
          Submit Complete!
        </Animated.Text>
        <Text>
          Terima kasih sudah order! Nantikan pesananmu ya
        </Text>
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => console.log('Chat Driver button pressed')}>
          <Text>Chat Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Tracking Order button pressed')}>
          <Text>Tracking Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  content: {
    padding: 16,
  },
  circleContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#4C39D2C0',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#39D2C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 64,
    height: 64,
  },
  divider: {
    height: 16,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
});

export default Aftersubmit;