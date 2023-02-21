import React, {useState} from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './src/service/api'; // 1 importando api com a base da url

export default function App() {

  const [cep, setCep] = useState('');

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.containerView}>
        <Text style={styles.textCep}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}  
          placeholder='Ex: 08750500'
          value={cep} // 1 seu valor será state cep
          onChangeText={(texto) => setCep(texto)} // 1 ao digitar os dados irão a state cep atravez da setCep
          keyboardType='numeric' // 1 apenas teclado numerico
          maxLength={8} // 1 limitando a apenas 8 digitos
          autoComplete='postal-address' // auto complete para cep
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: '#E0FFFF'
  },
  containerView:{
    alignItems: 'center',
  },
  textCep:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: '600',
    color: '#00CED1'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 15
  }
});
