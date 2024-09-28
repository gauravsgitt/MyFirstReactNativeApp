import React, { useState } from 'react';
import styles from './styles';

import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import {
  CustomButton,
  CustomPressableButton,
  CustomTouchableHighlightButton,
  CustomTouchableOpacityButton
} from './customComponents';

const App = () => {

  let [title, setTitle] = useState("Press here")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>

        <Text style={styles.welcomeText}>Hello React Native User!</Text>

        <CustomButton title={title} setTitle={setTitle} onPress={undefined} />

        <CustomPressableButton title={title} setTitle={setTitle} onPress={undefined} />

        <CustomTouchableOpacityButton title={title} setTitle={setTitle} onPress={undefined} />

        <CustomTouchableHighlightButton title={title} setTitle={setTitle} onPress={undefined} />

        <View style={styles.button}>
          <Button title='Reset' onPress={() => {
            setTitle('Press here');
          }} color={"white"} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default App;
