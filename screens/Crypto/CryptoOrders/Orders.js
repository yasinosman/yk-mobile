import React, { useState } from 'react';
import { useTheme } from '../../../context/Theme';
import { StyleSheet, View, ScrollView } from 'react-native';
import { StyledText } from '../../../lib/components';
import Divider from '../../../lib/components/Divider';
import Order from '../../../lib/components/Order';

const orders = [
  {
    name: 'BTC/USD',
    type: 'buy',
    price: 44550.75,
    amount: 0.05,
    total: 2225,
    created_at: '26/08/2021 11:15:30',
  },
  {
    name: 'BTC/DOGE',
    type: 'sell',
    price: 44550.75,
    amount: 0.05,
    total: 2225,
    created_at: '26/08/2021 11:15:30',
  },
  {
    name: 'ETH/USD',
    type: 'sell',
    price: 44550.75,
    amount: 0.05,
    total: 2225,
    created_at: '26/08/2021 11:15:30',
  },
  {
    name: 'BTC/ETH',
    type: 'buy',
    price: 44550.75,
    amount: 0.05,
    total: 2225,
    created_at: '26/08/2021 11:15:30',
  },
];

const Orders = ({ navigation, route }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
    },
    scrollView: {
      flex: 10,
      width: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Divider />
        {orders.map((option, index) => {
          return (
            <Order
              key={index}
              name={option.name}
              created_at={option.created_at}
              type={option.type}
              price={option.price}
              amount={option.amount}
              total={option.total}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Orders;
