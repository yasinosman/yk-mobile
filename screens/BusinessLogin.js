import React, { useState } from 'react';
import { Image, Input, Button, Divider, Switch } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../lib/constants';
import { object, string } from 'yup';
import BusinessScreenHeader from '../lib/components/BusinessScreenHeader';
import NavBarComponent from '../lib/components/NavBarComponent';

const buttonClickedHandler = () => {
  console.log('Changed language');
};

const options = [
  {
    navigate: 'PİYASALAR Kurumsal',
    title: 'PİYASALAR',
  },
  {
    navigate: 'ATM/ŞUBE Kurumsal',
    title: 'ATM/ŞUBE',
  },
  {
    navigate: 'İLETİŞİM',
    title: 'İLETİŞİM',
  },
  {
    navigate: 'ARAÇLAR',
    title: 'ARAÇLAR',
  },
  {
    navigate: 'DAHA FAZLASI KURUMSAL',
    title: 'DAHA FAZLASI',
  },
];

const testValidationSchema = object().shape({
  firmakodu: string().matches(/^\d{10}$/, 'Firma kodu 10 haneli olmalıdır '),
  kullanicikodu: string().matches(
    /^\d{10}$/,
    'Kullanıcı kodu 10 haneli olmalıdır '
  ),
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
        <BusinessScreenHeader />
        <Formik
          initialValues={{ firmakodu: '', kullanicikodu: '', sifre: '' }}
          onSubmit={values => Console.log(value)}
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
                    <TouchableOpacity
                      style={styles.businessButton}
                      onPress={() => navigation.navigate('UserLoginFlex')}
                    >
                      <Image
                        style={styles.userImage}
                        source={require('../assets/user-32px.png')}
                      ></Image>
                      <Text style={styles.userText}>Bireysel</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.businessView}>
                    <Image
                      style={styles.businessImage}
                      source={require('../assets/business-32px.png')}
                    ></Image>
                    <Text style={styles.businessText}>Kurumsal</Text>
                  </View>
                </View>
                {/* Input Containers */}
                <Image source={require('../assets/user-32px.png')}></Image>
                <View style={styles.inputContainer}>
                  <Input
                    placeholder="Firma Kodu"
                    type="number"
                    containerStyle={{
                      borderRadius: 10,
                      flex: 0.8,
                      alignItems: 'stretch',
                    }}
                    // keyboardType="numeric"
                    inputStyle={{ borderBottomWidth: 0, fontFamily: 'Ubuntu' }}
                    maxLength={10}
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange('firmakodu')}
                    onBlur={handleBlur('firmakodu')}
                    value={values.firmakodu}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      justifyContent: 'center',
                    }}
                    disabled={loading}
                  />
                  {errors.firmakodu && touched.firmakodu && (
                    <Text style={styles.tckimlikErrorStyle}>
                      {errors.firmakodu}
                    </Text>
                  )}
                  <Divider
                    orientation="horizontal"
                    subHeaderStyle={{ color: 'black' }}
                    insetType="middle"
                  />
                  <Input
                    placeholder="Kullanıcı Kodu"
                    type="password"
                    secureTextEntry
                    containerStyle={{
                      borderRadius: 10,
                      flex: 0.8,
                    }}
                    inputStyle={{ borderBottomWidth: 0, fontFamily: 'Ubuntu' }}
                    maxLength={10}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={handleChange('kullanicikodu')}
                    onBlur={handleBlur('kullanicikodu')}
                    value={values.kullanicikodu}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    disabled={loading}
                  />
                  {errors.kullanicikodu && touched.kullanicikodu && (
                    <Text style={styles.tckimlikErrorStyle}>
                      {errors.kullanicikodu}
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
                    containerStyle={{
                      borderRadius: 10,
                      flex: 0.8,
                    }}
                    inputStyle={{ borderBottomWidth: 0, fontFamily: 'Ubuntu' }}
                    maxLength={6}
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange('sifre')}
                    onBlur={handleBlur('sifre')}
                    value={values.sifre}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    secureTextEntry
                    keyboardType="numeric"
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
                  <Text style={styles.textRememberMe}>Beni Hatırla </Text>
                  <Switch
                    trackColor={{
                      false: 'rgb(150, 150, 150)',
                      true: 'rgb(101,214,255)',
                    }}
                    ios_backgroundColor="rgb(216,224,237)"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                    thumbColor="white"
                  />
                </View>
              </View>
              <Button
                onPress={handleSubmit}
                title={loading ? 'Lütfen Bekleyin' : 'Giriş'}
                titleStyle={{ fontFamily: 'Ubuntu' }}
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
        <View
          style={{
            width: '92%',
            flex: 0.0000001,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginBottom: 15,
            opacity: 0.5,
          }}
        ></View>
        <View style={styles.navigationBar}>
          {options.map((option, index) => {
            return (
              <NavBarComponent
                key={index}
                navigation={navigation}
                navigate={option.navigate}
                title={option.title}
              />
            );
          })}
        </View>
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
    flex: 1.3,
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
    fontFamily: 'Ubuntu',
  },
  logoView: {
    flex: 5.5,
    flexDirection: 'row',
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
    flex: 2.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  userAndBusinessView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1.3,
  },
  userView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
    opacity: 0.5,
  },
  userText: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    opacity: 0.5,
    fontFamily: 'Ubuntu',
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
    fontFamily: 'Ubuntu',
    textDecorationLine: 'underline',
  },
  businessButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    flex: 1.5,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgb(76, 190, 249)',
    backgroundColor: 'white',
    width: '100%',
  },
  tckimlikErrorStyle: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    fontSize: 10,
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
    fontFamily: 'Ubuntu',
  },

  forgotPassword: {
    marginTop: 30,
    color: 'white',
    width: '85%',
    textAlign: 'right',
    flex: 1,
    opacity: 0.9,
    fontFamily: 'Ubuntu',
  },
  submitButton: {
    marginTop: 15,
    width: DEVICE_WIDTH * (85 / 100),
    height: 40,
    borderRadius: 22,
  },
  navigationBar: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  piyasalarImage: {
    width: 20,
    height: 20,
  },
  piyasalarView: {
    flex: 1,
  },
  piyasalarButton: {
    flex: 1,
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 9,
    marginTop: 5,
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  switch: {
    marginRight: 10,
  },
});
