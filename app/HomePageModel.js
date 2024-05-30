import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-native-paper';
import { GoogleFonts } from 'react-native-google-fonts';
import { useFocusEffect } from '@react-navigation/native';

const HomePageModel = () => {
  const [unfocusNode, setUnfocusNode] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      // Initialize unfocusNode
      setUnfocusNode(new Animated.Value(0));
      return () => {
        // Clean up unfocusNode
        setUnfocusNode(null);
      };
    }, [])
  );

  return (
    <Provider>
      {/* Your UI components here */}
      <View>
        <Text>Home Page</Text>
      </View>
    </Provider>
  );
};

export default HomePageModel;