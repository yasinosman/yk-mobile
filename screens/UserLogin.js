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
        style={[styles.container, styles.background]}
        colors={['rgba(34,169,241,1)', 'rgba(5,136,218,1)']}
      >
        <View style={styles.languageAndLogo}>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={buttonClickedHandler}
          >
            <Text style={styles.languageText}>TR</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/img/yk-logo-3.png')}
            style={{
              width: 200,
              height: 50,
              marginTop: 70,
              marginBottom: 50,
              marginRight: 80,
            }}
          ></Image>
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
                    <TouchableOpacity
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
                {/* Input fields */}
                <Image source={require('../assets/user-32px.png')}></Image>
                <View style={styles.inputContainer}>
                  <Input
                    placeholder="T.C. Kimlik No veya Kullanıcı Kodu"
                    type="number"
                    containerStyle={{
                      borderRadius: 10,
                    }}
                    // keyboardType="numeric"
                    inputStyle={{ borderBottomWidth: 0 }}
                    maxLength={11}
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange('tckimlik')}
                    onBlur={handleBlur('tckimlik')}
                    value={values.tckimlik}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    disabled={loading}
                  />
                  {errors.tckimlik && touched.tckimlik && (
                    <Text style={styles.tckimlikErrorStyle}>
                      {errors.tckimlik}
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
                      justifyContent: 'center',
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
              <Button
                onPress={handleSubmit}
                title={loading ? 'Lütfen Bekleyin' : 'Giriş'}
                containerStyle={styles.button}
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
  languageAndLogo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 160,
  },
  languageStyle: {
    marginLeft: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginFrame: {
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
    width: DEVICE_WIDTH * (90 / 100),
    height: 40,
    borderRadius: 22,
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
    backgroundColor: BLUE,
    paddingTop: DEVICE_HEIGHT * (2 / 100),
    paddingBottom: 30,
    flex: 1,
  },
  inputContainer: {
    width: DEVICE_WIDTH * (90 / 100),
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgb(76, 190, 249)',
    backgroundColor: 'white',
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
  background: {
    height: DEVICE_HEIGHT,
  },
  tckimlikErrorStyle: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  languageButton: {
    borderRadius: 10,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 35,
  },
  languageText: {
    fontSize: 14,
    color: 'white',
  },
});
