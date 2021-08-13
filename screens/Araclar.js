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
            source={require('../assets/img/ic_action_backward.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Araçlar</Text>
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
            source={require('../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Mevduat Faizi Hesaplama</Text>
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
            <Text style={styles.optionText}>Döviz Hesaplama</Text>
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
            <Text style={styles.optionText}>Esnek Hesap Hesaplama</Text>
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
    flex: 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 10,
    width: '100%',
  },
  optionText: {
    flex: 1,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 17,
  },
  optionWhite: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionBlue: {
    flex: 1,
    height: 60,
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
    textAlign: 'center',
    marginLeft: 40,
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
  icons: {
    marginLeft: 25,
    width: 30,
    height: 30,
    tintColor: 'rgba(2,140,226,255)',
  },
  textView: {
    flex: 1,
    marginTop: 20,
  },
});
