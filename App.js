import React from 'react';
import './firebase/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Dashboard from './screens/Dashboard';
import UserLoginFlex from './screens/UserLoginFlex';
import BusinessLoginFlex from './screens/BusinessLoginFlex';
import Accounts from './screens/Accounts';
import Cards from './screens/Cards';
import Credits from './screens/Credits';
import Insurances from './screens/Insurances';
import Investments from './screens/Investments';
import MoneyTransfers from './screens/MoneyTransfers';
import OtherOperations from './screens/OtherOperations';
import Payments from './screens/Payments';
import LogoScreen from './screens/LogoScreen';
import Piyasalar from './screens/LoginTabs/Piyasalar';
import PiyasalarKurumsal from './screens/LoginTabs/PiyasalarKurumsal';
import ATM from './screens/LoginTabs/ATM';
import ATMKurumsal from './screens/LoginTabs/ATMKurumsal';
import SifreM from './screens/LoginTabs/SifreM';
import Kampanyalar from './screens/LoginTabs/Kampanyalar';
import DahaF from './screens/LoginTabs/DahaF';
import İletisim from './screens/LoginTabs/İletisim';
import Araclar from './screens/LoginTabs/Araclar';
import DahaFKurum from './screens/LoginTabs/DahaFKurum';

import ThemeProvider from './context/Theme';
import useCurrentUser from './hooks/useCurrentUser';
import { BLUE, DEVICE_HEIGHT } from './lib/constants';
import { NavigationDrawer, Navbar } from './lib/components';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const user = useCurrentUser();

  const [fontsLoaded, error] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <LogoScreen />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {!user && (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="UserLoginFlex"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="UserLoginFlex" component={UserLoginFlex} />
              <Stack.Screen
                name="BusinessLoginFlex"
                component={BusinessLoginFlex}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="PİYASALAR"
                component={Piyasalar}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="PİYASALAR Kurumsal"
                component={PiyasalarKurumsal}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="ATM/ŞUBE"
                component={ATM}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="ATM/ŞUBE Kurumsal"
                component={ATMKurumsal}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="ŞİFRE İŞLEMLER"
                component={SifreM}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="KAMPANYALAR"
                component={Kampanyalar}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="DAHA FAZLASI"
                component={DahaF}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="DAHA FAZLASI KURUMSAL"
                component={DahaFKurum}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="İLETİŞİM"
                component={İletisim}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="ARAÇLAR"
                component={Araclar}
                options={{
                  animationEnabled: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )}

        {user && (
          <NavigationContainer>
            <Drawer.Navigator
              overlayColor="rgba(0,0,0,0.5)"
              drawerType="slide"
              initialRouteName="Dashboard"
              screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: BLUE,
                },
                headerTintColor: '#fff',
              }}
              drawerStyle={{
                width: '84%',
                height: DEVICE_HEIGHT,
              }}
              drawerContent={props => <NavigationDrawer {...props} />}
            >
              <Drawer.Screen
                name="Anasayfa"
                component={Dashboard}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Hesaplarım"
                component={Accounts}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Kartlarım"
                component={Cards}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Para Transferleri"
                component={MoneyTransfers}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Yatırımlar"
                component={Investments}
                // options={({ route }) => ({
                //   header: props => (
                //     <Navbar
                //       navigation={props.scene.descriptor.navigation}
                //       route={props.scene.route}
                //       currentRouteName={
                //         getCurrentRouteName(route) ?? 'Yatırımlar'
                //       }
                //       {...props}
                //     />
                //   ),
                // })}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Ödemeler"
                component={Payments}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Krediler"
                component={Credits}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Sigortalar"
                component={Insurances}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="Diğer İşlemler"
                component={OtherOperations}
                options={{
                  header: props => (
                    <Navbar
                      navigation={props.scene.descriptor.navigation}
                      route={props.scene.route}
                      {...props}
                    />
                  ),
                }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        )}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
