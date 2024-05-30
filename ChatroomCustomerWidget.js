import React, { useState, useEffect, useRef } from 'eact';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'eact-native';
import { Provider } from 'eact-native-paper';
import { GoogleFonts } from 'eact-native-google-fonts';

const ChatroomCustomerWidget = () => {
  const [model, setModel] = useState(new ChatroomCustomerModel());
  const [text, setText] = useState('');
  const [focusNode, setFocusNode] = useState(new Animated.Value(0));
  const textInputRef = useRef(null);

  useEffect(() => {
    model.textController = textInputRef.current;
    model.textFieldFocusNode = focusNode;
  }, []);

  const handleSendPress = () => {
    console.log('Send button pressed');
  };

  const handleMorePress = () => {
    console.log('More button pressed');
  };

  return (
    <Provider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1519569201888-fb18e8c5540e?w=1280&h=720' }}
                style={{ width: 44, height: 44, borderRadius: 22 }}
              />
              <Text>Alice Smith</Text>
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
            <Text>Halo kak, anjem ready?</Text>
            <Text>Ready Kak</Text>
            <Text>Mau Anjem ke unnes</Text>
            <Text>Oke ka, bisa di isi form ordernya ya</Text>
            <Text>Oke kak, sebentar</Text>
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
    </Provider>
  );
};

export default ChatroomCustomerWidget;