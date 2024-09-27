/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text> Hello React Native User! </Text>
        <Button title='Click Here' onPress={() => {
          Alert.alert('Button Action', 'Clicked on the button');
        }
        } />
      </View>
    </SafeAreaView>
  );
};

export default App;
