import React from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { DEVICE_HEIGHT } from '../../../common/dimensions';
import ChangePercentageView from '../../../components/ChangePercentageView';
import CurrencyView from '../../../components/CurrencyView';
import MarketActionView from '../../../components/MarketActionView';
import StyledText from '../../../components/StyledText';
import { useTheme } from '../../../context/Theme';
import { CRYPTO_CURRENCIES } from '../../../hooks/useCurrency';
import { generateMockMarketData } from '../../../utils';

const Detail = props => {
  const [currency, setCurrency] = React.useState(CRYPTO_CURRENCIES[0]);

  const btcMarketData = generateMockMarketData('btc', 'usd');

  React.useEffect(() => {
    const curr = CRYPTO_CURRENCIES.find(
      c => c.value === props.route.params.currency
    );
    setCurrency(curr);
  }, [props.route.params]);

  const { theme } = useTheme();

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
      // backgroundColor: 'gray',
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
      width: '95%',
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
      {/* <MenuTitle text={`${currency.label}`} textStyles={styles.title} /> */}

      {/* <View style={styles.marketTypeContainer}>
        <Button
          title="Piyasalar"
          type="outline"
          containerStyle={styles.marketTypeButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
        />
        <Button
          title="Limit"
          type="outline"
          containerStyle={styles.marketTypeButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
          disabled
        />
        <Button
          title="Stop"
          type="outline"
          containerStyle={styles.marketTypeButton}
          buttonStyle={{ borderWidth: 0 }}
          titleStyle={styles.marketTypeButtonTitle}
          disabled
        />
      </View> */}
      <CurrencyView
        icon={currency.icon}
        initialCurrency={currency.value}
        initialCurrencyName={currency.label}
        targetCurrency={'try'}
        content={
          <ChangePercentageView
            state={currency.state}
            percentage={currency.changePercentage}
          />
        }
      />

      <View style={styles.chartContainer}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/img%2Fchart.png?alt=media&token=6119860d-1403-4bdc-8679-4cdbba7d37bc',
          }}
          resizeMode="contain"
          style={{ width: 378, height: 330 }}
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
          {btcMarketData.map((data, index) => (
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
