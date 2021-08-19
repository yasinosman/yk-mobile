import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getCurrentRouteName } from '../../utils';

const CryptoAlarms = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgArPic}
        source={require('../../assets/img/notification.png')}
      ></Image>
      <Text style={styles.noAlarm}>Alarmınız bulunmamaktadır.</Text>
      <TouchableOpacity style={styles.bottomView}>
        <Text style={styles.textStyle}>Alarm Kur</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CryptoAlarms;

const styles = StyleSheet.create({
  imgArPic: {
    height: 100,
    width: 100,
    bottom: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '80%',
    height: 70,
    backgroundColor: 'rgb(0,114,188)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 50, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Ubuntu',
  },
  alarmKur: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    textAlign: 'center',
  },
  noAlarm: {
    fontFamily: 'Ubuntu',
  },
});
