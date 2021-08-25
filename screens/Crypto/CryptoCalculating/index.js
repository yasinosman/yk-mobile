import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Calculating from './Calculating';
import Picker from '../../Picker';

const Stack = createStackNavigator();

const CryptoCalculating = () => {
  return (
    <Stack.Navigator
      initialRouteName="Kripto Hesaplama"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen name="Kripto Hesaplama" component={Calculating} />
      <Stack.Screen name="Satılacak Birim Seçimi" component={Picker} />
      <Stack.Screen name="Alınacak Birim Seçimi" component={Picker} />
    </Stack.Navigator>
  );
};

export default CryptoCalculating;
