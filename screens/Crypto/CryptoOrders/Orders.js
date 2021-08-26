import React from 'react';
import { useTheme } from '../../../context/Theme';
import { StyleSheet, View, ScrollView } from 'react-native';
import Divider from '../../../lib/components/Divider';
import Order from '../../../lib/components/Order';
import { getOrders } from '../../../services/orders';

const Orders = ({ navigation, route }) => {
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

  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    getOrders()
      .then(orders => setOrders(orders))
      .catch(error => console.log(error));
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Divider />
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
      </ScrollView>
    </View>
  );
};

export default Orders;
