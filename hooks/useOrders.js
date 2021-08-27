import React from 'react';
import { formatDate, formatTime } from '../lib/utils';
import useFirestoreCollection from './useFirestoreCollection';

const useOrders = () => {
  const [orders, setOrders] = React.useState([]);

  const ordersData = useFirestoreCollection('orders');

  React.useEffect(() => {
    setOrders(
      ordersData
        .sort((a, b) => b.created_at.toDate() - a.created_at.toDate())
        .map(order => ({
          ...order,
          created_at: `${formatDate(order.created_at.toDate())} ${formatTime(
            order.created_at.toDate()
          )}`,
        }))
    );
  }, [ordersData]);

  return orders;
};

export default useOrders;
