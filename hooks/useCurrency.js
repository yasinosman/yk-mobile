import React from 'react';
import useInterval from './useInterval';

/**
 *  Converts initial currency to target currency in every n seconds. n is specified by timeout parameter
 * @param {number} initialAmount
 * @param {"try" | "eur" | "usd"} initialCurrency
 * @param {"try" | "eur" | "usd"} targetCurrency
 * @param {number} timeout
 */
function useCurrency(initialAmount, initialCurrency, targetCurrency, timeout) {
  const [result, setResult] = React.useState({
    currency: initialCurrency,
    amount: initialAmount,
  });

  useInterval(() => {
    if (initialCurrency === targetCurrency) {
      setResult({
        currency: initialCurrency,
        amount: initialAmount,
      });
    } else if (result.currency == initialCurrency) {
      setResult({
        currency: targetCurrency,
        amount: Math.floor(
          initialAmount * EXCHANGE_RATES[initialCurrency][targetCurrency]
        ),
      });
    } else {
      setResult({
        currency: initialCurrency,
        amount: initialAmount,
      });
    }
  }, timeout);

  return [result.currency, result.amount];
}

const EXCHANGE_RATES = {
  try: {
    usd: 0.12,
    eur: 0.1,
  },
  usd: {
    try: 8.45,
    eur: 0.84,
  },
  eur: {
    try: 10.02,
    usd: 1.19,
  },
};

const CURRENCY_DICTIONARY = {
  eur: '€',
  try: '₺',
  usd: '$',
};

export { EXCHANGE_RATES, CURRENCY_DICTIONARY };
export default useCurrency;
