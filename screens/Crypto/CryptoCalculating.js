import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Icon, Image, Button } from 'react-native-elements';
import { convertCurrency, formatAmount, formatTime } from '../../lib/utils';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../lib/constants';
import { useTheme } from '../../context/Theme';
import { InputWithLabel, MenuButton, StyledText } from '../../lib/components';

import useMock from '../../hooks/useMock';

const CryptoCalculating = props => {
  const { theme } = useTheme();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //5 saniyede bir güncellenen saat
  const mockTime = useMock(() => formatTime(new Date()), 5000, false);

  React.useEffect(() => {
    if (props.route.params) {
      if (props.route.params.sellingCurrency) {
        const { sellingCurrency } = props.route.params;

        dispatch({
          type: 'sellingCurrencyChanged',
          payload: { value: sellingCurrency },
        });
      }
      if (props.route.params.buyingCurrency) {
        const { buyingCurrency } = props.route.params;

        dispatch({
          type: 'buyingCurrencyChanged',
          payload: { value: buyingCurrency },
        });
      }
    }
  }, [props.route]);
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT,
          backgroundColor: theme.colors.bg,
        },
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10%',
          width: '90%',
          marginHorizontal: '5%',
        },
        amountContainer: {
          width: '60%',
          height: '100%',
        },
        pickerInputContainer: {
          width: '40%',
          height: '100%',
        },
        pickerInput: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          marginTop: '22%',
          width: '80%',
          marginHorizontal: '10%',
          backgroundColor: theme.colors.bg,
          borderWidth: 0.5,
          borderColor: theme.colors.blue,
          borderRadius: 10,
        },
        pickerInputText: {
          width: '60%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        pickerInputIcon: {
          width: '20%',
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2%',
        },
        buttonContainer: {
          width: '90%',
          marginHorizontal: '5%',
          paddingTop: theme.sizes.padding * 2,
          paddingRight: theme.sizes.padding * 5,
          alignItems: 'flex-end',
          justifyContent: 'center',
        },
        button: {
          width: 40,
          backgroundColor: theme.colors.blue,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        },
      }),
    [theme]
  );

  const sellingIcon = React.useMemo(() => {
    const currencyData = initialState.currencies.find(
      c => c.value === state.sellingCurrency
    );

    if (currencyData.image) {
      return (
        <Image
          source={{
            uri: currencyData.image.uri,
          }}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      );
    }
    if (currencyData.icon) {
      return (
        <Icon
          name={currencyData.icon.name}
          type={currencyData.icon.type}
          size={20}
          color={theme.colors.blue}
        />
      );
    }
  }, [state.sellingCurrency]);

  const buyingIcon = React.useMemo(() => {
    const currencyData = initialState.currencies.find(
      c => c.value === state.buyingCurrency
    );

    if (currencyData.image) {
      return (
        <Image
          source={{
            uri: currencyData.image.uri,
          }}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      );
    }
    if (currencyData.icon) {
      return (
        <Icon
          name={currencyData.icon.name}
          type={currencyData.icon.type}
          size={20}
          color={theme.colors.blue}
        />
      );
    }
  }, [state.buyingCurrency]);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { marginTop: theme.sizes.padding }]}>
        <View style={styles.amountContainer}>
          <InputWithLabel
            inputPlaceholder="0,00"
            label="Satılacak Tutar ve Para Birimi"
            inputValue={state.sellingAmount}
            setInputValue={text => {
              dispatch({
                type: 'sellingAmountChanged',
                payload: { value: text },
              });
            }}
            inputKeyboardType="numeric"
            styleOverrides={{
              inputContainer:
                Platform.OS === 'ios'
                  ? {
                      height: 45,
                      marginTop: 3,
                      justifyContent: 'center',
                      paddingRight: theme.sizes.padding,
                    }
                  : {
                      paddingRight: theme.sizes.padding,
                    },
              input: {
                textAlign: 'right',
              },
            }}
          />
        </View>
        <View style={styles.pickerInputContainer}>
          <MenuButton
            startingIcon={sellingIcon}
            title={state.sellingCurrency.toUpperCase()}
            containerStyles={styles.pickerInput}
            textContainerStyles={styles.pickerInputText}
            iconContainerStyles={styles.pickerInputIcon}
            onPress={() =>
              props.navigation.navigate('Seçim', {
                title: 'Satılacak Tutar Birimi',
                options: state.currencies.map(option => {
                  if (option.image) {
                    return {
                      text: option.label,
                      image: option.image,
                      navigation: {
                        to: 'Kripto Hesaplama',
                        params: {
                          sellingCurrency: option.value,
                          meta: {
                            image: option.image,
                          },
                        },
                      },
                    };
                  } else {
                    return {
                      text: option.label,
                      startingIcon: option.icon,
                      navigation: {
                        to: 'Kripto Hesaplama',
                        params: {
                          sellingCurrency: option.value,
                          meta: {
                            icon: option.icon,
                          },
                        },
                      },
                    };
                  }
                }),
              })
            }
          />
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
      <View style={[styles.container]}>
        <View style={styles.amountContainer}>
          <InputWithLabel
            inputPlaceholder="0,00"
            label="Alınacak Tutar ve Para Birimi"
            inputValue={state.buyingAmount}
            setInputValue={text => {
              dispatch({
                type: 'buyingAmountChanged',
                payload: { value: text },
              });
            }}
            inputKeyboardType="numeric"
            styleOverrides={{
              inputContainer:
                Platform.OS === 'ios'
                  ? {
                      height: 45,
                      marginTop: 3,
                      justifyContent: 'center',
                      paddingRight: theme.sizes.padding,
                    }
                  : {
                      paddingRight: theme.sizes.padding,
                    },
              input: {
                textAlign: 'right',
              },
            }}
          />
        </View>
        <View style={styles.pickerInputContainer}>
          <MenuButton
            startingIcon={buyingIcon}
            title={state.buyingCurrency.toUpperCase()}
            containerStyles={styles.pickerInput}
            textContainerStyles={styles.pickerInputText}
            iconContainerStyles={styles.pickerInputIcon}
            onPress={() =>
              props.navigation.navigate('Seçim', {
                title: 'Alınacak Tutar Birimi',
                options: state.currencies.map(option => {
                  if (option.image) {
                    return {
                      text: option.label,
                      image: option.image,
                      navigation: {
                        to: 'Kripto Hesaplama',
                        params: {
                          buyingCurrency: option.value,
                          meta: {
                            image: option.image,
                          },
                        },
                      },
                    };
                  } else {
                    return {
                      text: option.label,
                      startingIcon: option.icon,
                      navigation: {
                        to: 'Kripto Hesaplama',
                        params: {
                          buyingCurrency: option.value,
                          meta: {
                            icon: option.icon,
                          },
                        },
                      },
                    };
                  }
                }),
              })
            }
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: theme.sizes.padding,
          width: '85%',
          marginHorizontal: '6.5%',
          marginVertical: '2%',
        }}
      >
        <Icon
          name="info-circle"
          type="font-awesome-5"
          size={theme.sizes.largeText}
          color={theme.colors.blue}
        />

        <StyledText
          style={{ fontFamily: 'UbuntuLight', fontSize: theme.sizes.tinyText }}
        >
          {' '}
          {state.sellingCurrency.toUpperCase()} Banka Satış:{' '}
          {calculateBuyingAmount(
            state.sellingCurrency,
            1,
            state.buyingCurrency
          )}{' '}
          {state.buyingCurrency.toUpperCase()} (Son Güncelleme : {mockTime} )
        </StyledText>
      </View>
    </View>
  );
};

const initialState = {
  sellingAmount: '',
  sellingCurrency: 'btc',
  sellingCurrencyDropDownOpen: false,
  buyingAmount: '',
  buyingCurrency: 'usd',
  buyingCurrencyDropDownOpen: false,
  currencies: [
    {
      label: `BTC`,
      value: 'btc',
      icon: {
        name: 'bitcoin',
        type: 'font-awesome-5',
      },
    },
    {
      label: `ETH`,
      value: 'eth',
      icon: {
        name: 'ethereum',
        type: 'font-awesome-5',
      },
    },
    {
      label: `DOGE`,
      value: 'doge',
      image: {
        uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fdogecoin.png?alt=media&token=433482a9-ded3-4030-acee-4fe752523a78',
      },
    },
    {
      label: `XRP`,
      value: 'xrp',
      image: {
        uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fxrp.png?alt=media&token=368d6c24-5d57-4f92-8974-004c4568d5dd',
      },
    },
    {
      label: `TRY`,
      value: 'try',
      icon: {
        name: 'lira-sign',
        type: 'font-awesome-5',
      },
    },
    {
      label: `USD`,
      value: 'usd',
      icon: {
        name: 'dollar-sign',
        type: 'font-awesome-5',
      },
    },
    {
      label: `EUR`,
      value: 'eur',
      icon: {
        name: 'euro-sign',
        type: 'font-awesome-5',
      },
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
