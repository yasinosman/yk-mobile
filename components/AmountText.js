import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../context/Theme';
import { CURRENCY_DICTIONARY } from '../hooks/useCurrency';
import { formatAmount } from '../utils';
import StyledText from './StyledText';

const AmountText = ({
  amount,
  currency,
  primaryTextStyles = {},
  secondaryTextStyles = {},
  ...props
}) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    text: {},
    primaryText: {
      color: theme.colors.text,
      textAlign: 'center',
      fontSize: 19,
      fontFamily: 'UbuntuBold',
    },
    secondaryText: {
      color: theme.colors.text,
      textAlign: 'center',
      fontSize: 17,
      fontFamily: 'UbuntuBold',
    },
  });

  const [integer, decimal] = formatAmount(amount);

  return (
    <StyledText style={[styles.primaryText, primaryTextStyles]} {...props}>
      {integer}
      <StyledText style={[styles.secondaryText, secondaryTextStyles]}>
        {decimal && `,${decimal}`}{' '}
        {CURRENCY_DICTIONARY[currency] ?? currency.toUpperCase()}
      </StyledText>
    </StyledText>
  );
};

export default AmountText;
