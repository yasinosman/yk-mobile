import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import Detail from './Detail';
import Buy from './Buy';
import Sell from './Sell';

const Stack = createStackNavigator();

const CryptoTrading = () => {
  return (
    <Stack.Navigator initialRouteName="Kripto Alış/Satış" headerMode="none">
      <Stack.Screen name="Kripto Alış/Satış" component={Dashboard} />
      <Stack.Screen name="Kripto Detayı" component={Detail} />
      <Stack.Screen name="Kripto Alış" component={Buy} />
      <Stack.Screen name="Kripto Satış" component={Sell} />
    </Stack.Navigator>
  );
};

export default CryptoTrading;
