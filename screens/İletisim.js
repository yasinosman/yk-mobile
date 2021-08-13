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
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';

const İletisim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BusinessLoginFlex')}
          style={styles.lessView}
        >
          <Image
            style={styles.imgArPic}
            source={require('../assets/img/ic_action_backward.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>İletişim</Text>
        </View>
      </SafeAreaView>

      <View style={styles.imageView}>
        <Image
          source={require('../assets/iletisim.jpg')}
          style={styles.imageStyle}
        />
      </View>
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
            source={require('../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Yapı Kredi'yi Ara</Text>
            <Text style={styles.description}>
              Ürün ve hizmetlerimizle ilgili şikayet, talep ve önerileriniz için
              bizi arayabilirsiniz.
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../assets/img/ic_action_forward.png')}
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
            source={require('../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>@YapiKrediHizmet</Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../assets/img/ic_action_forward.png')}
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
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Yapı Kredi</Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../assets/img/ic_action_forward.png')}
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
      </ScrollView>
    </View>
  );
};
export default İletisim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imageView: {
    flex: 0.249,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 946 / 2.4,
    height: 361 / 2,
    flex: 1,
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
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  optionText: {
    flex: 0.4,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 11,
  },
  optionWhite: {
    flex: 1,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionBlue: {
    flex: 1,
    height: 80,
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
    flex: 3.5,
  },
  lessText: {
    marginLeft: 10,
    color: 'rgba(2,140,226,255)',
    fontSize: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
  },
  icons: {
    marginLeft: 25,
    width: 30,
    height: 30,
    tintColor: 'rgba(2,140,226,255)',
  },
  textView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 14,
    marginRight: 10,
    marginTop: 5,
    opacity: 0.7,
  },
  newStyle: {
    flexDirection: 'row',
  },
  yeniTextView: {
    flex: 0.12,
    backgroundColor: 'rgba(255,84,51,255)',
    height: 15,
    borderRadius: 3,
    borderColor: 'rgba(255,84,51,255)',
    borderWidth: 1,
    marginTop: 18,
  },
  yeniText: {
    textAlign: 'center',
    height: 15,
    fontSize: 12,
    color: 'white',
  },
  newAccountStyle: {
    flex: 0.85,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 18,
  },
});
