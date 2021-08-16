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
    btc: 0.0000026,
    eth: 0.000038,
    doge: 0.36,
    xrp: 0.09313,
  },
  usd: {
    try: 8.45,
    eur: 0.84,
    btc: 0.000022,
    eth: 0.00032,
    doge: 3.09,
    xrp: 0.789,
  },
  eur: {
    try: 10.02,
    usd: 1.19,
    btc: 0.000026,
    eth: 0.00038,
    doge: 3.5,
    xrp: 0.92948,
  },
  btc: {
    try: 382856.47,
    usd: 44606.5,
    eur: 38020.13,
    eth: 14.43,
    doge: 140056,
    xrp: 37384,
  },
  eth: {
    try: 26612.11,
    usd: 3264.91,
    eur: 2642.27,
    btc: 0.069461,
    doge: 56343,
    xrp: 2595,
  },
  doge: {
    try: 2.73,
    usd: 0.3364,
    eur: 0.2905,
    btc: 0.000007,
    eth: 0.0000219,
    xrp: 0.26521,
  },
  xrp: {
    try: 10796,
    usd: 1.2678,
    eur: 1079,
    btc: 0.0000269,
    eth: 0.00039,
    doge: 21861,
  },
};

const CURRENCY_DICTIONARY = {
  eur: '€',
  try: '₺',
  usd: '$',
};

export { EXCHANGE_RATES, CURRENCY_DICTIONARY };
export default useCurrency;
