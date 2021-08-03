import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { BLUE } from './common/colors';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Accounts from './screens/Accounts';
import Cards from './screens/Cards';
import Credits from './screens/Credits';
import Insurances from './screens/Insurances';
import Investments from './screens/Investments';
import MoneyTransfers from './screens/MoneyTransfers';
import OtherOperations from './screens/OtherOperations';
import Payments from './screens/Payments';
import firebase from 'firebase/app';
// Optionally import the services that you want to use
import 'firebase/auth';
//import "firebase/database";
import 'firebase/firestore';
//import "firebase/functions";
//import "firebase/storage";

const Drawer = createDrawerNavigator();

export default function App() {
  React.useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: 'AIzaSyABvJ7I6yCf-b8FidWxsJuw01OR5TkQ9KM',
      authDomain: 'yk-mobile-7ce20.firebaseapp.com',
      projectId: 'yk-mobile-7ce20',
      storageBucket: 'yk-mobile-7ce20.appspot.com',
      messagingSenderId: '757983497368',
      appId: '1:757983497368:web:5dd504012c79ca855494ed',
    };

    try {
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase connection initialized');
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerType="slide"
            initialRouteName="Login"
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: BLUE,
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
              name="Login"
              component={Login}
              options={{ headerShown: false, title: 'Login' }}
            />
            <Drawer.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ title: 'Anasayfa' }}
            />
            <Drawer.Screen
              name="Accounts"
              component={Accounts}
              options={{ title: 'Hesaplarım' }}
            />
            <Drawer.Screen
              name="Cards"
              component={Cards}
              options={{ title: 'Kartlarım' }}
            />
            <Drawer.Screen
              name="Money Transfers"
              component={MoneyTransfers}
              options={{ title: 'Para Transferleri' }}
            />
            <Drawer.Screen
              name="Investments"
              component={Investments}
              options={{ title: 'Yatırımlar' }}
            />
            <Drawer.Screen
              name="Payments"
              component={Payments}
              options={{ title: 'Ödemeler' }}
            />
            <Drawer.Screen
              name="Credits"
              component={Credits}
              options={{ title: 'Krediler' }}
            />
            <Drawer.Screen
              name="Insurances"
              component={Insurances}
              options={{ title: 'Sigortalar' }}
            />
            <Drawer.Screen
              name="Other Operations"
              component={OtherOperations}
              options={{ title: 'Diğer İşlemler' }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
