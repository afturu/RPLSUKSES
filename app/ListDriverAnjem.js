import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import { GradientText } from 'react-native-gradient-text';

const Listdriveranjem = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for patients..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>Patients matching search</Text>
        <Text style={styles.resultsCount}>24</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
              }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Randy Rudolph</Text>
              <View style={styles.infoRow}>
                <Text style={styles.phone}>(123) 456-7890</Text>
                <Text style={styles.rating}>Rating 70%</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Text style={styles.arrowText}>View Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1573495892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHx1c2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
              }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>David Jerome</Text>
              <View style={styles.infoRow}>
                <Text style={styles.phone}>(123) 456-7890</Text>
                <Text style={styles.rating}>Rating 90%</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Text style={styles.arrowText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  searchContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    paddingHorizontal: 10,
  },
  resultsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultsText: {
    fontSize: 16,
    color: '#424242',
  },
  resultsCount: {
    fontSize: 16,
    color: '#9E9E9E',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phone: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  rating: {
    fontSize: 14,
    color: '#9E9E9E',
    marginLeft: 10,
  },
  arrowButton: {
    backgroundColor: '#9E9E9E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 14,
    color: '#F2F2F2',
  },
});

export default Listdriveranjem;