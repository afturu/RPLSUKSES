import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import { GradientText } from 'react-native-gradient-text-pro';

const ProfileDriver = () => {
  const [rating, setRating] = useState(4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('./assets/images/arrow-back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile Driver</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60' }} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>David Jerome</Text>
            <GradientText style={styles.email}>
              David.j@gmail.com
              <Gradient colors={['#4B39EF', '#EE8B60']} />
            </GradientText>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={24}
            ratingColor="#39D2C0"
            startingValue={rating}
            onFinishRating={(value) => setRating(value)}
          />
          <Text style={styles.ratingText}>Rating</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <Text style={styles.infoValue}>087654323423</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Male</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Range Fee</Text>
            <Text style={styles.infoValue}>10%</Text>
          </View>
        </View>
        <View style={styles.orderContainer}>
          <View style={styles.orderItem}>
            <Text style={styles.orderLabel}>Total Order</Text>
            <Text style={styles.orderValue}>152</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.chatButton} onPress={() => console.log('Button pressed ...')}>
          <Text style={styles.chatText}>Chat</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F1F4F8',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  backButton: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 12,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E3338',
    marginLeft: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileDetails: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E3338',
  },
  email: {
    fontSize: 16,
    color: '#8D949E',
    marginTop: 4,
  },
  ratingContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8D949E',
    marginTop: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8D949E',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E3338',
  },
  orderContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  orderItem: {
    alignItems: 'center',
  },
  orderLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8D949E',
  },
  orderValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E3338',
  },
  chatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    backgroundColor: '#39D2C0',
    borderRadius: 8,
    marginTop: 16,
  },
  chatText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default ProfileDriver;