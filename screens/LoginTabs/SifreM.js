import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Divider,
} from 'react-native';

const SifreM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserLoginFlex')}
          style={styles.lessView}
        >
          <Image
            style={styles.imgArPic}
            source={require('../../assets/img/ic_action_backward.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Şifre Merkezi</Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          width: '100%',
          flex: 0.0000001,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          opacity: 0.1,
        }}
      ></View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.sifreBelirleme}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <Text style={styles.optionText}>Mobil Şifre Belirleme</Text>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.kartSifreBelirleme}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <Text style={styles.optionText}>Kart Şifre Belirleme</Text>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
      </View>
      <View style={styles.empty}></View>
    </View>
  );
};
export default SifreM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgArPic: {
    height: 36,
    width: 20,
    resizeMode: 'contain',
  },
  arrowText: {
    marginRight: 18,
    height: 36,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  optionText: {
    flex: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 17,
  },
  options: {
    flex: 2.5,
    width: '100%',
  },
  sifreBelirleme: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  kartSifreBelirleme: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245,246,250,255)',
  },
  lessView: {
    marginLeft: 10,
    flex: 2.5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleView: {
    flex: 5,
  },
  lessText: {
    marginLeft: 10,
    color: 'rgba(2,140,226,255)',
    fontSize: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
  },
  empty: {
    flex: 12,
  },
  icons: {
    marginLeft: 25,
    width: 30,
    height: 30,
  },
});
