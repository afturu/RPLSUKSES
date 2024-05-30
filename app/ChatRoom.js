import React, { useCallback, useRef, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const Chatroom = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Hi there! How can I help you today?',
      isOwn: false,
    },
    {
      text: 'Halo, bisa antar saya ke UNNES?',
      isOwn: true,
    },
    {
      text: 'lokasinya darimana kak',
      isOwn: false,
    },
    {
      text: 'Dari banaran',
      isOwn: true,
    },
    {
      text: 'oke . silakan order ya. dan kirim alamat',
      isOwn: false,
    },
    {
      text: 'Oke  Alice.',
      isOwn: true,
    },
  ]);

  const textInputRef = useRef();

  const handleSendPress = useCallback(() => {
    if (textInputRef.current && textInputRef.current.value) {
      const newMessage = {
        text: textInputRef.current.value,
        isOwn: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Clear the input field
      textInputRef.current.clear();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.isOwn ? styles.messageOwn : styles.messageNotOwn,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
          <Feather name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  message: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
  },
  messageOwn: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  messageNotOwn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    marginRight: 16,
  },
  sendButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
  },
});

export default Chatroom;