import React from 'react';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

const CryptoCrossTransactions = ({ route }) => {
  const { cryptoPair } = route.params;
  return (
    <View style={styles.container}>
      {/* Son Güncelleme */}
      <View style={styles.update}>
        <Text style={styles.updateText}>İşlem Yapılacak Kripto Bilgisi</Text>
      </View>
      <View style={styles.coinView} justifyContent="space-evenly" height="14%">
        <Text style={styles.cryptoPair}>{cryptoPair}</Text>
        <Text style={styles.updateTime}>
          Kurun güncellemesi için kalan süre:{' '}
        </Text>
      </View>
      <View style={styles.update}>
        <Text style={styles.updateText}>Paranın Çekileceği Kripto Hesap</Text>
      </View>
      <View style={styles.coinView}>
        <View style={styles.accountView}>
          <View style={styles.accountTypeAndNumber}>
            <View style={styles.accountTitleNumber}>
              <Text style={styles.accountTitleText}>BTC Hesabım</Text>
              <Text style={styles.ubuntu}>78197399</Text>
            </View>
            <View style={styles.accountType}>
              <Text style={styles.ubuntu}>Vadesiz</Text>
              <Image
                style={styles.arrowText}
                source={require('../../assets/img/ic_action_forward.png')}
              ></Image>
            </View>
          </View>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLeft}>Kullanılabilir Bakiye</Text>
            <Text style={styles.balanceNumber}>0,00 TRY</Text>
          </View>
        </View>
      </View>
      <View style={styles.update}>
        <Text style={styles.updateText}>Paranın Yatırılacağı Kripto Hesap</Text>
      </View>
      <View style={styles.coinView} height="7.5%">
        <View style={styles.infoMessage}>
          <Image
            source={require('../../assets/info.jpg')}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>
            Kripto hesabınız otomatik olarak açılacaktır.
          </Text>
        </View>
      </View>
      <View style={styles.update}>
        <Text style={styles.updateText}>İşlem Bilgileri</Text>
      </View>
      <View style={styles.coinView} height="23%">
        <Text style={styles.tutarText}>Tutar</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="0,00 BTC"
            style={styles.inputStyle}
          ></TextInput>
          <Image
            source={require('../../assets/img/ic_action_forward.png')}
            style={styles.forwardImage}
          ></Image>
        </View>
        <Text style={styles.tutarText}>Tutar</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="0,00 BTC"
            style={styles.inputStyle}
          ></TextInput>
          <Image
            source={require('../../assets/img/ic_action_forward.png')}
            style={styles.forwardImage}
          ></Image>
        </View>
      </View>
      <View style={styles.empty}></View>
    </View>
  );
};

export default CryptoCrossTransactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  update: {
    width: '100%',
    height: 30,
    backgroundColor: 'rgba(244,247,250,255)',
  },
  updateText: {
    marginTop: 8,
    marginLeft: 15,
    fontFamily: 'Ubuntu',
  },
  updateTime: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    alignSelf: 'center',
  },
  coinView: {
    backgroundColor: 'white',
    height: '15%',
    justifyContent: 'center',
  },
  cryptoPair: {
    fontSize: 20,
    fontFamily: 'Ubuntu',
    marginLeft: '5%',
  },
  accountView: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 90,
    marginLeft: '5%',
  },

  accountTypeAndNumber: {
    marginLeft: '5%',
    flexDirection: 'row',
  },
  accountTitleNumber: {
    alignItems: 'center',
    flex: 3,
    marginTop: 10,
  },
  accountTitleText: {
    fontFamily: 'UbuntuBold',
    fontSize: 20,
  },
  accountType: {
    marginTop: 10,
    flex: 1,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  balanceLeft: {
    fontFamily: 'Ubuntu',
    marginLeft: 15,
  },
  balanceNumber: {
    fontFamily: 'Ubuntu',
    marginRight: 15,
  },
  arrowText: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 2,
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
  tutarText: {
    marginLeft: '5%',
    fontFamily: 'Ubuntu',
    fontSize: 16,
    marginBottom: 5,
  },
  inputView: {
    height: 40,
    width: '90%',
    marginLeft: '5%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    width: '90%',
    textAlign: 'right',
    fontFamily: 'Ubuntu',
  },
  forwardImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  ubuntu: {
    fontFamily: 'Ubuntu',
  },
  empty: {
    height: 200,
    backgroundColor: 'white',
  },
});
