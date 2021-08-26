import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseAccount from './ChooseAccount';
import Picker from '../../../Picker';
import { useTheme } from '../../../../context/Theme';

const Stack = createStackNavigator();

const CryptoChooseAccount = () => {
  const { theme } = useTheme();

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
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Ödeme Aracı Seçimi"
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
