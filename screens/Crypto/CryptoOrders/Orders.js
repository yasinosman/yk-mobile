import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button, Switch } from 'react-native-elements';
import { useTheme } from '../../../context/Theme';
import { MenuButton, Popup } from '../../../lib/components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../lib/constants';

const Orders = ({ navigation, route }) => {
  const { theme } = useTheme();

  const [isAgreed, setIsAgreed] = useState(false);
  const toggleAgreementSwitch = () =>
    setIsAgreed(previousState => !previousState);
  const [error, setError] = React.useState('');
  const [protocolPopupOpen, setProtocolPopupOpen] = React.useState(false);
  const [email, setEmail] = React.useState('selen.senturk@gmail.com');

  React.useEffect(() => {
    if (route.params) {
      if (route.params.email) {
        setEmail(route.params.email);
      }
    }
  }, [route]);

  const handleNext = () => {
    if (!isAgreed) {
      setError(
        "Devam etmek için Kripto Alım Satım Emir Bırakma İşlemleri Ek Protokolü'nü onaylamanız gerekmektedir. "
      );
    } else {
      navigation.navigate('Hesap Seçimi');
    }
  };

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
      color: theme.colors.blue,
    },
    protokolStyle: {
      fontFamily: 'Ubuntu',
      fontSize: 12,
      color: 'black',
      textDecorationColor: 'transparent',
      color: theme.colors.text,
      marginLeft: 20,
    },
    switch: {
      marginRight: theme.sizes.padding * 2,
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
      alignItems: 'center',
      width: '100%',
    },
    infoText: {
      fontFamily: 'UbuntuLight',
      marginLeft: 5,
      fontSize: 12,
      opacity: 0.8,
      color: theme.colors.text,
    },
    bottomBar: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 30,
      width: '90%',
      marginHorizontal: '5%',
      flex: 1,
    },
    button: {
      backgroundColor: theme.colors.blue,
      borderWidth: 1,
      borderRadius: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.update}>
        <Text style={styles.updateText}>Sözleşme Bilgileri</Text>
      </View>
      <View
        style={[
          styles.protokolContainer,
          {
            marginVertical: theme.sizes.padding * 2,
          },
        ]}
      >
        <TouchableOpacity onPress={() => setProtocolPopupOpen(true)}>
          <Text style={[styles.protokolStyle]}>
            <Text style={[styles.underlinedProtokol]}>
              Kripto Alım Satım Emir Bırakma İşlemleri Ek{'\n'}Protokolü
            </Text>
            'nü okudum ve onaylıyorum.
          </Text>
        </TouchableOpacity>
        <Switch
          trackColor={{
            false: theme.colors.seperator,
            true: theme.colors.blue,
          }}
          ios_backgroundColor={theme.colors.seperator}
          onValueChange={toggleAgreementSwitch}
          value={isAgreed}
          style={styles.switch}
          thumbColor="white"
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
          marginTop: theme.sizes.padding * 2,
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
            Kripto alım satım emir işlemi yapabilmeniz için Kripto{'\n'}Alım
            Satım Emir Bırakma işlemleri Ek Protokolü'nü{'\n'}onaylamanız
            gerekmektedir.
          </Text>
        </View>
        <View style={{ width: '100%' }}>
          <Button
            onPress={handleNext}
            title="Devam"
            buttonStyle={styles.button}
          />
        </View>
      </View>

      <Popup
        type="error"
        open={error !== ''}
        title="Hata"
        text={error?.message ?? error}
        onClose={() => setError('')}
        styleOverrides={{
          container: {
            height: DEVICE_HEIGHT * (30 / 100),
            width: DEVICE_WIDTH * (3 / 4),
          },
        }}
      />

      <Popup
        type="info"
        open={protocolPopupOpen}
        title="Protokol Detayları"
        text={'Kripto Alım Satım Emir Bırakma İşlemleri Ek Protokolü'}
        onClose={() => setProtocolPopupOpen(false)}
        styleOverrides={{
          container: {
            height: DEVICE_HEIGHT * (30 / 100),
            width: DEVICE_WIDTH * (3 / 4),
          },
        }}
      />
    </View>
  );
};

export default Orders;
