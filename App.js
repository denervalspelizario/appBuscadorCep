import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/service/api'; // importando api com a base da url

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Buscador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
