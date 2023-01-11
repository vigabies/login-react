import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './styles';

export default function Lista() {
  return (
    <View style={Styles.Principal}>
      <View style={Styles.Cor}>
        <Image
          style={Styles.img}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
          }}
        />

        <View>
          <Text style={Styles.Text}>Nome</Text>
          <Text style={Styles.Text}>Idade</Text>
          <Text style={Styles.Text}>CPF</Text>
        </View>
      </View>
    </View>
  );
}
