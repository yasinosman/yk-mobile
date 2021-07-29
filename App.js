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
