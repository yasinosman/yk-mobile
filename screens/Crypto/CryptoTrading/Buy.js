import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Image, Icon } from 'react-native-elements';
import { useTheme } from '../../../context/Theme';
import { CRYPTO_CURRENCIES, EXCHANGE_RATES } from '../../../hooks/useCurrency';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../lib/constants';
import { convertCurrency } from '../../../lib/utils';
import {
  MenuTitle,
  CurrencyView,
  ChangePercentageView,
  CardView,
  AmountText,
  Popup,
  InputWithLabel,
  CardViewPlaceholder,
} from '../../../lib/components';
import {
  buyCryptoFromCashAccount,
  buyCryptoFromCryptoWallet,
} from '../../../services/wallets';
import useAccounts from '../../../hooks/useAccounts';
import useWallets from '../../../hooks/useWallets';

const Buy = props => {
  const [accounts, isAccountsLoading] = useAccounts();
  const [wallets, isWalletsLoading] = useWallets();
  const [payingAmount, setPayingAmount] = React.useState('');
  const [cryptoAmount, setCryptoAmount] = React.useState('');
  const keyboardHeight = useKeyboard();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

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
      backgroundColor: theme.colors.card,
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
    if (props.route.params) {
      if (props.route.params.currency) {
        const curr = CRYPTO_CURRENCIES.find(
          c => c.value === props.route.params.currency
        );
        setCurrency(curr);

        setTargetCurrency(props.route.params.targetCurrency);

        if (cryptoAmount !== '') {
          setPayingAmount(
            convertCurrency(
              curr.value,
              cryptoAmount,
              props.route.params.targetCurrency
            ).toString()
          );
        }
      }

      if (props.route.params.withdrawAccount) {
        const { withdrawAccount } = props.route.params;
        setTargetCurrency(withdrawAccount.currency);

        if (cryptoAmount !== '') {
          setPayingAmount(
            convertCurrency(
              currency.value,
              cryptoAmount,
              withdrawAccount.currency
            ).toString()
          );
        }
      }
    }
  }, [props.route.params]);

  const [buyingAccountType, setBuyingAccountType] = React.useState(null);

  React.useEffect(() => {
    if (CRYPTO_CURRENCIES.find(cu => cu.value === targetCurrency)) {
      return setBuyingAccountType('crypto');
    }

    if (EXCHANGE_RATES.hasOwnProperty(targetCurrency)) {
      return setBuyingAccountType('cash');
    }
  }, [targetCurrency]);

  const handleBuy = () => {
    setLoading(true);

    if (!payingAmount) {
      setLoading(false);
      return setError('Ödenecek tutar kısmı boş bırakılamaz.');
    }

    const withdrawAccount =
      buyingAccountType === 'cash'
        ? accounts.find(a => a.currency === targetCurrency)
        : buyingAccountType === 'crypto'
        ? wallets[0]
        : null;
    const depositWallet = wallets[0];

    if (buyingAccountType === 'cash') {
      buyCryptoFromCashAccount(
        withdrawAccount.id,
        payingAmount,
        depositWallet.id,
        currency.value,
        cryptoAmount
      )
        .then(result => {
          setSuccess(result);
          //Reset form
          setPayingAmount('');
          setCryptoAmount('');
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    } else if (buyingAccountType === 'crypto') {
      buyCryptoFromCryptoWallet(
        withdrawAccount.id,
        payingAmount,
        targetCurrency,
        currency.value,
        depositWallet.id,
        cryptoAmount
      )
        .then(result => {
          setSuccess(result);
          //Reset form
          setPayingAmount('');
          setCryptoAmount('');
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    } else {
      setError(
        `${currency.value.toUpperCase()} almak için gereken bir hesabınız bulunmuyor.`
      );
    }
  };

  const Wallets = ({ displayCurrency, navigation }) =>
    isWalletsLoading ? (
      <CardViewPlaceholder
        styleOverrides={{
          container: {
            height: 100,
            marginBottom: 0,
            marginLeft: DEVICE_WIDTH * (5 / 100),
            marginRight: DEVICE_WIDTH * (3 / 100),
          },
        }}
      />
    ) : (
      wallets.map(wallet => (
        <CardView
          key={wallet.id}
          iconContainerStyles={{
            height: 50,
            justifyContent: 'flex-start',
          }}
          icon={
            wallet.icon ? (
              <Icon
                name={wallet.icon.name}
                type={wallet.icon.type}
                size={40}
                color={theme.colors.orange}
              />
            ) : (
              <Image
                source={{ uri: wallet.image_url }}
                style={{ width: 60, height: 45 }}
              />
            )
          }
          title={wallet.name}
          subTitle={wallet.number}
          key1={`Cüzdandaki ${displayCurrency.toUpperCase()} Miktarı`}
          value1Component={
            <AmountText
              amount={
                wallet.assets.find(asset => asset.currency === displayCurrency)
                  .amount
              }
              currency={displayCurrency}
              primaryTextStyles={styles.amountTextTitle}
              secondaryTextStyles={styles.amountTextSubTitle}
            />
          }
          key2={`Toplam Bakiye (${displayCurrency.toUpperCase()})`}
          value2Component={
            <AmountText
              amount={wallet.assets.reduce((accumulator, current) => {
                return (
                  parseFloat(accumulator) +
                  parseFloat(current.amount) *
                    (EXCHANGE_RATES[current.currency][displayCurrency] ?? 1)
                ).toFixed(6);
              }, 0)}
              currency={displayCurrency}
              primaryTextStyles={styles.amountTextTitle}
              secondaryTextStyles={styles.amountTextSubTitle}
            />
          }
          trailingIcon={
            <Icon
              name="chevron-right"
              type="font-awesome"
              size={20}
              color={theme.colors.blue}
            />
          }
          containerStyles={[
            { height: 100, marginBottom: 0 },
            {
              marginLeft: DEVICE_WIDTH * (5 / 100),
              marginRight: DEVICE_WIDTH * (3 / 100),
            },
            {
              borderColor: theme.colors.orange,
            },
          ]}
          primaryTextStyles={styles.amountTextTitle}
          secondaryTextStyles={styles.amountTextSubTitle}
          onPress={() =>
            navigation.navigate('Cüzdan Seçimi', {
              options: wallets.map(wallet => ({
                text: `${wallet.name} (${wallet.number})`,
                startingIcon: {
                  name: wallet.icon.name,
                  type: wallet.icon.type,
                  color: theme.colors.orange,
                  size: 25,
                },
                navigation: {
                  to: 'Kripto Alış',
                  params: {
                    wallet: wallet,
                  },
                },
              })),
            })
          }
        />
      ))
    );

  const CashAccounts = ({ navigation }) =>
    isAccountsLoading ? (
      <CardViewPlaceholder
        styleOverrides={{
          container: {
            height: 100,
            marginBottom: 0,
            marginLeft: DEVICE_WIDTH * (5 / 100),
            marginRight: DEVICE_WIDTH * (3 / 100),
          },
        }}
      />
    ) : (
      accounts.map((account, index) => {
        if (account.currency === targetCurrency) {
          return (
            <CardView
              key={account.id}
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
                  amount={parseFloat(account.available_balance).toFixed(2)}
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
              trailingIcon={
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  size={20}
                  color={theme.colors.blue}
                />
              }
              containerStyles={[
                calculateContainerStyles(
                  index,
                  accounts.filter(a => a.currency === targetCurrency).length
                ),
              ]}
              primaryTextStyles={styles.amountTextTitle}
              secondaryTextStyles={styles.amountTextSubTitle}
              onPress={() =>
                navigation.navigate('Hesap Seçimi', {
                  options: accounts.map(account => ({
                    text: `${account.name} (${account.number})`,
                    image: {
                      uri: account.image_url,
                      size: 30,
                    },
                    navigation: {
                      to: 'Kripto Alış',
                      params: {
                        withdrawAccount: account,
                      },
                    },
                  })),
                })
              }
            />
          );
        }
        return null;
      })
    );

  const memoizedAccounts = React.useMemo(
    () => <CashAccounts navigation={props.navigation} />,
    [accounts, props.navigation, targetCurrency, isAccountsLoading]
  );

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
          text={
            buyingAccountType === 'crypto'
              ? `${targetCurrency.toUpperCase()} Çekilecek Cüzdan`
              : 'Para Çekilecek Hesap'
          }
          textStyles={styles.title}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={DEVICE_WIDTH - 28}
          decelerationRate={0.5}
          scrollEnabled
        >
          {buyingAccountType === 'crypto' && (
            <Wallets
              displayCurrency={targetCurrency}
              navigation={props.navigation}
            />
          )}
          {buyingAccountType === 'cash' && memoizedAccounts}
        </ScrollView>
      </View>
      <View>
        <View style={[styles.accountsContainer, { marginTop: 0 }]}>
          <MenuTitle
            text={`${currency.value.toUpperCase()} Yatırılacak Cüzdan`}
            textStyles={styles.title}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={DEVICE_WIDTH - 28}
            decelerationRate={0.5}
            scrollEnabled
          >
            <Wallets
              navigation={props.navigation}
              displayCurrency={currency.value}
            />
          </ScrollView>
        </View>
      </View>
      <View>
        <MenuTitle text="İşlem Bilgileri" textStyles={styles.title} />
        <InputWithLabel
          inputValue={payingAmount}
          setInputValue={text => {
            setPayingAmount(text);
            setCryptoAmount(
              convertCurrency(targetCurrency, text, currency.value).toString()
            );
          }}
          label={`Ödenecek Tutar (${targetCurrency.toUpperCase()})`}
          inputPlaceholder="0,00"
          inputKeyboardType="numeric"
          styleOverrides={{
            container: {
              width: '95%',
              marginHorizontal: '2.5%',
            },
            inputContainer: {
              paddingRight: theme.sizes.padding,
            },
            input: {
              textAlign: 'right',
            },
          }}
        />
        <InputWithLabel
          inputValue={cryptoAmount}
          setInputValue={text => {
            setCryptoAmount(text);
            setPayingAmount(
              convertCurrency(currency.value, text, targetCurrency).toString()
            );
          }}
          label={`${currency.value.toUpperCase()} Karşılığı`}
          inputPlaceholder="0,00"
          inputKeyboardType="numeric"
          styleOverrides={{
            container: {
              width: '95%',
              marginHorizontal: '2.5%',
            },
            inputContainer: {
              paddingRight: theme.sizes.padding,
            },
            input: {
              textAlign: 'right',
            },
          }}
        />
      </View>
      <View>
        <Button
          title={
            loading ? 'Lütfen Bekleyin' : `${currency.value.toUpperCase()} Al`
          }
          buttonStyle={styles.button}
          onPress={handleBuy}
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
        text={error?.message ?? error}
        onClose={() => setError('')}
        styleOverrides={{ container: { height: DEVICE_HEIGHT * (25 / 100) } }}
      />
    </ScrollView>
  );
};

export default Buy;
