import React, {useState, useRef} from 'react';  // 2 importando useRef 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './src/service/api'; // 1 importando api com a base da url

export default function App() {

  const [cep, setCep] = useState('');
  const inputRef = useRef(null)

  
  function limparInput(){         // 2 - ao clicar (linha 41) ativa a funcao limparInput  
                                  //  se state cep estiver diferente de null ou seja preenchida        
      if(setCep !== null){        //  alterar state cep pelo setCep e o torna vazio, e atravez da  
        setCep('');               //  refenrência e do uso da funcao focus ativa o elemento   
        inputRef.current.focus()  //  referenciado no caso o input e também subindo o teclado(linha 8 e 32)
      }  
  
  }

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
          ref={inputRef} // 2 referenciando  input a const inputRef para manipula-lo
        />
      </View>

      <View style={styles.containerBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#00CED1'}]}>
          <Text style={styles.textBtn}>Buscar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={limparInput} 
          style={styles.btn}
          >
          <Text style={styles.textBtn}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerResultado}>
        <Text style={styles.textItem}>CEP: 790000</Text>
        <Text style={styles.textItem}>Logradouro: 790000</Text>
        <Text style={styles.textItem}>Bairro: 790000</Text>
        <Text style={styles.textItem}>Cidade: 790000</Text>
        <Text style={styles.textItem}>Estado: 790000</Text>
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
  },
  containerBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  btn:{
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#00FA9A'
  },
  textBtn: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  containerResultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    fontSize: 18,
    color: '#00CED1',
    fontWeight: 'bold'
  }
});
