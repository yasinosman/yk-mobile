import React from 'react';
import { useTheme } from '../../../context/Theme';
import { StyleSheet, View, ScrollView } from 'react-native';
import Divider from '../../../lib/components/Divider';
import Order from '../../../lib/components/Order';
import useOrders from '../../../hooks/useOrders';
import OrderPlaceholder from '../../../lib/components/OrderPlaceholder';

const Orders = props => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
    },
    scrollView: {
      width: '100%',
    },
  });

  const [orders, isOrdersLoading] = useOrders();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Divider />
        {isOrdersLoading && [1, 2, 3, 4].map(i => <OrderPlaceholder key={i} />)}
        {!isOrdersLoading && (
          <React.Fragment>
            {orders.map((order, index) => {
              return (
                <Order
                  key={index}
                  name={order.name}
                  created_at={order.created_at}
                  type={order.type}
                  price={order.price}
                  amount={order.amount}
                  total={order.total}
                  priceCurrency={order.price_currency}
                />
              );
            })}
          </React.Fragment>
        )}
      </ScrollView>
    </View>
  );
};

export default Orders;
