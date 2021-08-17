import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getCurrentRouteName } from '../../utils';
import { PopupScreen } from './Popup';

const CryptoAlarms = ({ navigation }) => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgArPic}
        source={require('../../assets/img/notification.png')}
      ></Image>
      <Text style={styles.noAlarm}>Alarmınız bulunmamaktadır.</Text>
      <TouchableOpacity style={styles.bottomView} onPress={onShowPopup}>
        <Text style={styles.textStyle}>Alarm Kur</Text>
      </TouchableOpacity>
      <PopupScreen
        title="Alarm Kur"
        ref={target => (popupRef = target)}
        onTouchOutside={onClosePopup}
      />
    </View>
  );
};

export default CryptoAlarms;

const styles = StyleSheet.create({
  imgArPic: {
    height: 100,
    width: 100,
    bottom: 30,
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
