import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useTheme } from '../../../context/Theme';
import { Popup, StyledText } from '../../../lib/components';
import MenuButton from '../../../lib/components/MenuButton';
import InputWithLabel from '../../../lib/components/InputWithLabel';
import { Icon, Button } from 'react-native-elements';
import { CRYPTO_CURRENCIES, EXCHANGE_RATES } from '../../../hooks/useCurrency';
import { DEVICE_HEIGHT } from '../../../lib/constants';
import { createAlarm } from '../../../services/alarms';

const NewAlarm = ({ navigation, route }) => {
  const { theme } = useTheme();
  const [option, setOption] = React.useState('buy');
  const [selectedParity, setSelectedParity] = React.useState('');

  React.useEffect(() => {
    if (route.params) {
      if (route.params.text) {
        setSelectedParity(route.params.text);
      }
    }
  }, [route]);

  const [targetValue, setTargetValue] = React.useState('');

  React.useEffect(() => {
    if (selectedParity !== '') {
      const buyingCurrency = selectedParity.split('/')[0].toLowerCase();
      const sellingCurrency = selectedParity.split('/')[1].toLowerCase();

      if (option === 'sell') {
        setTargetValue(
          parseFloat(EXCHANGE_RATES[buyingCurrency][sellingCurrency])
            .toFixed(6)
            .toString()
        );
      } else if (option === 'buy') {
        setTargetValue(
          parseFloat(EXCHANGE_RATES[buyingCurrency][sellingCurrency] * 0.85)
            .toFixed(6)
            .toString()
        );
      }
    }
  }, [selectedParity, option]);

  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSave = async () => {
    setLoading(true);

    if (selectedParity === '') {
      setError(
        'İşleminize devam etmek için kripto çifti seçmeniz gerekmektedir.'
      );
      setLoading(false);
    } else if (targetValue === '') {
      setError('İşleminize devam etmek için hedef kur girmeniz gerekmektedir.');
      setLoading(false);
    } else {
      try {
        await createAlarm(selectedParity, targetValue, option);

        setSuccess('Kripto al/sat alarmınız başarıyla oluşturuldu.');
      } catch (error) {
        setError(
          'İşleminiz yapılırken bir hata meydana geldi. Lütfen daha sonra tekrar deneyin.'
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.bg,
      width: '100%',
      height: '100%',
    },
    container: {
      width: '90%',
      height: '15%',
      marginHorizontal: '5%',
      justifyContent: 'center',
    },
    infoMessage: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingLeft: theme.sizes.padding,
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
      paddingBottom: 30,
      width: '90%',
      marginHorizontal: '5%',
      flex: 1,
    },
    submitButton: {
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.container,
            { paddingHorizontal: theme.sizes.inputPadding },
          ]}
        >
          <StyledText
            style={{
              padding: theme.sizes.inputPadding,
            }}
          >
            Kripto Çiftleri
          </StyledText>
          <MenuButton
            title={selectedParity !== '' ? selectedParity : 'Seçiniz'}
            containerStyles={{
              width: '100%',
              height: 40,
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: theme.colors.blue,
              backgroundColor: theme.colors.card,
            }}
            iconContainerStyles={{
              width: '10%',
            }}
            textContainerStyles={{ width: '90%' }}
            onPress={() => {
              let options = [];
              CRYPTO_CURRENCIES.forEach(currency =>
                CRYPTO_CURRENCIES.forEach(cu => {
                  if (cu.value !== currency.value) {
                    options.push({
                      currency1: currency.value,
                      currency2: cu.value,
                      text: `${currency.value.toUpperCase()}/${cu.value.toUpperCase()}`,
                    });
                  }
                })
              );
              navigation.navigate('Kripto Çiftleri', {
                allowSearch: true,
                options: options.map(option => ({
                  text: option.text,
                  navigation: {
                    to: 'Alarm Kur',
                    params: {
                      ...option,
                    },
                  },
                })),
              });
            }}
          />
        </View>
        <View
          style={[
            styles.container,
            {
              height: '7%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: theme.sizes.inputPadding,
            },
          ]}
        >
          <MenuButton
            title="Banka Alış"
            onPress={() => setOption('buy')}
            containerStyles={{
              width: '50%',
              borderWidth: 0.5,
              borderColor: theme.colors.blue,
              height: 40,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor:
                option === 'buy' ? theme.colors.blue : theme.colors.card,
            }}
            textContainerStyles={{
              width: '100%',
              alignItems: 'center',
              marginRight: 7,
            }}
            iconContainerStyles={{ width: 0 }}
            textStyles={{
              color: option === 'buy' ? 'white' : theme.colors.blue,
            }}
            trailingIcon={null}
          />
          <MenuButton
            title="Banka Satış"
            onPress={() => setOption('sell')}
            containerStyles={{
              width: '50%',
              borderWidth: 0.5,
              borderColor: theme.colors.blue,
              height: 40,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor:
                option === 'sell' ? theme.colors.blue : theme.colors.card,
            }}
            textContainerStyles={{
              width: '100%',
              alignItems: 'center',
              marginRight: 7,
            }}
            iconContainerStyles={{ width: 0 }}
            textStyles={{
              color: option === 'sell' ? 'white' : theme.colors.blue,
            }}
            trailingIcon={null}
          />
        </View>
        <View style={styles.container}>
          <InputWithLabel
            title="Hedef Kur"
            label="Hedef Kur"
            inputKeyboardType="numeric"
            inputPlaceholder="0,00"
            inputValue={targetValue}
            setInputValue={setTargetValue}
            styleOverrides={{
              input: {
                textAlign: 'right',
              },
              inputContainer: {
                backgroundColor: theme.colors.card,
                height: 40,
                justifyContent: 'center',
              },
            }}
          />
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.infoMessage}>
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={20}
              color={theme.colors.blue}
            />
            <StyledText style={styles.infoText}>
              Alarmınız bir yıl sonra otomatik olarak silenecektir.
            </StyledText>
          </View>
          <View style={{ width: '100%' }}>
            <Button
              onPress={handleSave}
              disabled={loading}
              title={loading ? 'Lütfen Bekleyin' : 'Alarmı Kaydet'}
              buttonStyle={styles.submitButton}
            />
          </View>
        </View>

        <Popup
          type="success"
          open={success !== ''}
          title="İşlem Tamamlandı"
          text={success}
          onClose={() => setSuccess('')}
          styleOverrides={{ container: { height: DEVICE_HEIGHT * (3 / 10) } }}
          buttons={[
            <TouchableOpacity
              style={{
                width: '95%',
                borderRadius: 22,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '2.5%',
                height: 40,
                backgroundColor: theme.colors.blue,
                borderWidth: 0.5,
                borderColor: 'white',
              }}
              key={1}
              onPress={() => {
                setSuccess('');
                navigation.navigate('Alarmlarım', {
                  last_update: new Date().toString(),
                });
              }}
            >
              <StyledText
                style={{ color: 'white', fontSize: theme.sizes.text }}
              >
                Alarmlarıma Dön
              </StyledText>
            </TouchableOpacity>,
            <TouchableOpacity
              style={{
                width: '95%',
                borderRadius: 22,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '2.5%',
                height: 40,
                backgroundColor: 'white',
                borderWidth: 0.5,
                borderColor: theme.colors.blue,
                marginTop: theme.sizes.padding,
              }}
              key={2}
              onPress={() => {
                setSuccess('');
              }}
            >
              <StyledText
                style={{ color: theme.colors.blue, fontSize: theme.sizes.text }}
              >
                Devam
              </StyledText>
            </TouchableOpacity>,
          ]}
        />
        <Popup
          type="error"
          open={error !== ''}
          title="Hata"
          text={error?.message ?? error}
          onClose={() => setError('')}
          styleOverrides={{ container: { height: DEVICE_HEIGHT * (25 / 100) } }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default NewAlarm;
