import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
  Dimensions,
  Platform,
  StyleSheet

} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };

  return (
    <View style={{ padding: 50 }}>
      <Text style={{ fontSize: 50 }}>ready...</Text>
      <ActivityIndicator style="large" color="red" />
      <Button title="click me" onPress={onButtonPress} />
      <Text>OS: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>red</Text>
      <Text>green</Text>
      <Text>blue</Text>

    </View>

  )

}