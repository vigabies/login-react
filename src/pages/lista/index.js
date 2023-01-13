import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useRoute} from '@react-navigation/native';
import {handleRemove, Item} from './function';

// a const array é importando para manipulação de JSON -- json é "[{}]".
const ARRAY = [
  {
    id: '1',
    nome: 'Mariana Rove',
    idade: '20',
    cpf: '111.111.111-11',
  },
  {
    id: '2',
    nome: 'Maria Giglioli',
    idade: '22',
    cpf: '222.222.222-22',
  },
  {
    id: '3',
    nome: 'João Bispo',
    idade: '23',
    cpf: '333.333.333-33',
  },
];

//a função Lista é a maior e principal
export default function Lista() {
  const route = useRoute();

  //o state serve para atualizar a página
  const [lista, setLista] = useState(ARRAY);

  ARRAY.push({
    id: Math.random(0, 100),
    nome: route.params.nome,
    idade: route.params.idade,
    cpf: route.params.cpf,
  });

  //a função renderItem é uma sub da principal tb
  function renderItem({item}) {
    return <Item data={item} />;
  }

  //esse é o retorno da função principal
  return (
    <View style={Styles.Principal}>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={Styles.delet}
        onPress={() => handleRemove(lista, setLista)}>
        <Text style={Styles.textdel}>DELET</Text>
      </TouchableOpacity>
    </View>
  );
}
