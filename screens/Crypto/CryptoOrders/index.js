import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './Orders';
import Accounts from './Accounts';
import Picker from '../../Picker';
import { useTheme } from '../../../context/Theme';

const Stack = createStackNavigator();

const CryptoOrders = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Emirlerim"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen name="Emirlerim" component={Orders} />
      {/* <Stack.Screen
        name="E-Posta Seçimi"
        component={Picker}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default CryptoOrders;
