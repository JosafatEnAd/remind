import * as React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [name, setName] = React.useState('')
  const speak = () => {
    const thingToSay = `Hola ${name}`;
    const options = {
      voice: "com.apple.speech.synthesis.voice.Fred",
      pitch: .9,
      rate: 1
    }
    Speech.speak(thingToSay, options);
  };
  console.log(name)
  return (
    <View>
      <TextInput placeholder='Nombre' onChangeText={setName} />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}