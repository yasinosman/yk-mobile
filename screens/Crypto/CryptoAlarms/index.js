import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Picker from '../../Picker';
import MyAlarms from './MyAlarms';
import NewAlarm from './NewAlarm';

const Stack = createStackNavigator();

const Investments = props => {
  return (
    <Stack.Navigator initialRouteName="Alarmlarım" headerMode="none">
      <Stack.Screen
        name="Alarmlarım"
        component={MyAlarms}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Alarm Kur"
        component={NewAlarm}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Kripto Çiftleri"
        component={Picker}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Investments;
