import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import Detail from './Detail';
import Buy from './Buy';
import Sell from './Sell';
import Picker from '../../Picker';

const Stack = createStackNavigator();

const CryptoTrading = () => {
  return (
    <Stack.Navigator
      initialRouteName="Kripto Alış/Satış"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen name="Kripto Alış/Satış" component={Dashboard} />
      <Stack.Screen name="Kripto Detayı" component={Detail} />
      <Stack.Screen name="Kripto Alış" component={Buy} />
      <Stack.Screen name="Kripto Satış" component={Sell} />
      <Stack.Screen
        name="Hesap Seçimi"
        component={Picker}
        options={{
          animationEnabled: false,
        }}
      />
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

export default CryptoTrading;
