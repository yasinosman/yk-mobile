import { Timestamp } from '../../firebase';
import { formatDate, formatTime } from '../../lib/utils';
import { addDocumentToCollection, fetchCollectionByName } from '../database';

export function getOrders() {
  return new Promise((resolve, reject) => {
    fetchCollectionByName('orders')
      .then(orders =>
        resolve(
          orders
            .sort((a, b) => b.created_at.toDate() - a.created_at.toDate())
            .map(order => ({
              ...order,
              created_at: `${formatDate(
                order.created_at.toDate()
              )} ${formatTime(order.created_at.toDate())}`,
            }))
        )
      )
      .catch(error => reject(error));
  });
}

/**
 *
 * @param {string} name
 * @param {number} amount
 * @param {number} price
 * @param {"buy" | "sell"} type
 * @param {"try" | "usd" | "eur" | "btc" | "eth" | "doge" | "xrp"} currency
 */
export function createOrder(name, amount, price, type, currency) {
  return addDocumentToCollection('orders', {
    name,
    amount,
    price,
    price_currency: currency,
    type,
    total: (parseFloat(amount) * parseFloat(price)).toFixed(2),
    created_at: Timestamp.fromDate(new Date()),
  });
}
