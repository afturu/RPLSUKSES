import React, { useState, useEffect } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import { GoogleFonts } from 'react-native-google-fonts';
import { Animated as AnimatedRN } from 'react-native-reanimated';

const AftersubmitModel = () => {
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
      <TouchableOpacity>
        <Text>Button</Text>
      </TouchableOpacity>
    </Provider>
  );
};

export default AftersubmitModel;