import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../context/Theme';
import StyledText from './StyledText';

/**
 *
 * @param {{date: string, price: string | number, quantity: string | number, type: "sell" | "buy", containerStyle: any}} param0
 * @returns
 */
const MarketActionView = ({
  date,
  price,
  quantity,
  type,
  containerStyle = {},
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    priceText: {
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 13,
      textAlign: 'center',
    },
    quantityText: {
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 13,
      textAlign: 'center',
    },
    dateText: {
      width: '30%',
      fontFamily: 'UbuntuLight',
      fontSize: 13,
      textAlign: 'center',
    },
    coloredText: {
      color: type === 'buy' ? theme.colors.green : theme.colors.red,
    },
  });

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <StyledText style={[styles.priceText, styles.coloredText]}>
        {price}
      </StyledText>
      <StyledText style={[styles.quantityText, styles.coloredText]}>
        {quantity}
      </StyledText>
      <StyledText style={[styles.dateText, styles.coloredText]}>
        {date}
      </StyledText>
    </View>
  );
};

export default MarketActionView;
