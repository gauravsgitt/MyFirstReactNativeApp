import React, { useState } from 'react';
import styles from './styles';

import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const App = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [displayDetails, setDisplayDetails] = useState(false);
  let [showPassword, setShowPassword] = useState(false);

  const resetDetails = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDisplayDetails(false);
  }

  const togglePasswordVisibilty = () => {
    setShowPassword(!showPassword)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>

        <Text style={{ fontSize: 20, marginBottom: 10 }} > Enter your details : </Text>

        <TextInput
          style={styles.textField}
          autoCorrect={false}
          placeholder='Enter your name'
          onChangeText={(text) => setName(text)}
          value={name} />

        <TextInput
          style={styles.textField}
          autoCorrect={false}
          placeholder='Enter your email'
          onChangeText={(text) => setEmail(text)}
          value={email} />

        <View style={{ position: 'relative', marginBottom: 20 }}>
          <TextInput
            style={styles.textField}
            secureTextEntry={showPassword}
            placeholder='Enter your password'
            onChangeText={(text) => setPassword(text)}
            value={password} />

          <TouchableOpacity
            style={{ position: 'absolute', right: 10, top: 10 }}
            onPress={() => togglePasswordVisibilty()}>
            <Image
              source={require('./android/assets/images/eyeicon.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ marginBottom: 10, borderWidth: 0.5, borderRadius: 10, padding: 2, width: 150 }}>
            <Button color='black' title='Show Details' onPress={() => setDisplayDetails(true)} />
          </View>

          <View style={{ marginBottom: 10, borderWidth: 0.5, borderRadius: 10, padding: 2, width: 200 }}>
            <Button color='black' title='Clear Details' onPress={() => resetDetails()} />
          </View>
        </View>
        <View>
          {
            displayDetails ?
              <View>
                <View style={{ backgroundColor: 'lightblue', borderRadius: 10, padding: 8, marginBottom: 10 }}>
                  <Text style={{ margin: 5, fontSize: 18 }}>Details : </Text>
                </View>
                <View style={{ backgroundColor: 'lightblue', borderRadius: 10, padding: 8 }}>
                  <Text style={{ margin: 5, fontSize: 15 }}>Name: {name}</Text>
                  <Text style={{ margin: 5, fontSize: 15 }}>Email: {email}</Text>
                </View>
              </View>
              : null
          }
        </View>

      </View>
    </SafeAreaView>
  );
};

export default App;
