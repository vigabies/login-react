import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Styles from './styles';
import {useRoute} from '@react-navigation/native';

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
  ARRAY.push({
    id: Math.random(0, 100),
    nome: route.params.nome,
    idade: route.params.idade,
    cpf: route.params.cpf,
  });

  console.log(ARRAY);

  //a função item é uma sub da principal
  function Item({data}) {
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
  //a função renderItem é uma sub da principal tb
  function renderItem({item}) {
    return <Item data={item} />;
  }

  console.log(route.params);

  function handleRemove() {
    //apagar o ultimo item
  }

  //esse é o retorno da função principal
  return (
    <View style={Styles.Principal}>
      <FlatList
        data={ARRAY}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={Styles.delet} onPress={() => handleRemove()}>
        <Text style={Styles.textdel}>DELET</Text>
      </TouchableOpacity>
    </View>
  );
}
