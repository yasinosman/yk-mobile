import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

/**
 *
 * @param {{currency: string, currencyImage: string, currencyOrigin: string, buy: number, sell: number, dailyDifference:number}} param0
 * @returns {React.FC}
 */

const CurrencyButton = ({
  currency,
  currencyOrigin,
  buy,
  sell,
  dailyDifference,
}) => {
  const styles = StyleSheet.create({
    euroImageAndCaptionView: {
      flex: 1,
      marginRight: 10,
      marginTop: 10,
      flex: 2,
    },
    euroView: {
      flexDirection: 'row',
      marginTop: 10,
    },
    eurImage: {
      width: 45,
      height: 30,
      borderRadius: 2,
      marginLeft: 15,
      resizeMode: 'contain',
    },
    euroCaption: {
      marginTop: 10,
      fontSize: 11,
      marginLeft: 12,
      fontFamily: 'UbuntuLight',
    },
    buySellView: {
      flexDirection: 'row',
      height: 90,
      marginLeft: 10,
    },
    arrowDown: {
      width: 45,
      height: 45,
      marginTop: 10,
    },
    euroNumbers: {
      flex: 3,
      alignItems: 'flex-start',
    },
    euroBuyView: {
      marginLeft: 15,
      marginTop: 10,
      flexDirection: 'row',
    },
    euroBuy: {
      fontFamily: 'UbuntuLight',
      flex: 1,
    },
    euroBuyAmount: {
      fontFamily: 'UbuntuBold',
    },
    arrowDown: {
      width: 45,
      height: 45,
      marginTop: 10,
      flex: 0.5,
    },
    arrowView: {
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 0.5,
      marginLeft: 5,
    },
    arrowText: {
      marginRight: 18,
      height: 36,
      width: 20,
      resizeMode: 'contain',
    },
    currencyInfoText: {
      fontSize: 14,
      marginLeft: 15,
      marginTop: 5,
      fontFamily: 'UbuntuBold',
    },
  });
  return (
    <TouchableOpacity>
      <View style={styles.buySellView}>
        <View style={styles.euroImageAndCaptionView}>
          <View style={styles.euroView}>
            {currency == 'EUR' && (
              <Image
                source={require('../../assets/eur.png')}
                style={styles.eurImage}
              />
            )}
            {currency == 'USD' && (
              <Image
                source={require('../../assets/usd.jpeg')}
                style={styles.eurImage}
              />
            )}
            {currency == 'XAU' && (
              <Image
                source={require('../../assets/xau.jpg')}
                style={styles.eurImage}
              />
            )}
            <Text style={styles.currencyInfoText}>{currency}</Text>
          </View>
          <Text style={styles.euroCaption}>{currencyOrigin}</Text>
        </View>
        <Image
          source={require('../../assets/arrow_down.png')}
          style={styles.arrowDown}
        />
        <View style={styles.euroNumbers}>
          <View style={styles.euroBuyView}>
            <Text style={styles.euroBuy}>Alış</Text>
            <Text style={styles.euroBuyAmount}>{buy}</Text>
          </View>
          <View style={styles.euroBuyView}>
            <Text style={styles.euroBuy}>Satış</Text>
            <Text style={styles.euroBuyAmount}>{sell}</Text>
          </View>
          <View style={styles.euroBuyView}>
            <Text style={styles.euroBuy}>Günlük Fark</Text>
            <Text style={styles.euroBuyAmount}>{dailyDifference}</Text>
          </View>
        </View>
        <View style={styles.arrowView}>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CurrencyButton;
