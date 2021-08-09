import React from 'react';
import { Image, Input, Button, Divider } from 'react-native-elements';
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { Language } from '../components/Language';
import { Switch } from 'react-native';
import { Formik, useFormik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const [firmaKod, setFirmaKod] = React.useState('');
  const [kullanıcıKod, setKullanıcıKod] = React.useState('');
  const [password, setPassword] = React.useState('');
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
              marginLeft: 20,
              marginTop: 40,
              marginBottom: 50,
            }}
          ></Image>
          <Text style={styles.kurumsalText}>| kurumsal</Text>
          <Image
            style={styles.businessImage}
            source={require('../assets/business-32px.png')}
          ></Image>
        </View>
        <View style={styles.businessView_2}></View>
        <Formik
          initialValues={{ tckimlik: '', sifre: '' }}
          onChangeText={values => {}}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {props => (
            <View>
              <View style={styles.loginFrame}>
                {/* Welcome text */}
                <View style={styles.userBusinessView}>
                  <View style={styles.businessView}>
                    <Text style={styles.businessText}>Kurumsal Mobil</Text>
                  </View>
                </View>
                {/* Input fields */}
                <Image source={require('../assets/user-32px.png')}></Image>
                <View style={styles.inputContainer}>
                  <Input
                    id="firmaKod"
                    placeholder="Firma Kodu"
                    autoFocus
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
                    autoFocus
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
                <Text style={styles.textRememberMe}>Beni Hatırla!</Text>
                <Switch
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
    marginTop: Dimensions.get('window').height * (1 / 100),
  },

  loginFrame: {
    marginTop: Dimensions.get('window').width * (1 / 7),
    borderRadius: 10,
    backgroundColor: '#4CBEF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userBusinessView: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Dimensions.get('window').height * (1 / 100),
  },
  button: {
    marginTop: 15,
    width: Dimensions.get('window').width * (90 / 100),
    height: 40,
    borderRadius: 22,
  },
  switchRememberMe: {
    marginLeft: Dimensions.get('window').height * (1 / 100),
  },
  viewRememberMe: {
    marginTop: Dimensions.get('window').height * (1 / 100),
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
    marginTop: Dimensions.get('window').height * (1 / 20),
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
  },
  businessImage: {
    width: 30,
    height: 30,
    marginTop: Dimensions.get('window').height * (1 / 20),
    marginRight: Dimensions.get('window').height * (1 / 20) + 10,
  },

  businessText: {
    color: 'white',
    marginTop: 5,
    marginRight: 50,
    fontSize: 20,
  },
  businessView: {
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'white',
    width: '95%',
    textAlign: 'right',
    flex: 6,
  },
  emptyView: {
    flex: 3,
  },
  kurumsalText: {
    color: 'white',
    marginTop: Dimensions.get('window').height * (1 / 20) + 10,
    marginRight: 30,
    fontSize: 17,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height,
  },
});
