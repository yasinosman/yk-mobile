import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme } from '../../../context/Theme';
import MenuTitle from '../../../components/MenuTitle';
import CurrencyView from '../../../components/CurrencyView';
import { CRYPTO_CURRENCIES } from '../../../hooks/useCurrency';
import ChangePercentageView from '../../../components/ChangePercentageView';
import { Button, Input, Image, Icon } from 'react-native-elements';
import CardView from '../../../components/CardView';
import { getAccounts, tradeCurrencies } from '../../../services/accounts';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../common/dimensions';
import AmountText from '../../../components/AmountText';
import { useKeyboard } from '../../../hooks/useKeyboard';
import StyledText from '../../../components/StyledText';
import { convertCurrency } from '../../../utils';
import Popup from '../../../components/Popup';

const Buy = props => {
  const [accounts, setAccounts] = React.useState([]);
  const [payingAmount, setPayingAmount] = React.useState('');
  const [cryptoAmount, setCryptoAmount] = React.useState('');
  const keyboardHeight = useKeyboard();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  async function fetchAllData() {
    try {
      setAccounts(await getAccounts());
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchAllData();
  }, []);

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.bg,
      height: DEVICE_HEIGHT,
      flex: 1,
      position: 'absolute',
      top: -keyboardHeight,
    },
    title: {
      fontSize: 16,
      marginTop: 15,
      marginBottom: 5,
    },
    accountsContainer: {
      height: 160,
      width: DEVICE_WIDTH,
      marginVertical: 0,
      paddingVertical: 0,
    },
    amountTextTitle: {
      fontSize: 16,
    },
    amountTextSubTitle: {
      fontSize: 14,
    },
    button: {
      backgroundColor: theme.colors.blue,
      borderWidth: 1,
      borderRadius: 20,
      width: '90%',
      marginHorizontal: '5%',
      marginTop: 10,
    },
    inputWrapper: {
      width: '95%',
      marginHorizontal: '2.5%',
      height: 50,
    },
    inputContainer: {
      borderWidth: 0.2,
      borderBottomWidth: 0.2,
      borderRadius: 5,
      paddingRight: 10,
      borderColor: theme.colors.blue,
    },
    label: {
      width: '90%',
      marginHorizontal: '5%',
      fontFamily: 'UbuntuLight',
      marginTop: 5,
      color: theme.colors.blue,
    },
    inputText: {
      textAlign: 'right',
      fontFamily: 'Ubuntu',
      color: theme.colors.text,
    },
  });

  const calculateContainerStyles = (index, filteredLength, debug) => {
    let actualIndex = index;
    if (filteredLength) {
      actualIndex = filteredLength - index;
    }
    // console.log({ index, actualIndex, filteredLength, debug });
    return [
      { height: 100, marginBottom: 0 },
      actualIndex <= 1
        ? {
            marginLeft: DEVICE_WIDTH * (5 / 100),
            marginRight: DEVICE_WIDTH * (3 / 100),
          }
        : {
            marginLeft: 0,
            marginRight: DEVICE_WIDTH * (3 / 100),
          },
      actualIndex === filteredLength - 1 &&
        filteredLength !== 1 &&
        actualIndex !== 0 && {
          marginRight: DEVICE_WIDTH * (5 / 100),
        },
    ];
  };

  const [currency, setCurrency] = React.useState(CRYPTO_CURRENCIES[0]);
  const [targetCurrency, setTargetCurrency] = React.useState('usd');

  React.useEffect(() => {
    const curr = CRYPTO_CURRENCIES.find(
      c => c.value === props.route.params.currency
    );
    setCurrency(curr);

    setTargetCurrency(props.route.params.targetCurrency);
  }, [props.route.params]);

  const handleSell = () => {
    setLoading(true);

    if (!cryptoAmount) {
      setLoading(false);

      return setError(
        `Satılacak ${currency.value.toUpperCase()} Miktarı kısmı boş bırakılamaz.`
      );
    }

    const depositAccount = accounts.find(a => a.currency === targetCurrency);
    const withdrawAccount = accounts.find(a => a.currency === 'btc');

    tradeCurrencies(
      withdrawAccount.id,
      depositAccount.id,
      cryptoAmount,
      currency.value
    )
      .then(result => {
        setSuccess(result);
        //Reset form
        setPayingAmount('');
        setCryptoAmount('');

        //Fetch accounts
        fetchAllData();
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <MenuTitle
          text="İşlem Yapılacak Kripto Bilgisi"
          textStyles={styles.title}
        />
        <CurrencyView
          icon={currency.icon}
          initialCurrency={currency.value}
          initialCurrencyName={currency.label}
          targetCurrency={targetCurrency}
          content={
            <ChangePercentageView
              state={currency.state}
              percentage={currency.changePercentage}
            />
          }
        />
      </View>

      <View style={[styles.accountsContainer, { marginTop: 0 }]}>
        <MenuTitle
          text={`${currency.value.toUpperCase()} Çekilecek Hesap`}
          textStyles={styles.title}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={DEVICE_WIDTH - 28}
          decelerationRate={0.5}
          scrollEnabled
        >
          {accounts.map((account, index) => {
            if (account.currency !== 'btc') {
              return null;
            }
            return (
              <CardView
                key={account.id}
                onPress={() => alert(account.name)}
                iconContainerStyles={{
                  height: 50,
                  justifyContent: 'flex-start',
                }}
                icon={
                  account.icon ? (
                    <Icon
                      name={account.icon.name}
                      type={account.icon.type}
                      size={40}
                      color={theme.colors.blue}
                    />
                  ) : (
                    <Image
                      source={{ uri: account.image_url }}
                      style={{ width: 60, height: 45 }}
                    />
                  )
                }
                title={account.name}
                subTitle={account.number}
                key1={'Kullanılabilir Bakiye'}
                value1Component={
                  <AmountText
                    amount={account.available_balance}
                    currency={account.currency}
                    primaryTextStyles={styles.amountTextTitle}
                    secondaryTextStyles={styles.amountTextSubTitle}
                  />
                }
                key2={'Güncel Bakiye'}
                value2Component={
                  <AmountText
                    amount={account.current_balance}
                    currency={account.currency}
                    primaryTextStyles={styles.amountTextTitle}
                    secondaryTextStyles={styles.amountTextSubTitle}
                  />
                }
                containerStyles={[
                  calculateContainerStyles(
                    index,
                    accounts.filter(a => a.currency === currency.value).length,
                    'hey'
                  ),
                ]}
                primaryTextStyles={styles.amountTextTitle}
                secondaryTextStyles={styles.amountTextSubTitle}
              />
            );
          })}
        </ScrollView>
      </View>
      <View>
        <View style={[styles.accountsContainer, { marginTop: 0 }]}>
          <MenuTitle text="Para Yatırılacak Hesap" textStyles={styles.title} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={DEVICE_WIDTH - 28}
            decelerationRate={0.5}
            scrollEnabled
          >
            {accounts.map((account, index) => {
              if (account.currency === targetCurrency) {
                return (
                  <CardView
                    key={account.id}
                    onPress={() => alert(account.name)}
                    icon={
                      <Image
                        source={{ uri: account.image_url }}
                        style={{ width: 60, height: 45 }}
                      />
                    }
                    title={account.name}
                    subTitle={account.number}
                    key1={'Kullanılabilir Bakiye'}
                    value1Component={
                      <AmountText
                        amount={account.available_balance}
                        currency={account.currency}
                        primaryTextStyles={styles.amountTextTitle}
                        secondaryTextStyles={styles.amountTextSubTitle}
                      />
                    }
                    key2={'Güncel Bakiye'}
                    value2Component={
                      <AmountText
                        amount={account.current_balance}
                        currency={account.currency}
                        primaryTextStyles={styles.amountTextTitle}
                        secondaryTextStyles={styles.amountTextSubTitle}
                      />
                    }
                    containerStyles={[
                      calculateContainerStyles(
                        index,
                        accounts.filter(a => a.currency === targetCurrency)
                          .length
                      ),
                    ]}
                    primaryTextStyles={styles.amountTextTitle}
                    secondaryTextStyles={styles.amountTextSubTitle}
                  />
                );
              }
              return null;
            })}
          </ScrollView>
        </View>
      </View>
      <View>
        <MenuTitle text="İşlem Bilgileri" textStyles={styles.title} />
        <StyledText style={styles.label}>
          Satılacak {currency.value.toUpperCase()} Miktarı
        </StyledText>
        <Input
          placeholder="0,00"
          keyboardType="numeric"
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          value={cryptoAmount}
          onChangeText={text => {
            setCryptoAmount(text);
            setPayingAmount(
              convertCurrency(currency.value, text, targetCurrency).toString()
            );
          }}
        />
        <StyledText style={[styles.label, { marginTop: 10 }]}>
          {targetCurrency.toUpperCase()} Karşılığı
        </StyledText>
        <Input
          placeholder="0,00"
          keyboardType="numeric"
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          value={payingAmount}
          onChangeText={text => {
            setPayingAmount(text);
            setCryptoAmount(
              convertCurrency(targetCurrency, text, currency.value).toString()
            );
          }}
        />
      </View>
      <View>
        <Button
          title={
            loading ? 'Lütfen Bekleyin' : `${currency.value.toUpperCase()} Sat`
          }
          buttonStyle={styles.button}
          onPress={handleSell}
          disabled={loading}
        />
      </View>
      <Popup
        type="success"
        open={success !== ''}
        title="İşlem Tamamlandı"
        text={success}
        onClose={() => setSuccess('')}
        styleOverrides={{ container: { height: DEVICE_HEIGHT * (25 / 100) } }}
      />
      <Popup
        type="error"
        open={error !== ''}
        title="Hata"
        text={error}
        onClose={() => setError('')}
        styleOverrides={{ container: { height: DEVICE_HEIGHT * (25 / 100) } }}
      />
    </ScrollView>
  );
};

export default Buy;
