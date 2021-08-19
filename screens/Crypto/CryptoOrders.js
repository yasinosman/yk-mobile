import React from 'react';
import { Switch } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/Theme';
import { Icon } from 'react-native-elements';

const CryptoOrders = ({ navigation }) => {
  const { theme } = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
    },
    update: {
      width: '100%',
      height: 30,
      backgroundColor: theme.colors.gray,
    },
    updateText: {
      marginTop: 8,
      marginLeft: 20,
      fontFamily: 'Ubuntu',
      fontSize: 15,
      color: theme.colors.darkGray,
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
      color: theme.colors.blue,
    },
    protokolStyle: {
      fontFamily: 'Ubuntu',
      fontSize: 12,
      color: 'black',
      textDecorationColor: 'transparent',
      color: theme.colors.text,
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
      borderColor: theme.colors.blue,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: theme.colors.card,
    },
    inputStyle: {
      width: '90%',
      textAlign: 'right',
      fontFamily: 'Ubuntu',
      color: theme.colors.text,
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
      color: theme.colors.text,
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
      color: theme.colors.text,
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
  });

  return (
    <View style={styles.container}>
      <View style={styles.update}>
        <Text style={styles.updateText}>Sözleşme Bilgileri</Text>
      </View>
      <View style={styles.protokolContainer}>
        <Text style={styles.underlinedProtokol}>
          Kripto Alım Satım Emir Bırakma İşlemleri Ek{'\n'}Protokolü
          <Text style={styles.protokolStyle}>'nü okudum ve onaylıyorum.</Text>
        </Text>
        <Switch
          ios_backgroundColor="rgb(80,180,255)"
          trackColor={{
            false: 'rgb(50,250,255)',
            true: 'rgb(101,214,255)',
          }}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
      <View style={styles.update}>
        <Text style={styles.updateText}>
          Onaylanan Sözleşmenin Gönderileceği E-Posta
        </Text>
      </View>
      <Text style={styles.tutarText}>E-posta</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="E-posta"
          placeholderTextColor={theme.colors.text}
          style={styles.inputStyle}
        ></TextInput>
        <Image
          source={require('../../assets/img/ic_action_forward.png')}
          style={styles.forwardImage}
        ></Image>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.infoMessage}>
          <Icon
            name="info-circle"
            type="font-awesome-5"
            size={30}
            color={theme.colors.blue}
          />
          <Text style={styles.infoText}>
            Döviz alım satım emir işlemi yapabilmeniz için Döviz{'\n'}Alım Satım
            Emir Bırakma işlemleri Ek Protokolü'nü{'\n'}onaylamanız
            gerekmektedir.
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
