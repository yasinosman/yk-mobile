import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Calculating from './Calculating';
import Picker from '../../Picker';
import { useTheme } from '../../../context/Theme';

const Stack = createStackNavigator();

const CryptoCalculating = () => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Kripto Hesaplama"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen
        name="Kripto Hesaplama"
        component={Calculating}
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
    </Stack.Navigator>
  );
};

export default CryptoCalculating;
