import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { BLUE } from './common/colors';
import Dashboard from './screens/Dashboard';
import UserLogin from './screens/UserLogin';
import BusinessLogin from './screens/BusinessLogin';
import Accounts from './screens/Accounts';
import Cards from './screens/Cards';
import Credits from './screens/Credits';
import Insurances from './screens/Insurances';
import Investments from './screens/Investments';
import MoneyTransfers from './screens/MoneyTransfers';
import OtherOperations from './screens/OtherOperations';
import Payments from './screens/Payments';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="UserLogin"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="UserLogin" component={UserLogin} />
            <Stack.Screen name="BusinessLogin" component={BusinessLogin} />
          </Stack.Navigator>
          {/* <Drawer.Navigator
            drawerType="slide"
            initialRouteName="UserLogin"
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: BLUE,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {ss
                fontWeight: 'bold',
              },
            }}
          > */}
          {/* Dashboard a ayri header gecilebilir
            https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component */}
          {/* <Drawer.Screen
              name="UserLogin"
              component={UserLogin}
              options={{ headerShown: false, title: 'UserLogin' }}
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
          </Drawer.Navigator> */}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
