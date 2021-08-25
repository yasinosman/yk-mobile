import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './Orders';
import Accounts from './Accounts';
import Picker from '../../Picker';
import CryptoDuo from './CryptoDuo';
import CryptoAlarmIn from '../Crypto/CryptoAlarmIn';

const Stack = createStackNavigator();

const CryptoOrders = () => {
  return (
    <Stack.Navigator
      initialRouteName="Alarm Kur"
      headerMode="none"
      backBehavior="history"
    >
      <Stack.Screen name="Alarm Kur" component={CryptoAlarmIn} />
      <Stack.Screen name="Kripto Çifti" component={CryptoDuo} />
    </Stack.Navigator>
  );
};

export default CryptoOrders;
