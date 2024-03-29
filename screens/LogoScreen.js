import React from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DEVICE_HEIGHT } from '../lib/constants';

const LogoScreen = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(34,169,241,1)', 'rgba(5,136,218,1)']}
        style={styles.background}
      />
      <View style={styles.logoStyle}>
        <Image
          source={require('../assets/img/yk-logo-3.png')}
          style={{
            height: 100,
            width: 300,
            marginLeft: Dimensions.get('window').width / 2 - 150,
          }}
        ></Image>
      </View>
    </View>
  );
};

export default LogoScreen;

const styles = StyleSheet.create({
  logoStyle: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
    height: DEVICE_HEIGHT,
    paddingTop: DEVICE_HEIGHT * (200 / 100),
    paddingBottom: 30,
  },
});
