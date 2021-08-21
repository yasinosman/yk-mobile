import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { convertCurrency, formatAmount } from '../../lib/utils';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../lib/constants';
import { useTheme } from '../../context/Theme';
import { StyledText } from '../../lib/components';

const CryptoCalculating = () => {
  const { theme } = useTheme();

  const initialState = {
    sellingAmount: '1',
    sellingCurrency: 'btc',
    sellingCurrencyDropDownOpen: false,
    buyingAmount: calculateBuyingAmount('btc', 1, 'usd'),
    buyingCurrency: 'usd',
    buyingCurrencyDropDownOpen: false,
    currencies: [
      {
        label: `BTC`,
        value: 'btc',
        icon: () => (
          <Icon
            name="bitcoin"
            type="font-awesome-5"
            size={20}
            color={theme.colors.icon}
          />
        ),
      },
      {
        label: `ETH`,
        value: 'eth',
        icon: () => (
          <Icon
            name="ethereum"
            type="font-awesome-5"
            size={20}
            color={theme.colors.icon}
          />
        ),
      },
      {
        label: `DOGE`,
        value: 'doge',
        icon: () => (
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fdogecoin.png?alt=media&token=433482a9-ded3-4030-acee-4fe752523a78',
            }}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        ),
      },
      {
        label: `XRP`,
        value: 'xrp',
        icon: () => (
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fxrp.png?alt=media&token=368d6c24-5d57-4f92-8974-004c4568d5dd',
            }}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        ),
      },
      {
        label: `TRY`,
        value: 'try',
        icon: () => (
          <Icon
            name="lira-sign"
            type="font-awesome-5"
            size={20}
            color={theme.colors.icon}
          />
        ),
      },
      {
        label: `USD`,
        value: 'usd',
        icon: () => (
          <Icon
            name="dollar-sign"
            type="font-awesome-5"
            size={20}
            color={theme.colors.icon}
          />
        ),
      },
      {
        label: `EUR`,
        value: 'eur',
        icon: () => (
          <Icon
            name="euro-sign"
            type="font-awesome-5"
            size={20}
            color={theme.colors.icon}
          />
        ),
      },
    ],
  };
  /**<Icon
      name="chevron-right"
      type="font-awesome"
      size={15}
      color={ICON_BLUE}
    /> */
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const styles = StyleSheet.create({
    wrapper: {
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      backgroundColor: theme.colors.bg,
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    container: {
      width: DEVICE_WIDTH * (45 / 100),
      height: DEVICE_HEIGHT * (30 / 100),
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      marginTop: (DEVICE_HEIGHT * 3) / 100,
      marginBottom: (DEVICE_HEIGHT * 1) / 100,
      marginLeft: DEVICE_WIDTH * (2 / 100),
      zIndex: 0,
      textAlign: 'center',
    },
    numericInput: {
      height: (DEVICE_HEIGHT * 6) / 100,
      width: '95%',
      // textAlign: 'right',
      color: theme.colors.text,
      borderWidth: 0.4,
      borderColor: theme.colors.blue,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontFamily: 'Ubuntu',
      fontSize: 18,
      backgroundColor: 'white',
      color: 'black',
    },
    pickerInputContainer: {
      width: '95%',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginRight: '20%',
      marginLeft: 'auto',
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
        <View style={styles.container}>
          <StyledText style={[styles.title, { color: theme.colors.red }]}>
            Satılacak Tutar ve Para Birimi
          </StyledText>
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
      {/* <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch({ type: 'currenciesSwitched' })}
          buttonStyle={styles.button}
          icon={
            <Icon name="sync" type="font-awesome-5" size={20} color="white" />
          }
        />
      </View> */}
      <View>
        <View style={styles.container}>
          <StyledText style={[styles.title, { color: theme.colors.green }]}>
            Alınacak Tutar ve Para Birimi
          </StyledText>
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
