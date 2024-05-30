import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Layananaduan = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('IconButton pressed ...')}>
          <Image source={require('./assets/images/arrow_back.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Complete Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image source={require('./assets/images/phone.png')} style={styles.icon} />
            <Text style={styles.cardHeaderText}>Link your phone number</Text>
          </View>
          <TextInput
            style={styles.input}
            value={text1}
            onChangeText={(text) => setText1(text)}
            placeholder="Your number here..."
          />
        </View>
        <Text style={styles.label}>Your information</Text>
        <TextInput
          style={styles.input}
          value={text2}
          onChangeText={(text) => setText2(text)}
          placeholder="Your Name"
        />
        <TextInput
          style={styles.input}
          value={text3}
          onChangeText={(text) => setText3(text)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={text4}
          onChangeText={(text) => setText4(text)}
          placeholder="City your were born"
        />
        <TextInput
          style={styles.input}
          value={text5}
          onChangeText={(text) => setText5(text)}
          placeholder="# of people on your team"
        />
        <TextInput
          style={styles.input}
          value={text6}
          onChangeText={(text) => setText6(text)}
          placeholder="Team Name"
        />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed ...')}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3E7',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 16,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 16,
  },
  input: {
    height: 40,
    borderColor: '#E0E3E7',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
  },
  label: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4B39EF',
    padding: 12,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default Layananaduan;