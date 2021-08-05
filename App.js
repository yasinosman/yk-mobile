import React from 'react';
import './firebase/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
import useCurrentUser from './hooks/useCurrenUser';
import Navbar from './components/Navbar';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import NavigationDrawer from './components/NavigationDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  const user = useCurrentUser();

  const [fontsLoaded, error] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {!user && <Login />}

        {user && (
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
