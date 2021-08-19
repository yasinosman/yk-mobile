import React from 'react';
import Menu from './Menu';
import { createStackNavigator } from '@react-navigation/stack';
import CryptoTrading from '../Crypto/CryptoTrading';
import CryptoCrossTransactions from '../Crypto/CryptoCrossTransactions';
import CryptoOrders from '../Crypto/CryptoOrders';
import CryptoAlarms from '../Crypto/CryptoAlarms';
import CryptoCalculating from '../Crypto/CryptoCalculating';
import CryptoWallet from '../Crypto/CryptoWallet';
import CryptoCrossTransactionsDetail from '../Crypto/CryptoCrossTransactionsDetail';
import CryptoOrdersAccounts from '../Crypto/CryptoOrdersAccounts';
import Buy from '../Crypto/CryptoTrading/Buy';

const Stack = createStackNavigator();

const Investments = props => {
  return (
    <Stack.Navigator initialRouteName="Yatırımlar" headerMode="none">
      <Stack.Screen name="Yatırımlar" component={Menu} />
      <Stack.Screen name="Kripto Alış/Satış" component={CryptoTrading} />
      <Stack.Screen
        name="Çapraz Kripto İşlemleri"
        component={CryptoCrossTransactions}
      />
      <Stack.Screen name="Kripto Cüzdanım" component={CryptoWallet} />
      <Stack.Screen name="Emirlerim" component={CryptoOrders} />
      <Stack.Screen
        name="Kripto Emirlerim Hesaplar"
        component={CryptoOrdersAccounts}
      />
      <Stack.Screen name="Kripto Alarmlarım" component={CryptoAlarms} />
      <Stack.Screen name="Kripto Hesaplama" component={CryptoCalculating} />
      <Stack.Screen name="Kripto Alış" component={Buy} />
    </Stack.Navigator>
  );
};

export default Investments;
