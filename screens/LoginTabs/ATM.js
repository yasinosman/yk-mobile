import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Divider,
  ScrollView,
} from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';

const SifreM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BusinessLoginFlex')}
          style={styles.lessView}
        >
          <Image
            style={styles.imgArPic}
            source={require('../../assets/img/ic_action_backward.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>ATM / Şube</Text>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scrollView}>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <View style={styles.newStyle}>
              <Text style={styles.newAccountStyle}>QR Kod ile Bilet Al</Text>
              <View style={styles.yeniTextView}>
                <Text style={styles.yeniText}>Yeni</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Dilediğiniz şubeden sıra beklemeden QR kodu okutarak bilet
              alabilirsiniz.
            </Text>
          </View>
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
        <TouchableOpacity style={styles.optionBlue}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>En Yakın Yapı Kredi</Text>
            <Text style={styles.description}>
              En Yakın Yapı Kredi şube ve ATM'lerini görüntüyebilir,şube
              yoğunluklarını inceleyebilirsiniz.
            </Text>
          </View>
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
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
      </ScrollView>
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
  yeniTextView: {
    flex: 0.12,
    backgroundColor: 'rgba(255,84,51,255)',
    height: 15,
    borderRadius: 3,
    borderColor: 'rgba(255,84,51,255)',
    borderWidth: 1,
  },
  yeniText: {
    textAlign: 'center',
    height: 15,
    fontSize: 12,
    color: 'white',
    fontFamily: 'Ubuntu',
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
    flex: 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: 'Ubuntu',
  },
  scrollView: {
    flex: 10,
    width: '100%',
  },
  optionText: {
    flex: 2,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'UbuntuBold',
  },
  optionWhite: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionBlue: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245,246,250,255)',
  },
  lessView: {
    marginLeft: 10,
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleView: {
    flex: 7,
    textAlign: 'center',
    marginLeft: 40,
  },
  lessText: {
    marginLeft: 10,
    color: 'rgba(2,140,226,255)',
    fontSize: 30,
    fontFamily: 'Ubuntu',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Ubuntu',
  },
  description: {
    marginTop: 5,
    flex: 5,
    marginLeft: 20,
    fontSize: 12,
    marginRight: 10,
    opacity: 0.7,
    fontFamily: 'Ubuntu',
  },
  icons: {
    marginLeft: 25,
    width: 30,
    height: 30,
    tintColor: 'rgba(2,140,226,255)',
  },
  textView: {
    flex: 1,
    marginTop: 15,
  },
  newStyle: {
    flexDirection: 'row',
  },
  newAccountStyle: {
    flex: 0.85,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'UbuntuBold',
  },
});