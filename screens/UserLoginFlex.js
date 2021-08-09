import React from 'react';
import { Image, Input, Button, Divider } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { BLUE } from '../common/colors';
import { Switch } from 'react-native';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';
import { useState } from 'react';
import { object, string } from 'yup';
import { login } from '../services/authentication';

const buttonClickedHandler = () => {
  console.log('Changed language');
};

const testValidationSchema = object().shape({
  tckimlik: string().matches(/^\d{11}$/, 'TC kimlik no 11 haneli olmalıdır '),
  sifre: string().matches(/^\d{6}$/, 'Şifre 6 haneli olmalıdır'),
});

const Login = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        style={styles.container}
        colors={['rgba(34,169,241,1)', 'rgba(5,136,218,1)']}
      >
        <View style={styles.languageAndLogo}>
          <View style={styles.languageView}>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={buttonClickedHandler}
            >
              <Text style={styles.languageText}>TR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoView}>
            <Image
              source={require('../assets/img/yk-logo-3.png')}
              style={{
                width: 180,
                height: 50,
              }}
            ></Image>
          </View>
        </View>
        <Formik
          initialValues={{ tckimlik: '', sifre: '' }}
          onSubmit={values => {
            // login(values.tc, values.password).catch(error => {alert("Login hatası")})
            setLoading(true);
            login({
              nationalIdentity: values.tckimlik,
              password: values.sifre,
            })
              .then(() => {
                setLoading(false);
              })
              .catch(error => {
                alert(
                  'Lütfen giriş bilgilerinizi kontrol edip tekrar deneyin.'
                );
                setLoading(false);
              });
          }}
          validateOnMount={true}
          validationSchema={testValidationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
            errors,
            values,
            isValid,
          }) => (
            <View style={styles.loginWithoutButton}>
              <View style={styles.loginFrame}>
                <View style={styles.userAndBusinessView}>
                  <View style={styles.userView}>
                    <Image
                      style={styles.userImage}
                      source={require('../assets/user-32px.png')}
                    ></Image>
                    <Text style={styles.userText}>Bireysel</Text>
                  </View>
                  <View style={styles.businessView}>
                    <TouchableOpacity
                      style={styles.businessButton}
                      onPress={() => navigation.navigate('BusinessLogin')}
                    >
                      <Image
                        style={styles.businessImage}
                        source={require('../assets/buniness-32px.png')}
                      ></Image>
                      <Text style={styles.businessText}>Kurumsal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Input Containers */}
                <Image source={require('../assets/user-32px.png')}></Image>
                <View style={styles.inputContainer}>
                  <Input
                    placeholder="T.C. Kimlik No veya Kullanıcı Kodu"
                    type="number"
                    containerStyle={{
                      borderRadius: 10,
                      flex: 0.8,
                      alignItems: 'stretch',
                    }}
                    // keyboardType="numeric"
                    inputStyle={{ borderBottomWidth: 0 }}
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange('tckimlik')}
                    onBlur={handleBlur('tckimlik')}
                    value={values.tckimlik}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      justifyContent: 'center',
                    }}
                    disabled={loading}
                  />
                  {errors.tckimlik && touched.tckimlik && (
                    <Text style={styles.tckimlikErrorStyle}>
                      {errors.tcxkimlik}
                    </Text>
                  )}
                  <Divider
                    orientation="horizontal"
                    subHeaderStyle={{ color: 'black' }}
                    insetType="middle"
                  />
                  <Input
                    placeholder="Şifre"
                    type="password"
                    secureTextEntry
                    containerStyle={{
                      borderRadius: 10,
                      flex: 0.8,
                    }}
                    inputStyle={{
                      borderBottomWidth: 0,
                    }}
                    maxLength={6}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={handleChange('sifre')}
                    onBlur={handleBlur('sifre')}
                    value={values.sifre}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    disabled={loading}
                  />
                  {errors.sifre && touched.sifre && (
                    <Text style={styles.tckimlikErrorStyle}>
                      {errors.sifre}
                    </Text>
                  )}
                </View>
              </View>
              <View>
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
                  />
                </View>
              </View>
              <Button
                onPress={handleSubmit}
                title={loading ? 'Lütfen Bekleyin' : 'Giriş'}
                containerStyle={styles.submitButton}
                buttonStyle={{
                  borderRadius: 22,
                  backgroundColor: 'rgb(0,114,188)',
                }}
                disabled={loading}
              />
            </View>
          )}
        </Formik>
        <Text style={styles.forgotPassword}>Şifre Al/Şifremi Unuttum</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  languageAndLogo: {
    flex: 0.75,
    flexDirection: 'row',
  },
  languageView: {
    flex: 1,
    marginTop: DEVICE_HEIGHT * (1 / 20),
    marginLeft: DEVICE_WIDTH * (1 / 20),
  },
  languageButton: {
    borderWidth: 2,
    borderRadius: 100,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    marginTop: 14,
  },
  languageText: {
    fontSize: 13,
    color: 'white',
  },
  logoView: {
    flex: 3.2,
    marginTop: DEVICE_HEIGHT * (1 / 17),
  },
  loginFrame: {
    borderRadius: 10,
    backgroundColor: '#4CBEF9',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '85%',
  },
  loginWithoutButton: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  userAndBusinessView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1.2,
  },
  userView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
  },
  userText: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  businessView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  businessImage: {
    width: 30,
    height: 30,
  },
  businessText: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    opacity: 0.5,
  },
  businessButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgb(76, 190, 249)',
    backgroundColor: 'white',
    width: '100%',
  },
  tckimlikErrorStyle: {
    flex: 1,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  switchRememberMe: {
    marginLeft: 10,
  },
  viewRememberMe: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '85%',
  },
  textRememberMe: {
    color: 'white',
  },
  forgotPassword: {
    marginTop: 30,
    color: 'white',
    width: '85%',
    textAlign: 'right',
    flex: 1,
  },
  submitButton: {
    marginTop: 15,
    width: DEVICE_WIDTH * (85 / 100),
    height: 40,
    borderRadius: 22,
  },
});
