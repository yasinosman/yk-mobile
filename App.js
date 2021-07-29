import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerType="slide"
            initialRouteName="Dashboard"
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            {/* Dashboard a ayri header gecilebilir
            https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component */}
            <Drawer.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ title: 'Anasayfa' }}
            />
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false, title: 'Login' }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
