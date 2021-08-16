import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/Theme';
import StyledText from '../../../components/StyledText';
import { TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import CurrencyView from '../../../components/CurrencyView';
import { DEVICE_HEIGHT } from '../../../common/dimensions';
import { ScrollView } from 'react-native';

const AVAILABLE_PARITIES = [
  {
    value: 'all',
    label: 'TÜMÜ',
  },
  {
    value: 'try',
    label: 'TRY',
  },
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'btc',
    label: 'BTC',
  },
];

const Dashboard = props => {
  const { theme } = useTheme();
  const AVAILABLE_CRYPTO_CURRENCIES = [
    {
      value: 'btc',
      label: 'Bitcoin',
      icon: (
        <Icon
          name="bitcoin"
          type="font-awesome-5"
          size={35}
          color={theme.colors.orange}
        />
      ),
      state: 'ascending',
      changePercentage: '8.73',
    },
    {
      value: 'xrp',
      label: 'Ripple',

      icon: (
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fxrp.png?alt=media&token=368d6c24-5d57-4f92-8974-004c4568d5dd',
          }}
          style={{ width: 35, height: 35 }}
          resizeMode="contain"
        />
      ),
      state: 'ascending',
      changePercentage: '1.26',
    },
    {
      value: 'eth',
      label: 'Ethereum',
      icon: (
        <Icon
          name="ethereum"
          type="font-awesome-5"
          size={35}
          color={theme.colors.blue}
        />
      ),
      state: 'ascending',
      changePercentage: '0.56',
    },
    {
      value: 'doge',
      label: 'Doge',
      icon: (
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fdogecoin.png?alt=media&token=433482a9-ded3-4030-acee-4fe752523a78',
          }}
          style={{ width: 35, height: 35 }}
          resizeMode="contain"
        />
      ),
      state: 'descending',
      changePercentage: '2.86',
    },
  ];
  const [selectedParity, setSelectedParity] = React.useState(
    AVAILABLE_PARITIES[1]
  );

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.bg,
      paddingTop: DEVICE_HEIGHT * (1 / 100),
      flex: 1,
      paddingBottom: 20,
    },
    parityContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: '5%',
    },
    parityText: {},
    higlightedParityText: {
      color: theme.colors.blue,
    },
    currencyContainer: {},
    infoContainer: {
      width: '95%',
      height: 24,
      marginHorizontal: '2.5%',
      backgroundColor: theme.colors.seperator,
      marginBottom: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    infoText: {
      textAlign: 'center',
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 12,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.parityContainer}>
        {AVAILABLE_PARITIES.map(parity => (
          <TouchableOpacity
            key={parity.value}
            onPress={() => setSelectedParity(parity)}
          >
            <StyledText
              style={[
                styles.parityText,
                selectedParity === parity && styles.higlightedParityText,
              ]}
            >
              {parity.label}
            </StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.infoContainer}>
        <StyledText style={[styles.infoText, { width: '35%' }]}>
          İsim/Hacim
        </StyledText>
        <StyledText style={[styles.infoText, { width: '25%' }]}>
          24s % değişim
        </StyledText>
        <StyledText style={[styles.infoText, { width: '30%' }]}>
          Son değer
        </StyledText>
      </View>
      <ScrollView style={styles.currencyContainer}>
        {selectedParity.value === 'all' &&
          AVAILABLE_PARITIES.map((parity, index) => {
            if (index !== 0) {
              return AVAILABLE_CRYPTO_CURRENCIES.map(currency => (
                <CurrencyView
                  icon={currency.icon}
                  initialCurrencyName={currency.label}
                  initialCurrency={currency.value}
                  targetCurrency={parity.value}
                  navigation={props.navigation}
                  targetRouteName="Kripto Detayı"
                  key={currency.value}
                  content={
                    <ChangePercentageView
                      state={currency.state}
                      percentage={currency.changePercentage}
                    />
                  }
                />
              ));
            }

            return null;
          })}
        {selectedParity.value !== 'all' &&
          AVAILABLE_CRYPTO_CURRENCIES.map(currency => (
            <CurrencyView
              icon={currency.icon}
              initialCurrencyName={currency.label}
              initialCurrency={currency.value}
              targetCurrency={selectedParity.value}
              navigation={props.navigation}
              targetRouteName="Kripto Detayı"
              key={currency.value}
              content={
                <ChangePercentageView
                  state={currency.state}
                  percentage={currency.changePercentage}
                />
              }
            />
          ))}
      </ScrollView>
    </View>
  );
};

/**
 * @param {{state: "descending" | "ascending", percentage: number}} param0
 */
const ChangePercentageView = ({ state, percentage }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
      color: state === 'descending' ? theme.colors.red : theme.colors.green,
    },
  });

  return (
    <View style={styles.container}>
      <Icon
        name={state === 'descending' ? 'chevron-down' : 'chevron-up'}
        type="font-awesome-5"
        size={20}
        color={state === 'descending' ? theme.colors.red : theme.colors.green}
      />
      <StyledText style={styles.text}> %{percentage}</StyledText>
    </View>
  );
};

export default Dashboard;
