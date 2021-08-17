import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/Theme';
import StyledText from '../../../components/StyledText';
import { TouchableOpacity } from 'react-native';
import CurrencyView from '../../../components/CurrencyView';
import { DEVICE_HEIGHT } from '../../../common/dimensions';
import { ScrollView } from 'react-native';
import { CRYPTO_CURRENCIES } from '../../../hooks/useCurrency';
import ChangePercentageView from '../../../components/ChangePercentageView';

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
      <ScrollView
        style={styles.currencyContainer}
        showsVerticalScrollIndicator={false}
      >
        {selectedParity.value === 'all' &&
          AVAILABLE_PARITIES.map((parity, index) => {
            if (index !== 0) {
              return CRYPTO_CURRENCIES.map(currency => (
                <CurrencyView
                  icon={currency.icon}
                  initialCurrencyName={currency.label}
                  initialCurrency={currency.value}
                  targetCurrency={parity.value}
                  onPress={() =>
                    props.navigation.navigate('Kripto Detayı', {
                      currency: currency.value,
                      targetCurrency: parity.value,
                    })
                  }
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
          CRYPTO_CURRENCIES.map(currency => (
            <CurrencyView
              icon={currency.icon}
              initialCurrencyName={currency.label}
              initialCurrency={currency.value}
              targetCurrency={selectedParity.value}
              onPress={() =>
                props.navigation.navigate('Kripto Detayı', {
                  currency: currency.value,
                  targetCurrency: selectedParity.value,
                })
              }
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

export default Dashboard;
