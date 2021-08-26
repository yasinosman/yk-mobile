import React, { useState } from 'react';
import { useTheme } from '../../context/Theme';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import Divider from './Divider';
import { Reducer } from 'react-native-router-flux';

const Order = ({ name, type, price, amount, total, created_at }) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    order: {
      padding: theme.sizes.padding,
      width: '100%',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: theme.sizes.padding,
    },
    pairName: {
      fontSize: theme.sizes.largeText,
      flex: 1.5,
    },
    buySell: {
      fontSize: theme.sizes.text,
      color: type == 'buy' ? 'green' : 'red',
    },
    subView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: theme.sizes.padding,
    },
    subtitle: {
      flex: 1,
      fontSize: theme.sizes.smallText,
    },
  });

  return (
    <View>
      <View style={styles.order}>
        <View style={styles.titleView}>
          <StyledText style={styles.pairName}>{name}</StyledText>
          <StyledText style={styles.dateTime}>{created_at}</StyledText>
        </View>
        <StyledText style={styles.buySell}>
          {type == 'buy' ? 'Al' : 'Sat'}
        </StyledText>
        <View style={styles.subView}>
          <StyledText style={styles.subtitle}>Fiyat</StyledText>
          <StyledText>{price}</StyledText>
        </View>
        <View style={styles.subView}>
          <StyledText style={styles.subtitle}>Miktar</StyledText>
          <StyledText>{amount}</StyledText>
        </View>
        <View style={styles.subView}>
          <StyledText style={styles.subtitle}>Toplam</StyledText>
          <StyledText>{total}</StyledText>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Order;
