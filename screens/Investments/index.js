import React from 'react';
import Menu from './Menu';
import { createStackNavigator } from '@react-navigation/stack';
import CryptoTrading from '../Crypto/CryptoTrading';
import CryptoCrossTransactions from '../Crypto/CryptoCrossTransactions';
import CryptoOrders from '../Crypto/CryptoOrders';
import CryptoAlarms from '../Crypto/CryptoAlarms';
import CryptoCalculating from '../Crypto/CryptoCalculating';
import CryptoWallet from '../Crypto/CryptoWallet';
import Buy from '../Crypto/CryptoTrading/Buy';
import Picker from '../Picker';
import { useTheme } from '../../context/Theme';

const Stack = createStackNavigator();

const Investments = props => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="Yatırımlar" headerMode="none">
      <Stack.Screen
        name="Yatırımlar"
        component={Menu}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Alış/Satış"
        component={CryptoTrading}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Çapraz Kripto İşlemleri"
        component={CryptoCrossTransactions}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Cüzdanım"
        component={CryptoWallet}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Emirlerim"
        component={CryptoOrders}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Alarmlarım"
        component={CryptoAlarms}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Hesaplama"
        component={CryptoCalculating}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Satılacak Birim Seçimi"
        component={Picker}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Alınacak Birim Seçimi"
        component={Picker}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Alış"
        component={Buy}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Investments;
