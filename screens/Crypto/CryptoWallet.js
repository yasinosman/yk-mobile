import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { PieChart } from 'react-native-chart-kit';
import { useTheme } from '../../context/Theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../lib/constants';
import { convertCurrency, formatAmount, formatTime } from '../../lib/utils';
import { CURRENCY_DICTIONARY, EXCHANGE_RATES } from '../../hooks/useCurrency';
import {
  StyledText,
  AmountText,
  CryptoWalletPlaceholder,
} from '../../lib/components';
import useMock from '../../hooks/useMock';
import useWallets from '../../hooks/useWallets';

const CryptoWallet = () => {
  const [wallets, isWalletsLoading] = useWallets();

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      backgroundColor: theme.colors.bg,
    },
    titleContainer: {
      width: '90%',
      marginHorizontal: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: DEVICE_HEIGHT * (3 / 100),
    },
    titleKey: {
      fontSize: 18,
      fontFamily: 'UbuntuLight',
    },
    titleValue: {
      fontSize: 18,
      fontFamily: 'UbuntuBold',
      color: theme.colors.blue,
    },
    chartContainer: {
      height: 250,
      width: '95%',
      marginHorizontal: '2.5%',
      marginVertical: DEVICE_HEIGHT * (2 / 100),
      // borderColor: theme.colors.blue,
      // borderWidth: 0.1,
      // borderRadius: 10,
    },
    listContainer: {
      height: DEVICE_HEIGHT * (25 / 100),
      width: '90%',
      marginHorizontal: '5%',
      alignItems: 'center',
      marginTop: 15,
      marginVertical: DEVICE_HEIGHT * (5 / 100),
    },
    listContainerHeader: {
      width: '100%',
      height: 40,
      marginHorizontal: '2.5%',
      backgroundColor: theme.colors.seperator,
      marginBottom: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    listContainerHeaderText: {
      textAlign: 'center',
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 15,
    },
    listElementContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    listElementText: {
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 14,
      textAlign: 'left',
      paddingVertical: 5,
    },
  });

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

  const calculateColor = index =>
    [
      theme.colors.blue,
      theme.colors.orange,
      theme.colors.green,
      theme.colors.red,
    ][index];

  const totalMoney = React.useMemo(
    () =>
      wallets.length > 0
        ? wallets[0].assets.reduce((a, c) => {
            return (
              parseFloat(a) +
              parseFloat(parseFloat(c.amount) * EXCHANGE_RATES[c.currency].try)
            ).toFixed(2);
          }, 0)
        : '',
    [wallets]
  );

  const walletData = React.useMemo(() => {
    if (wallets.length <= 0) {
      return [];
    } else {
      return wallets[0].assets.map((asset, index) => ({
        name: asset.currency.toUpperCase(),
        total: convertCurrency(asset.currency, asset.amount, 'try'),
        amount: asset.amount,
        color: calculateColor(index),
        legendFontColor: calculateColor(index),
        legendFontSize: 15,
      }));
    }
  }, [wallets]);

  const mockDate = useMock(() => formatTime(new Date()), 5000, false);

  return <CryptoWalletPlaceholder />;
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <StyledText style={styles.titleKey}>Net Varlığınız</StyledText>
        <AmountText
          amount={totalMoney}
          currency="try"
          primaryTextStyles={styles.titleValue}
          secondaryTextStyles={{ color: theme.colors.blue, fontSize: 16 }}
        />
      </View>

      <Divider orientation="horizontal" insetType="middle" />

      <View style={styles.chartContainer}>
        {wallets.length > 0 && (
          <PieChart
            data={walletData}
            accessor={'total'}
            width={DEVICE_WIDTH * (90 / 100)}
            height={250}
            paddingLeft={20}
            chartConfig={chartConfig}
            backgroundColor={'transparent'}
            avoidFalseZero={true}
            // hasLegend={false}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: DEVICE_WIDTH * (2.5 / 100),
            }}
          />
        )}
      </View>

      <Divider orientation="horizontal" insetType="middle" />

      <View style={styles.listContainer}>
        <View style={styles.listContainerHeader}>
          <StyledText
            style={[styles.listContainerHeaderText, { width: '25%' }]}
          >
            Para Birimi
          </StyledText>
          <StyledText
            style={[styles.listContainerHeaderText, { width: '45%' }]}
          >
            Miktar
          </StyledText>
          <StyledText
            style={[styles.listContainerHeaderText, { width: '30%' }]}
          >
            TRY Karşılığı
          </StyledText>
        </View>
        <ScrollView>
          {walletData.map((data, index) => {
            const [amountInt, amountDecimal] = formatAmount(
              parseFloat(data.amount).toFixed(2)
            );
            const [totalInt, totalDecimal] = formatAmount(
              parseFloat(data.total).toFixed(2)
            );

            return (
              <View
                style={[
                  styles.listElementContainer,
                  {
                    backgroundColor:
                      index % 2 !== 0
                        ? theme.colors.highlight
                        : theme.colors.bg,
                  },
                ]}
                key={index}
              >
                <StyledText
                  style={[
                    styles.listElementText,
                    { width: '15%', paddingLeft: theme.sizes.padding },
                  ]}
                >
                  {data.name}
                </StyledText>
                <StyledText
                  style={[
                    styles.listElementText,
                    {
                      width: '45%',
                      textAlign: 'right',
                    },
                  ]}
                >
                  {amountInt}
                  {amountDecimal && `,${amountDecimal}`}{' '}
                  {CURRENCY_DICTIONARY[data.name] ?? data.name.toUpperCase()}
                </StyledText>
                <StyledText
                  style={[
                    styles.listElementText,
                    {
                      width: '40%',
                      textAlign: 'right',
                      paddingRight: theme.sizes.padding,
                    },
                  ]}
                >
                  {totalInt}
                  {totalDecimal && `,${totalDecimal}`} {CURRENCY_DICTIONARY.try}
                </StyledText>
              </View>
            );
          })}
        </ScrollView>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: theme.sizes.padding,
          }}
        >
          <Icon
            name="info-circle"
            type="font-awesome-5"
            size={25}
            color={theme.colors.blue}
          />
          <StyledText
            style={{
              marginLeft: theme.sizes.padding,
              fontFamily: 'UbuntuLight',
              fontSize: theme.sizes.smallText,
            }}
          >
            Son güncelleme: {mockDate}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

export default CryptoWallet;
