import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './styles';
import {Navegar} from './function';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [cpf, setCpf] = useState(0);

  const navegation = useNavigation();

  const register = () => {
    navegation.navigate('Lista', {
      nome: nome,
      idade: idade,
      cpf: cpf,
    });
  };

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>LOGIN</Text>
      <View>
        <Text style={Styles.TextInfo}>Nome</Text>
        <TextInput
          value={nome}
          onChangeText={text => {
            setNome(text);
          }}
          keyboardType={'string'}
          style={Styles.Input}></TextInput>

        <Text style={Styles.TextInfo}>Idade</Text>
        <TextInput
          value={idade}
          onChangeText={text => {
            setIdade(text);
          }}
          keyboardType={'number-pad'}
          maxLength={2}
          style={Styles.Input}></TextInput>

        <Text style={Styles.TextInfo}>CPF</Text>
        <TextInput
          value={cpf}
          onChangeText={text => {
            setCpf(text);
          }}
          keyboardType={'number-pad'}
          minLenght={11}
          maxLength={14}
          placeholder="000.000.000-00"
          style={Styles.Input}></TextInput>

        <TouchableOpacity style={Styles.Info} onPress={() => register()}>
          <Text style={Styles.Text}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
