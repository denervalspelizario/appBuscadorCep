import React, {useState} from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './src/service/api'; // importando api com a base da url

export default function App() {

  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.containerView}>
        <Text>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}  
          placeholder='Ex: 08750500'
          value={cep} // 1 seu valor será state cep
          onChangeText={(texto) => setCep(texto)} // 1 ao digitar os dados irão a state cep atravez da setCep
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%'
  },
  containerView:{
    alignItems: 'center',
  }
});
