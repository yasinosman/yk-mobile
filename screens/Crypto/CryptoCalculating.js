import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import StyledText from '../../components/StyledText';
import { Picker } from '@react-native-picker/picker';
import { CURRENCY_DICTIONARY } from '../../hooks/useCurrency';
import { convertCurrency, formatAmount } from '../../utils';

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

  return (
    <View>
      <View>
        <StyledText>Satılacak Tutar ve Para Birimi</StyledText>
        <View>
          <Input
            keyboardType="numeric"
            value={sellingAmount}
            onChangeText={setSellingAmount}
            inputStyle={{ textAlign: 'right' }}
            maxLength={20}
          />
          <Picker
            selectedValue={sellingCurrency}
            onValueChange={(val, index) => setSellingCurrency(val)}
          >
            <Picker.Item label={`${CURRENCY_DICTIONARY.try} TL`} value="try" />
            <Picker.Item label={`${CURRENCY_DICTIONARY.usd} USD`} value="usd" />
            <Picker.Item label={`${CURRENCY_DICTIONARY.eur} EUR`} value="eur" />
          </Picker>
        </View>
      </View>
      <Button title="switch" onPress={switchCurrencies} />
      <View>
        <StyledText>Alınacak Tutar ve Para Birimi</StyledText>
        <View>
          <Input
            keyboardType="numeric"
            value={buyingAmount}
            disabled
            inputStyle={{ textAlign: 'right' }}
          />
          <Picker
            selectedValue={buyingCurrency}
            onValueChange={(val, index) => setBuyingCurrency(val)}
          >
            <Picker.Item label={`${CURRENCY_DICTIONARY.try} TL`} value="try" />
            <Picker.Item label={`${CURRENCY_DICTIONARY.usd} USD`} value="usd" />
            <Picker.Item label={`${CURRENCY_DICTIONARY.eur} EUR`} value="eur" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default CryptoCalculating;

const styles = StyleSheet.create({});
