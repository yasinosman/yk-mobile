import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchMenu from './SearchMenu';
import Picker from '../../Picker';
import Buy from '../CryptoTrading/Buy';
import { useTheme } from '../../../context/Theme';

const Stack = createStackNavigator();

const CryptoChooseAccount = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Çapraz Kripto İşlemleri"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen
        name="Çapraz Kripto İşlemleri"
        component={SearchMenu}
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

export default CryptoChooseAccount;
