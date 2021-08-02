import React from 'react';
import { Image, Input, Button, Avatar } from 'react-native-elements';
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

const Login = () => {
  const [tc, setTc] = React.useState('');
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
        <View style={styles.languageAndLogo}>
          <Language title="TR" style={styles.languageStyle} />
          <Image
            source={require('../assets/img/yk-logo-3.png')}
            style={{
              width: 200,
              height: 50,
              marginTop: 40,
              marginBottom: 50,
              marginRight: 80,
            }}
          ></Image>
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
                    <Image
                      style={styles.userImage}
                      source={require('../assets/user-32px.png')}
                    ></Image>
                    <Text style={styles.userText}>Bireysel</Text>
                  </View>
                  <View style={styles.businessView}>
                    <Image
                      style={styles.businessImage}
                      source={require('../assets/buniness-32px.png')}
                    ></Image>
                    <Text style={styles.businessText}>Kurumsal</Text>
                  </View>
                </View>
                {/* Input fields */}
                <Image source={require('../assets/user-32px.png')}></Image>
                <View style={styles.inputContainer}>
                  <Input
                    placeholder="T.C. Kimlik No veya Kullanıcı Kodu"
                    autoFocus
                    type="number"
                    containerStyle={{
                      borderRadius: 10,
                    }}
                    inputStyle={{ borderBottomWidth: 0 }}
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    onChangeText={props.handleChange('tckimlik')}
                    value={props.values.tckimlik}
                  />
                  <Input
                    placeholder="Şifre"
                    type="password"
                    secureTextEntry
                    containerStyle={{
                      borderRadius: 10,
                    }}
                    inputStyle={{ borderBottomWidth: 0 }}
                    maxLength={6}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={props.handleChange('sifre')}
                    value={props.values.sifre}
                  />
                </View>
              </View>
              <View style={styles.viewRememberMe}>
                <Text style={styles.textRememberMe}>Beni Hatırla</Text>
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
    marginTop: 10,
  },

  loginFrame: {
    marginTop: Dimensions.get('window').width * (1 / 7),
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
    borderRadius: 10,
    borderColor: 'rgb(76, 190, 249)',
    backgroundColor: 'white',
  },

  languageStyle: {
    marginTop: 50,
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
    textDecorationLine: 'underline',
  },
  businessText: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    opacity: 0.5,
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
});
