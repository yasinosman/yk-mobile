import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Icon, Button } from 'react-native-elements';
import StyledText from '../../components/StyledText';
import { CURRENCY_DICTIONARY } from '../../hooks/useCurrency';
import { convertCurrency, formatAmount } from '../../utils';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import { useTheme } from '../../context/Theme';
import { TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CryptoCalculating = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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
      height: (DEVICE_HEIGHT * 6) / 100,
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
    },
    buttonContainer: {
      flexDirection: 'row',
      marginRight: '20%',
      marginLeft: 'auto',
      marginVertical: (DEVICE_HEIGHT * 3) / 100,
      zIndex: 1,
    },
    button: {
      borderRadius: 100,
      width: 40,
      backgroundColor: theme.colors.blue,
    },
    picker: {
      borderColor: theme.colors.blue,
      borderWidth: 0.4,
      height: (DEVICE_HEIGHT * 6) / 100,
    },
    pickerBox: {
      borderColor: theme.colors.blue,
      borderWidth: 0.4,
      height: (DEVICE_HEIGHT * 16) / 100,
    },
    pickerText: {
      fontFamily: 'Ubuntu',
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
            value={state.sellingAmount}
            onChangeText={text =>
              dispatch({
                type: 'sellingAmountChanged',
                payload: { value: text },
              })
            }
            style={styles.numericInput}
            maxLength={20}
          />
          <View style={styles.pickerInputContainer}>
            <DropDownPicker
              open={state.sellingCurrencyDropDownOpen}
              setOpen={() =>
                dispatch({ type: 'sellingCurrencyDropDownToggled' })
              }
              value={state.sellingCurrency}
              setValue={cb =>
                dispatch({
                  type: 'sellingCurrencyChanged',
                  payload: { value: cb(state.sellingCurrency) },
                })
              }
              items={state.currencies}
              style={styles.picker}
              dropDownContainerStyle={styles.pickerBox}
              listItemLabelStyle={styles.pickerText}
              labelStyle={styles.pickerText}
              zIndex={3000}
              zIndexInverse={1000}
              placeholder=""
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch({ type: 'currenciesSwitched' })}
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
            value={state.buyingAmount}
            disabled
            style={styles.numericInput}
          />
          <View style={styles.pickerInputContainer}>
            <DropDownPicker
              open={state.buyingCurrencyDropDownOpen}
              setOpen={() =>
                dispatch({ type: 'buyingCurrencyDropDownToggled' })
              }
              value={state.buyingCurrency}
              setValue={cb =>
                dispatch({
                  type: 'buyingCurrencyChanged',
                  payload: { value: cb(state.buyingCurrency) },
                })
              }
              items={state.currencies}
              style={styles.picker}
              dropDownContainerStyle={styles.pickerBox}
              listItemLabelStyle={styles.pickerText}
              labelStyle={styles.pickerText}
              zIndex={2000}
              zIndexInverse={2000}
              placeholder=""
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const initialState = {
  sellingAmount: '',
  sellingCurrency: 'try',
  sellingCurrencyDropDownOpen: false,
  buyingAmount: '',
  buyingCurrency: 'usd',
  buyingCurrencyDropDownOpen: false,
  currencies: [
    {
      label: `${CURRENCY_DICTIONARY.try} TL`,
      value: 'try',
    },
    {
      label: `${CURRENCY_DICTIONARY.usd} USD`,
      value: 'usd',
    },
    {
      label: `${CURRENCY_DICTIONARY.eur} EUR`,
      value: 'eur',
    },
  ],
};

function calculateBuyingAmount(sellingCurrency, sellingAmount, buyingCurrency) {
  return formatAmount(
    convertCurrency(sellingCurrency, sellingAmount, buyingCurrency)
  )
    .toString()
    .replace(/\,$/, '');
}

function reducer(state, action) {
  switch (action.type) {
    case 'sellingCurrencyChanged': {
      return {
        ...state,
        sellingCurrency: action.payload.value,
        buyingAmount: calculateBuyingAmount(
          action.payload.value,
          state.sellingAmount,
          state.buyingCurrency
        ),
      };
    }
    case 'sellingAmountChanged': {
      return {
        ...state,
        sellingAmount: action.payload.value,
        buyingAmount: calculateBuyingAmount(
          state.sellingCurrency,
          action.payload.value,
          state.buyingCurrency
        ),
      };
    }
    case 'buyingCurrencyChanged': {
      return {
        ...state,
        buyingCurrency: action.payload.value,
        buyingAmount: formatAmount(
          convertCurrency(
            state.sellingCurrency,
            state.sellingAmount,
            action.payload.value
          )
        )
          .toString()
          .replace(/\,$/, ''),
      };
    }
    case 'sellingCurrencyDropDownToggled': {
      return {
        ...state,
        sellingCurrencyDropDownOpen: !state.sellingCurrencyDropDownOpen,
        buyingCurrencyDropDownOpen: false,
      };
    }
    case 'buyingCurrencyDropDownToggled': {
      return {
        ...state,
        buyingCurrencyDropDownOpen: !state.buyingCurrencyDropDownOpen,
        sellingCurrencyDropDownOpen: false,
      };
    }
    case 'currenciesSwitched': {
      return {
        ...state,
        buyingAmount: formatAmount(
          convertCurrency(
            state.buyingCurrency,
            state.sellingAmount,
            state.sellingCurrency
          )
        )
          .toString()
          .replace(/\,$/, ''),
        buyingCurrency: state.sellingCurrency,
        sellingCurrency: state.buyingCurrency,
      };
    }
    default: {
      return state;
    }
  }
}

export default CryptoCalculating;
