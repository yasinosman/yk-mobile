import React from 'react';
import { Icon, Button, Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../../../context/Theme';
import { MenuButton, Popup } from '../../../../lib/components';
import { getAccounts } from '../../../../services/accounts';
import { getWallets } from '../../../../services/wallets';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../../lib/constants';

const ChooseAccount = ({ navigation, route }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.bg,
      flex: 1,
    },
    titleContainer: {
      width: '100%',
      height: 30,
      backgroundColor: theme.colors.seperator,
    },
    title: {
      marginTop: 8,
      marginLeft: 20,
      fontFamily: 'Ubuntu',
      fontSize: 15,
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
    tiklayinizStyle: {
      color: theme.colors.blue,
      textDecorationLine: 'underline',
    },
    buttonContainer: {
      width: '100%',
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
    pickerInputContainer: {
      width: '100%',
      height: '10%',
      justifyContent: 'center',
    },
    pickerInput: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 40,
      width: '90%',
      marginHorizontal: '5%',
      backgroundColor: theme.colors.bg,
      borderWidth: 0.5,
      borderColor: theme.colors.blue,
      borderRadius: 10,
    },
    pickerInputText: {
      width: '90%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    pickerInputIcon: {
      width: '10%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1%',
    },
  });

  const [accounts, setAccounts] = React.useState([]);
  const [wallets, setWallets] = React.useState([]);

  const [withdrawAccount, setWithdrawAccount] = React.useState('');
  const [depositAccount, setDepositAccount] = React.useState('');

  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  async function fetchAllData() {
    try {
      setAccounts(await getAccounts());
      setWallets(await getWallets());
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchAllData();
  }, []);

  React.useEffect(() => {
    if (route.params) {
      if (route.params.depositAccount) {
        setDepositAccount(route.params.depositAccount);
      }
      if (route.params.withdrawAccount) {
        setWithdrawAccount(route.params.withdrawAccount);
      }
    }
  }, [route.params]);

  const handleNext = () => {
    if (withdrawAccount === '') {
      setError(
        "İşlemi tamamlamak için Paranın Çekileceği Ödeme Aracı'nı seçmeniz gerekmektedir."
      );
    } else if (depositAccount === '') {
      setError(
        "İşlemi tamamlamak için Paranın Yatırılacağı Ödeme Aracı'nı seçmeniz gerekmektedir."
      );
    } else {
      setSuccess('Emir verme işleminiz başarıyla tamamlanmıştır.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Paranın Çekileceği Ödeme Aracı</Text>
      </View>

      <View style={styles.pickerInputContainer}>
        <MenuButton
          title={withdrawAccount?.name ?? 'Hesap seçiniz'}
          startingIcon={
            withdrawAccount && withdrawAccount.icon ? (
              <Icon
                name={withdrawAccount.icon.name}
                type={withdrawAccount.icon.type}
                size={22}
                color={theme.colors.orange}
              />
            ) : withdrawAccount.image_url ? (
              <Image
                source={{
                  uri: withdrawAccount.image_url,
                }}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            ) : null
          }
          containerStyles={styles.pickerInput}
          textContainerStyles={[
            styles.pickerInputText,
            { width: withdrawAccount !== '' ? '80%' : '90%' },
          ]}
          iconContainerStyles={styles.pickerInputIcon}
          onPress={() => {
            navigation.navigate('Ödeme Aracı Seçimi', {
              options: accounts
                .map(account => ({
                  text: `${account.name} (${account.number})`,
                  image: {
                    uri: account.image_url,
                    size: 30,
                  },
                  navigation: {
                    to: 'Hesap Seçimi',
                    params: {
                      withdrawAccount: account,
                    },
                  },
                }))
                .concat(
                  wallets.map(wallet => ({
                    text: `${wallet.name} (${wallet.number})`,
                    startingIcon: {
                      name: wallet.icon.name,
                      type: wallet.icon.type,
                      color: theme.colors.orange,
                      size: 22,
                    },
                    navigation: {
                      to: 'Hesap Seçimi',
                      params: {
                        withdrawAccount: wallet,
                      },
                    },
                  }))
                ),
            });
          }}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Paranın Yatırılacağı Ödeme Aracı</Text>
      </View>

      <View style={styles.pickerInputContainer}>
        <MenuButton
          title={depositAccount?.name ?? 'Hesap seçiniz'}
          startingIcon={
            depositAccount && depositAccount.icon ? (
              <Icon
                name={depositAccount.icon.name}
                type={depositAccount.icon.type}
                size={22}
                color={theme.colors.orange}
              />
            ) : depositAccount.image_url ? (
              <Image
                source={{
                  uri: depositAccount.image_url,
                }}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            ) : null
          }
          containerStyles={styles.pickerInput}
          textContainerStyles={[
            styles.pickerInputText,
            { width: depositAccount !== '' ? '80%' : '90%' },
          ]}
          iconContainerStyles={styles.pickerInputIcon}
          onPress={() => {
            navigation.navigate('Ödeme Aracı Seçimi', {
              options: accounts
                .map(account => ({
                  text: `${account.name} (${account.number})`,
                  image: {
                    uri: account.image_url,
                    size: 30,
                  },
                  navigation: {
                    to: 'Hesap Seçimi',
                    params: {
                      depositAccount: account,
                    },
                  },
                }))
                .concat(
                  wallets.map(wallet => ({
                    text: `${wallet.name} (${wallet.number})`,
                    startingIcon: {
                      name: wallet.icon.name,
                      type: wallet.icon.type,
                      color: theme.colors.orange,
                      size: 22,
                    },
                    navigation: {
                      to: 'Hesap Seçimi',
                      params: {
                        depositAccount: wallet,
                      },
                    },
                  }))
                ),
            });
          }}
        />
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
            Farklı döviz cinsinden işlem yapmak için ilgili döviz cinsinden
            {'\n'}vadesiz hesap seçiniz. Hesap açılışı yapmak için{' '}
            <Text style={styles.tiklayinizStyle}>tıklayınız.</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'Devam'}
            buttonStyle={styles.button}
            onPress={handleNext}
          />
        </View>
      </View>

      <Popup
        type="error"
        open={error !== ''}
        title="Hata"
        text={error}
        onClose={() => setError('')}
        styleOverrides={{
          container: {
            height: DEVICE_HEIGHT * (30 / 100),
            width: DEVICE_WIDTH * (3 / 4),
          },
        }}
      />

      <Popup
        type="success"
        open={success !== ''}
        title="İşlem Başarılı"
        text={success}
        onClose={() => setSuccess('')}
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

export default ChooseAccount;
