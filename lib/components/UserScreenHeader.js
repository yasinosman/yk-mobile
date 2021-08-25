import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants';

const YapiKrediLogo = ({}) => {
  const styles = StyleSheet.create({
    languageAndLogo: {
      flex: 1.2,
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
      flex: 3.2,
      marginTop: DEVICE_HEIGHT * (1 / 17),
    },
  });
  return (
    <View style={styles.languageAndLogo}>
      <View style={styles.languageView}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>TR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/img/yk-logo-3.png')}
          style={{
            width: 180,
            height: 50,
          }}
        ></Image>
      </View>
    </View>
  );
};
export default YapiKrediLogo;
