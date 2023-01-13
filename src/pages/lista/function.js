//aqui fica as funções da nossa página

import React from 'react';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';

export function handleRemove(lista, setLista) {
  //o aux serve como uma variavel auxiliar, ela mostra que pode apagar mas não totalmente, e chamos a lista para manter atualizado
  // o .pop apaga.
  let aux = JSON.parse(JSON.stringify(lista));
  aux.pop();
  setLista(aux);
}

//a função item é uma sub da principal
export function Item({data}) {
  return (
    <View style={Styles.Cor}>
      <Image
        style={Styles.img}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        }}
      />

      <View>
        <Text style={Styles.Text}>Nome: {data.nome}</Text>
        <Text style={Styles.Text}>Idade: {data.idade}</Text>
        <Text style={Styles.Text}>CPF: {data.cpf}</Text>
      </View>
    </View>
  );
}
