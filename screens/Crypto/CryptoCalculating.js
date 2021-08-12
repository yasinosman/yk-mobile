import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import StyledText from '../../components/StyledText';
import { Picker } from '@react-native-picker/picker';
import { CURRENCY_DICTIONARY } from '../../hooks/useCurrency';
import { convertCurrency, formatAmount } from '../../utils';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import { useTheme } from '../../context/Theme';
import { TextInput } from 'react-native';

const CryptoCalculating = () => {
  const [sellingAmount, setSellingAmount] = React.useState('1000');
  const [sellingCurrency, setSellingCurrency] = React.useState('try');
  const [buyingAmount, setBuyingAmount] = React.useState('0');
  const [buyingCurrency, setBuyingCurrency] = React.useState('usd');

  React.useEffect(() => {
    setBuyingAmount(
      formatAmount(
        convertCurrency(sellingCurrency, sellingAmount, buyingCurrency)
      )
        .toString()
        .replace(/\,$/, '')
    );
  }, [sellingCurrency, sellingAmount, buyingCurrency]);

  const switchCurrencies = () => {
    setSellingCurrency(buyingCurrency);
    setBuyingCurrency(sellingCurrency);
  };

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      height: DEVICE_HEIGHT,
      backgroundColor: theme.colors.bg,
      alignItems: 'center',
    },
    container: {
      width: '95%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: (DEVICE_HEIGHT * 1) / 100,
    },
    title: {
      fontSize: 18,
      marginTop: (DEVICE_HEIGHT * 3) / 100,
      marginBottom: (DEVICE_HEIGHT * 1) / 100,
      marginLeft: DEVICE_WIDTH * (2 / 100),
    },
    numericInput: {
      height: (DEVICE_HEIGHT * 5) / 100,
      width: '55%',
      textAlign: 'right',
      color: theme.colors.text,
      borderWidth: 0.4,
      borderColor: theme.colors.blue,
      borderRadius: 10,
      paddingRight: 10,
      fontFamily: 'Ubuntu',
      fontSize: 18,
    },
    pickerInputContainer: {
      width: '40%',
      borderWidth: 0.4,
      borderColor: theme.colors.blue,
      borderRadius: 10,
      height: (DEVICE_HEIGHT * 5) / 100,
      padding: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginLeft: 'auto',
      marginRight: '15%',
      marginTop: (DEVICE_HEIGHT * 1) / 100,
    },

    button: {
      borderRadius: 100,
      width: 55,
      backgroundColor: theme.colors.blue,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View>
        <StyledText style={styles.title}>
          Satılacak Tutar ve Para Birimi
        </StyledText>
        <View style={styles.container}>
          <TextInput
            keyboardType="numeric"
            value={sellingAmount}
            onChangeText={setSellingAmount}
            style={styles.numericInput}
            maxLength={20}
          />
          <View style={styles.pickerInputContainer}>
            <Picker
              selectedValue={sellingCurrency}
              onValueChange={(val, index) => setSellingCurrency(val)}
              dropdownIconColor={theme.colors.blue}
              style={{ color: theme.colors.text }}
              itemStyle={{ fontFamily: 'Ubuntu' }}
            >
              <Picker.Item
                label={`${CURRENCY_DICTIONARY.try} TL`}
                value="try"
              />
              <Picker.Item
                label={`${CURRENCY_DICTIONARY.usd} USD`}
                value="usd"
              />
              <Picker.Item
                label={`${CURRENCY_DICTIONARY.eur} EUR`}
                value="eur"
              />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <FAB
          onPress={switchCurrencies}
          buttonStyle={styles.button}
          icon={
            <Icon name="sync" type="font-awesome-5" size={20} color="white" />
          }
        />
      </View>
      <View>
        <StyledText
          style={[styles.title, { marginTop: (DEVICE_HEIGHT * 2) / 100 }]}
        >
          Alınacak Tutar ve Para Birimi
        </StyledText>
        <View style={styles.container}>
          <TextInput
            keyboardType="numeric"
            value={buyingAmount}
            disabled
            style={styles.numericInput}
          />
          <View style={styles.pickerInputContainer}>
            <Picker
              selectedValue={buyingCurrency}
              onValueChange={(val, index) => setBuyingCurrency(val)}
              dropdownIconColor={theme.colors.blue}
              style={{ color: theme.colors.text }}
              itemStyle={{ fontFamily: 'Ubuntu' }}
            >
              <Picker.Item
                label={`${CURRENCY_DICTIONARY.try} TL`}
                value="try"
              />
              <Picker.Item
                label={`${CURRENCY_DICTIONARY.usd} USD`}
                value="usd"
              />
              <Picker.Item
                label={`${CURRENCY_DICTIONARY.eur} EUR`}
                value="eur"
              />
            </Picker>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CryptoCalculating;
