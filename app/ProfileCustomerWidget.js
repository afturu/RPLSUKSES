import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Rating } from 'react-native-elements';
import GradientText from 'react-native-gradient-text';

import profileCustomerModel from './profile_customer_model';

const ProfileCustomerWidget = () => {
  const [ratingBarValue, setRatingBarValue] = useState(4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.name}>David Jerome</Text>
          <GradientText
            style={styles.email}
            colors={['#4B39EF', '#EE8B60']}
            text={`David.j@gmail.com`}
          />
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={24}
          startingValue={ratingBarValue}
          onFinishRating={(value) => setRatingBarValue(value)}
          style={styles.rating}
        />
        <Text style={styles.ratingText}>Rating</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Informasi Driver</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoText}>Phone Number : 087654323423</Text>
            <Text style={styles.infoText}>Male</Text>
            <Text style={styles.infoText}>Range Fee : 10%</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Text style={styles.statsValue}>152</Text>
            <Text style={styles.statsLabel}>Total Order</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    marginTop: 4,
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  rating: {
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoContent: {
    marginLeft: 16,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statsItem: {
    alignItems: 'center',
  },
  statsValue: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4B39EF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileCustomerWidget;