import React from 'react';
import useCurrency, { CURRENCY_DICTIONARY } from '../hooks/useCurrency';
import FadeInText from './FadeInText';

/**
 *
 * @param {{initialAmount: number, initialCurrency: "try" | "usd" | "eur", targetCurrency: "try" | "usd" | "eur", calculationTimeout: number, ...props:any}} param0
 * @returns
 */
const CurrencyText = ({
  initialAmount = 1000,
  initialCurrency = 'try',
  targetCurrency = 'usd',
  calculationTimeout = 2000,
  ...props
}) => {
  const [currency, amount] = useCurrency(
    initialAmount,
    initialCurrency,
    targetCurrency,
    calculationTimeout
  );

  return (
    <FadeInText
      {...props}
    >{`${amount} ${CURRENCY_DICTIONARY[currency]}`}</FadeInText>
  );
};

export default CurrencyText;
