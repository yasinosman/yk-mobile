import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { useTheme } from '../../context/Theme';
import { Switch } from 'react-native-elements';
import AmountText from './AmountText';
import StyledText from './StyledText';

/**
 *
 * @param {{
 *  styleOverrides: {
 *      container: StyleProp<ViewStyle>
 *  },
 *  name: string,
 *  created_at: string,
 *  type: "buy" | "sell",
 *  target_value: number | string
 * }} props
 * @returns
 */
const CryptoAlarm = ({
  styleOverrides,
  name,
  created_at,
  type,
  target_value,
}) => {
  const { theme } = useTheme();
  const [switchValue, setSwitchValue] = React.useState(true);

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.bg,
          height: 70,
          flexDirection: 'row',
        },
        styleOverrides?.container,
      ]}
    >
      <View
        style={{
          width: '35%',
          height: '100%',
          padding: theme.sizes.padding,
        }}
      >
        <StyledText
          style={{
            fontFamily: 'UbuntuBold',
            fontSize: theme.sizes.largeText,
            marginBottom: theme.sizes.inputPadding,
          }}
        >
          {name}
        </StyledText>
        <StyledText style={{ fontFamily: 'UbuntuLight' }}>
          {created_at}
        </StyledText>
      </View>
      <View
        style={{
          width: '40%',
          height: '100%',
          padding: theme.sizes.padding,
        }}
      >
        <StyledText
          style={{
            fontFamily: 'UbuntuBold',
            fontSize: theme.sizes.largeText,
            marginBottom: theme.sizes.inputPadding,
          }}
        >
          Banka {type === 'buy' ? 'Alış' : 'Satış'}
        </StyledText>
        <AmountText
          amount={target_value}
          currency="try"
          primaryTextStyles={{
            fontFamily: 'Ubuntu',
            fontSize: theme.sizes.smallText,
            textAlign: 'left',
          }}
          secondaryTextStyles={{
            fontFamily: 'Ubuntu',
            fontSize: theme.sizes.tinyText,
            textAlign: 'left',
          }}
        />
      </View>
      <View
        style={{
          width: '25%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Switch
          trackColor={{
            false: theme.colors.seperator,
            true: theme.colors.blue,
          }}
          ios_backgroundColor={theme.colors.seperator}
          onValueChange={setSwitchValue}
          value={switchValue}
          thumbColor="white"
        />
      </View>
    </View>
  );
};

export default CryptoAlarm;
