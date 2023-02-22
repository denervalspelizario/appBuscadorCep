import React, {useState, useRef} from 'react';  // 2 importando useRef 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert, Keyboard } from 'react-native';
import api from './src/service/api'; // 1 importando api com a base da url

export default function App() {

  const [cep, setCep] = useState('');
  const inputRef = useRef(null)
  const [cepUser, setCepUser] = useState(null);  

  
  function limparInput(){         // 2 - ao clicar (linha 41) ativa a funcao limparInput  
                                  //  se state cep estiver diferente de null ou seja preenchida        
      if(setCep !== null){        //  alterar state cep pelo setCep e o torna vazio, e atravez da  
        setCep('');               //  refenrência e do uso da funcao focus ativa o elemento   
        inputRef.current.focus()  //  referenciado no caso o input e também subindo o teclado(linha 8 e 32)
        setCepUser('');
      }  
  
  }

  async function buscarInput(){  // 3 - ao clicar (linha ) ativa a funcao buscar
    if(cep === ''){        // se cep estiver vazio 
      Alert.alert(         // alerta para user 
        'Atenção',
        'Digite o cep desejado'
      )
      setCep(''); // esvazia o state cep    
      return; // para finalizar o codigo
    } 

    try {

      const response = await api.get(`${cep}/json`); // 3  concatena o valor de cep(valor digitado) para
                                                     // em conjunto com /json para puxar dado da api de forma dinamica 
      //console.log(response.data)  //3 dando console.log para verificar se esta funcionando a api
      Keyboard.dismiss()// 3 apos digitar dado e  não dar erro fecha o teclado 

      setCepUser(response.data) // 4 cepUser recebendo dados 

    } catch(error) {

      console.log('ERROR: ' + error) // 3 se der erro retornna error + motivo do erro

    }
  }

  const rua =  cepUser.logradouro     // adicionando as variáveis os dados da api (ler linha 40)
  const bairro = cepUser.bairro       // estas variaveis serão usadas pata mostrar os dados (apartir linha 89)
  const cidade = cepUser.localidade
  const estado = cepUser.uf
  
  
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
        <TouchableOpacity
          onPress={buscarInput} 
          style={[styles.btn, {backgroundColor: '#00CED1'}]}>
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
                                      {/* Validacao se  variavel estiver diferente de undefined ou seja nao recebeu dado ainda retorna dado da variavel senao ficar vazio   */}
        <Text style={styles.textItem}>{(rua !== undefined) ? 'Rua: ' + rua : ''}</Text>
        <Text style={styles.textItem}>{(bairro !== undefined) ? 'Bairro: ' + bairro : ''}</Text>
        <Text style={styles.textItem}>{(cidade !== undefined)? 'Cidade: ' + cidade : '' }</Text>
        <Text style={styles.textItem}>{(estado !== undefined)? 'Estado: ' + estado: ''}</Text>
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
