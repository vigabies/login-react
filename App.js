import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavegation from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavegation></StackNavegation>
    </NavigationContainer>
  );
}
