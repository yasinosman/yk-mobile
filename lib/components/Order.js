import React from 'react';
import { useTheme } from '../../context/Theme';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import Divider from './Divider';
import AmountText from './AmountText';

const Order = ({
  name,
  type,
  price,
  priceCurrency,
  amount,
  total,
  created_at,
}) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    order: {
      paddingVertical: theme.sizes.padding,
      paddingHorizontal: theme.sizes.padding * 2,
      width: '100%',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: theme.sizes.padding,
    },
    pairName: {
      fontSize: theme.sizes.hugeText,
      fontFamily: 'UbuntuBold',
      flex: 1.5,
    },
    buySell: {
      fontSize: theme.sizes.largeText,
      color: type == 'buy' ? 'green' : 'red',
    },
    subView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: theme.sizes.inputPadding,
    },
    subtitle: {
      flex: 1,
      fontSize: theme.sizes.smallText,
    },
    dateTime: {
      fontFamily: 'UbuntuLight',
    },
  });

  return (
    <View>
      <View style={styles.order}>
        <View style={styles.titleView}>
          <StyledText style={styles.pairName}>{name.toUpperCase()}</StyledText>
          <StyledText style={styles.dateTime}>{created_at}</StyledText>
        </View>
        <StyledText style={styles.buySell}>
          {type == 'buy' ? 'Al' : 'Sat'}
        </StyledText>
        <View style={styles.subView}>
          <StyledText style={styles.subtitle}>Birim Fiyat</StyledText>
          <AmountText
            amount={price}
            currency={priceCurrency}
            primaryTextStyles={{
              fontFamily: 'Ubuntu',
              fontSize: theme.sizes.text,
            }}
            secondaryTextStyles={{
              fontFamily: 'Ubuntu',
              fontSize: theme.sizes.smallText,
            }}
          />
        </View>
        <View style={styles.subView}>
          <StyledText style={styles.subtitle}>
            {type === 'buy' ? 'Alınan' : 'Satılan'} Miktar
          </StyledText>
          <AmountText
            amount={amount}
            currency={name.split('/')[0]}
            primaryTextStyles={{
              fontFamily: 'Ubuntu',
              fontSize: theme.sizes.text,
            }}
            secondaryTextStyles={{
              fontFamily: 'Ubuntu',
              fontSize: theme.sizes.smallText,
            }}
          />
        </View>
        <View style={styles.subView}>
          <StyledText style={styles.subtitle}>
            {type === 'buy' ? 'Ödenen' : 'Alınan'} Ücret
          </StyledText>
          <AmountText
            amount={total}
            currency={priceCurrency}
            primaryTextStyles={{
              fontFamily: 'Ubuntu',
              fontSize: theme.sizes.text,
            }}
            secondaryTextStyles={{
              fontFamily: 'Ubuntu',
              fontSize: theme.sizes.smallText,
            }}
          />
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Order;
