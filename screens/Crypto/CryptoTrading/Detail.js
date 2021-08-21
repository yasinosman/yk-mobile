import React from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useTheme } from '../../../context/Theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../lib/constants';
import {
  ChangePercentageView,
  CurrencyView,
  MarketActionView,
  StyledText,
} from '../../../lib/components';

import {
  CRYPTO_CURRENCIES,
  CURRENCY_DICTIONARY,
} from '../../../hooks/useCurrency';
import { generateMockMarketData } from '../../../lib/utils';
import { LineChart } from 'react-native-chart-kit';
import useMock from '../../../hooks/useMock';

const Detail = props => {
  const [currency, setCurrency] = React.useState(CRYPTO_CURRENCIES[0]);
  const [targetCurrency, setTargetCurrency] = React.useState('usd');

  const marketData = useMock(() =>
    generateMockMarketData(currency.value, targetCurrency)
  );

  React.useEffect(() => {
    const curr = CRYPTO_CURRENCIES.find(
      c => c.value === props.route.params.currency
    );
    setCurrency(curr);

    setTargetCurrency(props.route.params.targetCurrency);
  }, [props.route.params]);

  const { theme } = useTheme();

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'white',
    backgroundGradientToOpacity: 0,
    color: () => theme.colors.blue,
    //(opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 0,
  };

  const styles = StyleSheet.create({
    wrapper: {
      height: DEVICE_HEIGHT,
      backgroundColor: theme.colors.bg,
      flex: 1,
      paddingTop: 5,
      paddingBottom: 100,
    },
    title: {
      marginVertical: 10,
    },
    marketTypeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '95%',
      marginHorizontal: '2.5%',
      borderBottomWidth: 0.5,
      borderColor: theme.colors.blue,
      marginBottom: 10,
    },
    marketTypeButton: {
      width: '30%',
    },
    marketTypeButtonTitle: {
      fontFamily: 'Ubuntu',
      fontSize: 13,
    },
    chartContainer: {
      height: DEVICE_HEIGHT * (30 / 100),
      width: '95%',
      marginHorizontal: '2.5%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginVertical: 20,
    },
    infoContainer: {
      height: DEVICE_HEIGHT * (30 / 100),
      width: '95%',
      marginHorizontal: '2.5%',
      alignItems: 'center',
    },
    buttonContainer: {
      height: DEVICE_HEIGHT * (10 / 100),
      flexDirection: 'row',
      width: '95%',
      marginHorizontal: '2.5%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button: {
      width: '40%',
      height: 40,
      backgroundColor: theme.colors.bg,
      justifyContent: 'center',
      alignItems: 'center',
      // //iOS
      // shadowOffset: { width: 0, height: 3 },
      // shadowOpacity: 0.1,
      // shadowRadius: 5,
      // //Android
      //elevation: 2,
      borderRadius: 10,
    },
    marketInfoButton: {
      width: '25%',
    },
    marketInfoBar: {
      width: '100%',
      height: 24,
      marginHorizontal: '2.5%',
      backgroundColor: theme.colors.seperator,
      marginBottom: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    marketInfoText: {
      textAlign: 'center',
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 12,
    },
  });

  return (
    <ScrollView style={styles.wrapper}>
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

      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: marketData.map(data => data.date).slice(-4),
            datasets: [
              {
                data: marketData
                  .map(data =>
                    parseInt(
                      data.price.split('.').join('').split(',').join('.')
                    )
                  )
                  .slice(-10),
              },
            ],
          }}
          width={DEVICE_WIDTH * (90 / 100)}
          height={DEVICE_HEIGHT * (30 / 100)}
          chartConfig={chartConfig}
          bezier
          withInnerLines={false}
          // withOuterLines={false}
          // style={{
          //   backgroundColor: 'gray',
          // }}
          yLabelsOffset={5}
          yAxisSuffix={CURRENCY_DICTIONARY[targetCurrency] ?? targetCurrency}
        />
      </View>

      <View style={styles.marketTypeContainer}>
        <Button
          title="Piyasa"
          type="outline"
          containerStyle={styles.marketInfoButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
        />
        <Button
          title="Açık Emirler"
          type="outline"
          containerStyle={styles.marketInfoButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
          disabled
        />
        <Button
          title="Geçmiş"
          type="outline"
          containerStyle={styles.marketInfoButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
          disabled
        />
        <Button
          title="Son İşlemler"
          type="outline"
          containerStyle={styles.marketInfoButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
          disabled
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.marketInfoBar}>
          <StyledText style={[styles.marketInfoText]}>Fiyat</StyledText>
          <StyledText style={[styles.marketInfoText]}>Miktar</StyledText>
          <StyledText style={[styles.marketInfoText]}>Tarih</StyledText>
        </View>
        <ScrollView style={{ height: '100%', width: '100%' }}>
          {marketData.map((data, index) => (
            <MarketActionView
              key={data.id}
              date={data.date}
              price={data.price}
              quantity={data.quantity}
              type={data.type}
              containerStyle={{
                backgroundColor:
                  index % 2 !== 0 ? theme.colors.highlight : theme.colors.bg,
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.blue,
              borderWidth: 0.5,
              borderColor: 'white',
            },
          ]}
          onPress={() =>
            props.navigation.navigate('Kripto Alış', {
              currency: currency.value,
              targetCurrency: targetCurrency,
            })
          }
        >
          <StyledText style={{ color: 'white' }}>
            {currency.value.toUpperCase()} Al
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: 'white',
              borderWidth: 0.5,
              borderColor: theme.colors.blue,
            },
          ]}
          onPress={() =>
            props.navigation.navigate('Kripto Satış', {
              currency: currency.value,
              targetCurrency: targetCurrency,
            })
          }
        >
          <StyledText style={{ color: theme.colors.blue }}>
            {currency.value.toUpperCase()} Sat
          </StyledText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Detail;
