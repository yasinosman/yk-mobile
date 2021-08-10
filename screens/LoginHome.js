import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserLoginFlex from './UserLoginFlex';
import { TabView } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Piyasalar from './Piyasalar';
import ATM from './ATM';
import Kampanyalar from './Kampanyalar';
import SifreM from './SifreM';
import DahaF from './DahaF';

const Tab = createBottomTabNavigator();

const LoginHome = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="UserLoginFlex"
        component={UserLoginFlex}
        options={{
          tabBarButton: () => <View style={{ width: 0, height: 0 }}></View>,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen name="Piyasalar" component={Piyasalar} />
      <Tab.Screen name="ATM/Şube" component={ATM} />
      <Tab.Screen name="Şifre Merkezi" component={SifreM} />
      <Tab.Screen name="Kampanyalar" component={Kampanyalar} />
      <Tab.Screen name="Daha Fazlası" component={DahaF} />
    </Tab.Navigator>
  );
};

export default LoginHome;

const styles = StyleSheet.create({});
