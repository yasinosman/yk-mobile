import React from 'react';
import { ScrollView } from 'react-native';
import {
  StyleSheet,
  Animated,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import ChangePercentageView from '../../components/ChangePercentageView';
import StyledText from '../../components/StyledText';
import { useTheme } from '../../context/Theme';
import { CRYPTO_CURRENCIES, EXCHANGE_RATES } from '../../hooks/useCurrency';
import useMock from '../../hooks/useMock';
import { formatAmount, formatTime } from '../../utils';

const CryptoCrossTransactions = ({ navigation }) => {
  //5 saniyede bir güncellenen saat
  const mockDate = useMock(() => formatTime(new Date()), 5000, false);

  const [search, setSearch] = React.useState('');

  //Ekranda görüntülenecek pariteler
  const PARITIES = React.useMemo(() => {
    let result = [];

    CRYPTO_CURRENCIES.forEach(currency => {
      CRYPTO_CURRENCIES.forEach(c => {
        if (c.value !== currency.value) {
          //Check for search
          if (search === '') {
            result.push({
              id: `${currency.value}-${c.value}`,
              currency: currency.value,
              targetCurrency: c.value,
              buyPrice: EXCHANGE_RATES[currency.value][c.value] ?? 1,
              sellPrice: EXCHANGE_RATES[c.value][currency.value] ?? 1,
              changeState: currency.state,
              changePercentage: currency.changePercentage,
            });
          } else {
            if (
              currency.value.includes(search.toLowerCase()) ||
              c.value.includes(search.toLowerCase())
            ) {
              result.push({
                id: `${currency.value}-${c.value}`,
                currency: currency.value,
                targetCurrency: c.value,
                buyPrice: EXCHANGE_RATES[currency.value][c.value] ?? 1,
                sellPrice: EXCHANGE_RATES[c.value][currency.value] ?? 1,
                changeState: currency.state,
                changePercentage: currency.changePercentage,
              });
            }
          }
        }
      });
    });

    return result;
  }, [search]);

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      width: DEVICE_WIDTH,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingBottom: 90,
      paddingTop: 10,
      backgroundColor: theme.colors.bg,
    },
    updateText: {
      fontFamily: 'UbuntuLight',
      textAlign: 'center',
      backgroundColor: theme.colors.seperator,
      paddingVertical: 5,
    },
    update: {
      backgroundColor: theme.colors.bg,
    },
    searchContainer: {
      width: DEVICE_WIDTH,
      backgroundColor: theme.colors.bg,
      paddingBottom: 10,
    },
  });

  return (
    <View
      style={{
        minHeight: DEVICE_HEIGHT,
        backgroundColor: theme.colors.bg,
        paddingBottom: 90,
      }}
    >
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Kripto Çifti Ara"
          inputStyle={{
            fontFamily: 'Ubuntu',
            fontSize: 16,
          }}
          value={search}
          onChangeText={setSearch}
          inputContainerStyle={{
            backgroundColor: theme.colors.bg,
            height: 30,
          }}
          containerStyle={{
            backgroundColor: theme.colors.bg,
            borderWidth: 0,
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            borderRadius: 100,
            width: '95%',
            marginTop: 10,
            marginLeft: '2.5%',
            height: 30,
            justifyContent: 'center',
          }}
        />
      </View>

      {/* Son Güncelleme */}
      <StyledText style={styles.updateText}>
        Son Güncelleme: {mockDate}{' '}
      </StyledText>

      <ScrollView>
        <Animated.View style={[styles.wrapper]}>
          {PARITIES.map((parity, index) => {
            const [buyInt, buyDecimal] = formatAmount(parity.buyPrice);
            const [sellInt, sellDecimal] = formatAmount(parity.sellPrice);

            return (
              <CryptoParity
                key={parity.id}
                index={index}
                currency={parity.currency}
                targetCurrency={parity.targetCurrency}
                buyPrice={`${buyInt}${buyDecimal ? `,${buyDecimal}` : ''}`}
                sellPrice={`${sellInt}${sellDecimal ? `,${sellDecimal}` : ''}`}
                changeState={parity.changeState}
                changePercentage={parity.changePercentage}
                onPress={() =>
                  navigation.navigate('Kripto Alış', {
                    currency: parity.currency,
                    targetCurrency: parity.targetCurrency,
                  })
                }
              />
            );
          })}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const CryptoParity = ({
  currency,
  targetCurrency,
  buyPrice,
  sellPrice,
  changeState,
  changePercentage,
  onPress,
  index,
}) => {
  const { theme } = useTheme();
  const fadeIn = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [index]);

  const styles = StyleSheet.create({
    cell: {
      width: DEVICE_WIDTH * (45 / 100),
      marginHorizontal: DEVICE_WIDTH * (2.5 / 100),
      height: 140,
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      marginBottom: 20,
      //Shadows
      //iOS
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      //Android
      elevation: 3,
    },
    titleContainer: {
      width: '100%',
      height: '30%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      borderBottomWidth: 0.19,
      borderBottomColor: theme.colors.blue,
    },
    title: {
      fontSize: 18,
    },
    contentContainer: {
      height: '70%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    keyContainer: {
      height: '100%',
      width: '50%',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingLeft: 10,
    },
    valueContainer: {
      height: '100%',
      width: '50%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingRight: 10,
      paddingVertical: 10,
    },
    keyText: {
      fontFamily: 'UbuntuLight',
    },
    valueText: {
      fontFamily: 'UbuntuBold',
    },
  });

  return (
    <Animated.View style={[styles.cell, { opacity: fadeIn }]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.titleContainer}>
          <StyledText style={styles.title}>
            {currency.toUpperCase()}/{targetCurrency.toUpperCase()}
          </StyledText>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../assets/img/search.png')}
          ></Image>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.keyContainer}>
            <StyledText style={styles.keyText}>Alış</StyledText>
            <StyledText style={styles.keyText}>Satış</StyledText>
            <StyledText style={styles.keyText}>Günlük Fark</StyledText>
          </View>
          <View style={styles.valueContainer}>
            <StyledText style={styles.valueText}>{buyPrice}</StyledText>
            <StyledText style={styles.valueText}>{sellPrice}</StyledText>
            <ChangePercentageView
              state={changeState}
              percentage={changePercentage}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CryptoCrossTransactions;
