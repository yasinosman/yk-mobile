import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Picker from '../../Picker';
import MyAlarms from './MyAlarms';
import NewAlarm from './NewAlarm';
import { useTheme } from '../../../context/Theme';

const Stack = createStackNavigator();

const Investments = props => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Alarmlarım" headerMode="none">
      <Stack.Screen
        name="Alarmlarım"
        component={MyAlarms}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Alarm Kur"
        component={NewAlarm}
        options={{
          transitionSpec: {
            open: theme.animation.route,
            close: theme.animation.route,
          },
        }}
      />
      <Stack.Screen
        name="Kripto Çiftleri"
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

export default Investments;
