import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Halaman1 = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Sign In' },
    { key: 'second', title: 'Sign Up' },
  ]);

  const FirstRoute = () => (
    <View style={styles.scene}>
      <Text>Sign In</Text>
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.scene}>
      <Text>Sign Up</Text>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: window.width }}
        style={styles.tabView}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBar}
            labelStyle={styles.labelStyle}
            renderLabel={({ route, focused }) => (
              <Text
                style={[
                  styles.tabLabel,
                  focused && { color: '#4B39EF' },
                ]}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#E0E3E7',
    borderBottomWidth: 2,
  },
  indicatorStyle: {
    backgroundColor: '#4B39EF',
    height: 4,
  },
  labelStyle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '500',
  },
  tabLabel: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '500',
    color: '#57636C',
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Halaman1;