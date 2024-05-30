import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Trackingorder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tracking Order</Text>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#57636C" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Jasa Titip</Text>
            <Text style={styles.cardDuration}>8 mins</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardText}>
              Intro to UX Design Intro to UX Design Intro to UX Design Intro to
              UX Design
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Jasa Titip</Text>
            <Text style={styles.cardDuration}>8 mins</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardText}>
              Intro to UX Design Intro to UX Design Intro to UX Design Intro to
              UX Design
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Jasa Titip</Text>
            <Text style={styles.cardDuration}>8 mins</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardText}>
              Intro to UX Design Intro to UX Design Intro to UX Design Intro to
              UX Design
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Jasa Titip</Text>
            <Text style={styles.cardDuration}>8 mins</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardText}>
              Intro to UX Design Intro to UX Design Intro to UX Design Intro to
              UX Design
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enroll in Class</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.iconContainer}>
            <Feather name="favorite" size={24} color="#4B39EF" />
          </View>
          <Text style={styles.buttonText}>Favorite Class</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDuration: {
    fontSize: 14,
    color: '#8D949E',
  },
  cardBody: {
    marginTop: 16,
  },
  cardText: {
    fontSize: 14,
    color: '#8D949E',
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B39EF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  iconContainer: {
    paddingRight: 8,
  },
});

export default Trackingorder;