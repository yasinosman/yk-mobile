import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEVICE_WIDTH } from '../../../lib/constants';
import { useTheme } from '../../../context/Theme';
import { MenuButton } from '../../../lib/components';

const Orders = ({ navigation, route }) => {
  const { theme } = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setEmail] = React.useState('selen.senturk@gmail.com');

  React.useEffect(() => {
    if (route.params) {
      if (route.params.email) {
        setEmail(route.params.email);
      }
    }
  }, [route]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
    },
    update: {
      width: '100%',
      height: 30,
      backgroundColor: theme.colors.seperator,
    },
    updateText: {
      marginTop: 8,
      marginLeft: 20,
      fontFamily: 'Ubuntu',
      fontSize: 15,
      color: theme.colors.text,
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
      <MenuButton
        containerStyles={{
          borderColor: theme.colors.blue,
          borderWidth: 0.7,
          borderRadius: 10,
          width: '90%',
          marginHorizontal: '5%',
          marginVertical: '2%',
        }}
        title={email}
        onPress={() =>
          navigation.navigate('E-Posta Seçimi', {
            title: 'E-Posta Seçimi',
            options: [
              {
                text: 'selen.senturk@gmail.com',
                navigation: {
                  to: 'Emirlerim',
                  params: {
                    email: 'selen.senturk@gmail.com',
                  },
                },
              },
              {
                text: 'selen.senturk@ykteknoloji.com.tr',
                navigation: {
                  to: 'Emirlerim',
                  params: {
                    email: 'selen.senturk@ykteknoloji.com.tr',
                  },
                },
              },
            ],
          })
        }
      />

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
          onPress={() => navigation.navigate('Hesap Seçimi')}
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

export default Orders;