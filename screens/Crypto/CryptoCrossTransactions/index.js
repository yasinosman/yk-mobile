import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchMenu from './SearchMenu';
import Picker from '../../Picker';
import Buy from '../CryptoTrading/Buy';

const Stack = createStackNavigator();

const CryptoChooseAccount = () => {
  return (
    <Stack.Navigator
      initialRouteName="Çapraz Kripto İşlemleri"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen name="Çapraz Kripto İşlemleri" component={SearchMenu} />
      <Stack.Screen name="Kripto Alış" component={Buy} />
      <Stack.Screen
        name="Cüzdan Seçimi"
        component={Picker}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CryptoChooseAccount;
