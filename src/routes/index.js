import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro';
import Lista from '../pages/lista';

const Stack = createNativeStackNavigator();

export default function StackNavegation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Lista" component={Lista} />
    </Stack.Navigator>
  );
}
