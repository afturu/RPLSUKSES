import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { GoogleFonts } from 'react-native-google-fonts';

const ChatRoomDriverWidget = () => {
  const [model, setModel] = useState(new ChatRoomDriverModel());
  const [text, setText] = useState('');
  const textInputRef = useRef(null);

  useEffect(() => {
    model.textController = textInputRef.current;
  }, []);

  const handleSendPress = () => {
    console.log('Send button pressed');
  };

  const handleMorePress = () => {
    console.log('More button pressed');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1519569201888-fb18e8c5540e?w=1280&h=720' }}
              style={{ width: 44, height: 44, borderRadius: 22 }}
            />
            <Text>Edward Cullen</Text>
            <Text>Online</Text>
          </View>
          <View>
            <Text>Chat</Text>
            <TouchableOpacity onPress={handleMorePress}>
              <Icon name="more-vert" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Hi there! How can I help you today?</Text>
          <Text>Halo, bisa antar saya ke UNNES?</Text>
          <Text>lokasinya darimana kak</Text>
          <Text>Dari banaran</Text>
          <Text>oke . silakan order ya. dan kirim alamat</Text>
          <Text>Oke  Alice.</Text>
        </View>
        <View>
          <TextInput
            ref={textInputRef}
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="Type a message..."
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10 }}
          />
          <TouchableOpacity onPress={handleSendPress}>
            <Icon name="send" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatRoomDriverWidget;