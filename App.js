import * as React from 'react';
import { View, Text,StyleSheet, Button, TextInput, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';
import Voice from '@react-native-voice/voice';

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
  const [started, setStarted] = React.useState(false)
  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const startSpeechToText = async () => {
    await Voice.start("en-NZ");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };
  console.log(results[0])
  return (
    <View>
      <TextInput placeholder='Nombre' style={{ height: 100 }} onChangeText={setName} />
      <Button title="Press to hear some words" onPress={speak} />

      <View>
        {!started ? <Button title='Empezar a hablar' onPress={startSpeechToText} /> : undefined}
        {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
        {results.map((result, index) => <Text key={index}>{result}</Text>)}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}