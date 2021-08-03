import React from 'react';
import { Image, Input, Button, Avatar, Divider } from 'react-native-elements';
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import stories from '../mock/stories.json';
import InfoCard from '../components/InfoCard';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { BLUE } from '../common/colors';
import { Language } from '../components/Language';
import { Profile } from '../components/Profile';
import { Switch } from 'react-native';
import { Formik, useFormik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Login = ({ navigation }) => {
  const [tc, setTc] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 12 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(34,169,241,1)', 'rgba(5,136,218,1)']}
          style={styles.background}
        />
        <View style={styles.languageAndLogo}>
          <Language title="TR" style={styles.languageStyle} />
          <Image
            source={require('../assets/img/yk-logo-3.png')}
            style={{
              width: 170,
              height: 50,
              marginTop: Dimensions.get('window').height * (1 / 20) + 7,
            }}
          ></Image>
          <Text style={styles.kurumsalText}>| kurumsal</Text>
        </View>

        <Formik
          initialValues={{ tckimlik: '', sifre: '' }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {props => (
            <View>
              <View style={styles.loginFrame}>
                {/* Welcome text */}
                <View style={styles.userBusinessView}>
                  <View style={styles.userView}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('UserLogin')}
                    >
                      <Image
                        style={styles.userImage}
                        source={require('../assets/user-32px.png')}
                      ></Image>
                      <Text style={styles.userText}>Bireysel</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.businessView}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('BusinessFirstLogin')}
                    >
                      <Image
                        style={styles.businessImage}
                        source={require('../assets/business-32px.png')}
                      ></Image>
                      <Text style={styles.businessText}>Kurumsal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Input fields */}
                <Image source={require('../assets/user-32px.png')}></Image>
                <View style={styles.inputContainer}>
                  <Input
                    id="firmaKod"
                    placeholder="Firma Kodu"
                    type="number"
                    containerStyle={{
                      borderRadius: 10,
                    }}
                    inputStyle={{ borderBottomWidth: 0 }}
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    onChangeText={props.handleChange('firmaKod')}
                    value={props.values.tckimlik}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                  />
                  <Divider
                    orientation="horizontal"
                    subHeaderStyle={{ color: 'black' }}
                    insetType="middle"
                  />
                  <Input
                    placeholder="Kullanıcı Kodu"
                    containerStyle={{
                      borderRadius: 10,
                      justifyContent: 'center',
                    }}
                    inputStyle={{
                      borderBottomWidth: 0,
                    }}
                    maxLength={6}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={props.handleChange('kullanıcıKod')}
                    value={props.values.sifre}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      justifyContent: 'center',
                    }}
                  />
                  <Divider
                    orientation="horizontal"
                    subHeaderStyle={{ color: 'black' }}
                    insetType="middle"
                  />
                  <Input
                    placeholder="Şifre"
                    secureTextEntry
                    type="password"
                    containerStyle={{
                      borderRadius: 10,
                    }}
                    inputStyle={{ borderBottomWidth: 0 }}
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    onChangeText={props.handleChange('sifre')}
                    value={props.values.tckimlik}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                  />
                </View>
              </View>
              <View style={styles.viewRememberMe}>
                <Text style={styles.textRememberMe}>Beni Hatırla</Text>
                <Switch
                  ios_backgroundColor="rgb(80,180,255)"
                  trackColor={{
                    false: 'rgb(50,250,255)',
                    true: 'rgb(101,214,255)',
                  }}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.switchRememberMe}
                  ios_backgroundColor="#65CCFF"
                />
              </View>
              <Button
                onPress={props.handleSubmit}
                title="Giriş"
                containerStyle={styles.button}
                buttonStyle={{
                  borderRadius: 22,
                  backgroundColor: 'rgb(0,114,188)',
                }}
              />
            </View>
          )}
        </Formik>

        <Text style={styles.forgotPassword}>Şifre Al/Şifremi Unuttum</Text>
        <View style={styles.emptyView}></View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  languageAndLogo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  loginFrame: {
    marginTop: Dimensions.get('window').width * (1 / 4),
    borderRadius: 10,
    backgroundColor: '#4CBEF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userBusinessView: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    marginTop: 15,
    width: Dimensions.get('window').width * (90 / 100),
    height: 44,
  },
  switchRememberMe: {
    marginLeft: 5,
  },
  viewRememberMe: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '95%',
  },
  textRememberMe: {
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: Dimensions.get('window').height,
    backgroundColor: BLUE,
  },
  inputContainer: {
    width: Dimensions.get('window').width * (90 / 100),
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgb(76, 190, 249)',
    backgroundColor: 'white',
  },

  languageStyle: {
    marginTop: 10,
    marginLeft: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  userImage: {
    width: 30,
    height: 30,
    opacity: 0.5,
    marginLeft: 20,
  },
  businessImage: {
    width: 30,
    height: 30,
    marginLeft: 25,
  },
  userView: {
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userText: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    opacity: 0.5,
  },
  businessText: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  businessView: {
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    marginTop: 30,
    color: 'white',
    width: '95%',
    textAlign: 'right',
    flex: 6,
  },
  emptyView: {
    flex: 3,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height,
  },
  kurumsalText: {
    color: 'white',
    marginTop: Dimensions.get('window').height * (1 / 20) + 20,
    marginRight: 70,
    fontSize: 17,
  },
});
