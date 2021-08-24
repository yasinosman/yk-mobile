import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './Orders';
import Accounts from './Accounts';
import Picker from '../../Picker';

const Stack = createStackNavigator();

const CryptoOrders = () => {
  return (
    <Stack.Navigator
      initialRouteName="Emirlerim"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen name="Emirlerim" component={Orders} />
      <Stack.Screen name="Hesap Seçimi" component={Accounts} />
      <Stack.Screen name="E-Posta Seçimi" component={Picker} />
    </Stack.Navigator>
  );
};

export default CryptoOrders;
