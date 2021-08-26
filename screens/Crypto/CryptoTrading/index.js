import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import Detail from './Detail';
import Buy from './Buy';
import Sell from './Sell';
import Picker from '../../Picker';
import { useTheme } from '../../../context/Theme';

const Stack = createStackNavigator();

const CryptoTrading = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Kripto Alış/Satış"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen
        name="Kripto Alış/Satış"
        component={Dashboard}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Detayı"
        component={Detail}
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
      <Stack.Screen
        name="Kripto Satış"
        component={Sell}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Hesap Seçimi"
        component={Picker}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Cüzdan Seçimi"
        component={Picker}
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

export default CryptoTrading;
