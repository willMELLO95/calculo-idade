import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App() {
  
  var [anoAtual, setanoAtual] = useState('');
  var [anoNascimento, setanoNascimento] = useState('');
  var [idade, setidade] = useState('');

  function CalcularTotal(){

    
    idade = parseInt(anoAtual) - parseInt(anoNascimento);

    alert("Sua idade será: " + idade +" anos");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Calculo Idade</Text>

      <TextInput style={styles.campo} placeholder="Digite o ano atual" keyboardType="numeric" onChangeText={(anoAtual) => setanoAtual(anoAtual)} />
      <TextInput style={styles.campo} placeholder="Digite o ano de nascimento" onChangeText={(anoNascimento) => setanoNascimento(anoNascimento)} keyboardType="numeric"/>

      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
        <Text style={styles.textoBotao}>CALCULAR</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FA8072"

  },

  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },

  campo: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
    color: "#A52A2A"
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#A52A2A',
    paddin: 10,
    borderRadius: 30
    
  },

  textoBotao: {
    fontSize: 20,
    color: "#FFFFFF"
  }	

  

});
