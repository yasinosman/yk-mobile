import React from 'react';
import { Switch } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CryptoOrders = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedValue, setSelectedValue] = useState('Hesap seçiniz');

  return (
    <View style={styles.container}>
      <View style={styles.update}>
        <Text style={styles.updateText}>Paranın Çekileceği Ödeme Aracı</Text>
      </View>
      <Text style={styles.tutarText}>Paranın Çekileceği Ana Hesap</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Hesap seçiniz"
          style={styles.inputStyle}
        ></TextInput>
        <Image
          source={require('../../assets/img/ic_action_forward.png')}
          style={styles.forwardImage}
        ></Image>
      </View>
      <View style={styles.update}>
        <Text style={styles.updateText}>Paranın Yatırılacağı Hesap</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Hesap seçiniz"
          style={styles.inputStyle}
        ></TextInput>
        <Image
          source={require('../../assets/img/ic_action_forward.png')}
          style={styles.forwardImage}
        ></Image>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.infoMessage}>
          <Image
            source={require('../../assets/info.jpg')}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>
            Farklı döviz cinsinden işlem yapmak için ilgili döviz cinsinden
            {'\n'}vadesiz hesap seçiniz. Hesap açılışı yapmak için{' '}
            <Text style={styles.tiklayinizStyle}>tıklayınız.</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Kripto Emirlerim Hesaplar')}
          style={{
            backgroundColor: 'rgba(5,136,217,255)',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '5%',
            marginTop: 10,
            borderRadius: 22,
            height: 40,
          }}
        >
          <Text
            style={{
              fontFamily: 'Ubuntu',
              fontSize: 20,
              color: 'white',
            }}
          >
            Devam
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CryptoOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  update: {
    width: '100%',
    height: 30,
    backgroundColor: 'rgba(244,247,250,255)',
  },
  updateText: {
    marginTop: 8,
    marginLeft: 20,
    fontFamily: 'Ubuntu',
    fontSize: 15,
  },
  protokolContainer: {
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  underlinedProtokol: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    color: 'rgba(136,205,224,255)',
    textDecorationLine: 'underline',
    marginLeft: 20,
  },
  protokolStyle: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    color: 'black',
    textDecorationColor: 'transparent',
  },
  switch: {
    width: 20,
    height: 20,
    marginRight: 50,
  },
  inputView: {
    height: 40,
    width: '90%',
    marginLeft: '5%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  inputStyle: {
    fontFamily: 'Ubuntu',
    marginLeft: 10,
  },
  forwardImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  tutarText: {
    marginLeft: '5%',
    fontFamily: 'Ubuntu',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
  },
  infoImage: {
    width: 32,
    height: 32,
  },
  infoMessage: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 20,
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'UbuntuLight',
    marginLeft: 5,
    fontSize: 12,
    opacity: 0.8,
  },
  bottomBar: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 30,
  },
  submitButton: {
    marginTop: 15,
    width: DEVICE_WIDTH * (85 / 100),
    height: 40,
    borderRadius: 22,
  },
  tiklayinizStyle: {
    color: 'rgba(136,205,224,255)',
    textDecorationLine: 'underline',
  },
});
