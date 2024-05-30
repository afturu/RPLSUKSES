import React, { useState, useEffect, useRef } from 'eact';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'eact-native';
import { CachedImage } from 'eact-native-cached-image';

const CreateProfileWidget = () => {
  const [yourName, setYourName] = useState('');
  const [city, setCity] = useState('');
  const [myBio, setMyBio] = useState('');

  const yourNameRef = useRef(null);
  const cityRef = useRef(null);
  const myBioRef = useRef(null);

  const handleSaveChanges = () => {
    console.log('Button pressed...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => console.log('Back button pressed...')}>
          <Image source={require('./back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Create your Profile</Text>
      </View>
      <View style={styles.profilePictureContainer}>
        <CachedImage
          style={styles.profilePicture}
          source={{ uri: 'https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80' }}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          value={yourName}
          onChangeText={(text) => setYourName(text)}
          ref={yourNameRef}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your City"
          value={city}
          onChangeText={(text) => setCity(text)}
          ref={cityRef}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Bio"
          value={myBio}
          onChangeText={(text) => setMyBio(text)}
          ref={myBioRef}
          multiline={true}
          numberOfLines={3}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
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
  appBar: {
    height: 100,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'pace-between',
    paddingHorizontal: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14181B',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  textInput: {
    height: 40,
    borderColor: '#E0E3E7',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    color: '#14181B',
  },
  saveButton: {
    backgroundColor: '#4B39EF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default CreateProfileWidget;