import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../context/Theme';
import StyledText from './StyledText';
import { TouchableOpacity } from 'react-native';
import { convertCurrency, formatAmount } from '../utils';
import { Icon } from 'react-native-elements';
import { DEVICE_HEIGHT } from '../common/dimensions';
import AmountText from './AmountText';

const CurrencyView = ({
  icon = <Icon name="bitcoin" type="font-awesome-5" size={35} />,
  initialCurrencyName,
  content,
  initialCurrency,
  targetCurrency,
  navigation,
  targetRouteName,
}) => {
  const [integerValue, decimalValue] = formatAmount(
    convertCurrency(initialCurrency, 1, targetCurrency)
  );

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.card,
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: DEVICE_HEIGHT * (7.5 / 100),
      borderRadius: 10,
      width: '95%',
      marginLeft: '2.5%',
      marginVertical: '0.5%',
      // shadows
      //iOS
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      //Android
      elevation: 3,
    },
    iconContainer: {
      width: '15%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    nameContainer: {
      width: '20%',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
    },
    nameText: {},
    parityText: {
      fontFamily: 'UbuntuLight',
      fontSize: 12,
    },
    contentContainer: {
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    valueContainer: {
      width: '35%',
      justifyContent: 'center',
      paddingRight: 5,
    },
    valueText: {
      fontSize: 16,
      textAlign: 'right',
    },
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(targetRouteName, { currency: initialCurrency })
      }
      style={styles.wrapper}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.nameContainer}>
        <StyledText style={styles.nameText}>{initialCurrencyName}</StyledText>
        <StyledText style={styles.parityText}>
          {initialCurrency.toUpperCase()}/{targetCurrency.toUpperCase()}
        </StyledText>
      </View>
      <View style={styles.contentContainer}>{content}</View>
      <View style={styles.valueContainer}>
        <StyledText style={styles.valueText}>
          {integerValue}
          {decimalValue && `,${decimalValue}`} {targetCurrency.toUpperCase()}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default CurrencyView;
