import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseAccount from './ChooseAccount';
import Picker from '../../../Picker';

const Stack = createStackNavigator();

const CryptoChooseAccount = () => {
  return (
    <Stack.Navigator
      initialRouteName="Hesap Seçimi"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen
        name="Hesap Seçimi"
        component={ChooseAccount}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Ödeme Aracı Seçimi"
        component={Picker}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CryptoChooseAccount;
