import React from 'react';
import { StyleSheet, View, Animated, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../../context/Theme';
import useFade from '../../hooks/useFade';

/**
 *
 * @param {{
 *  styleOverrides: {
 *      container: StyleProp<ViewStyle>
 *  },
 * }} props
 * @returns
 */
const CryptoAlarmPlaceholder = ({ styleOverrides }) => {
  const { theme } = useTheme();

  const fade = useFade();

  return (
    <View
      style={[
        {
          height: 70,
          width: '100%',
          flexDirection: 'row',
        },
        styleOverrides?.container,
      ]}
    >
      {/* name and date container */}
      <View
        style={{
          width: '35%',
          height: '100%',
          padding: theme.sizes.padding,
        }}
      >
        {/* name */}
        <Animated.View
          style={{
            width: '75%',
            height: 18,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
        {/* date */}
        <Animated.View
          style={{
            width: '70%',
            height: 16,
            borderRadius: 10,
            marginTop: theme.sizes.inputPadding,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
      </View>

      {/* buy type and price container */}
      <View
        style={{
          width: '40%',
          height: '100%',
          padding: theme.sizes.padding,
        }}
      >
        {/* buy type */}
        <Animated.View
          style={{
            width: '80%',
            height: 18,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
        {/* price */}
        <Animated.View
          style={{
            width: '65%',
            height: 16,
            borderRadius: 10,
            marginTop: theme.sizes.inputPadding,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
      </View>

      {/* switch container */}
      <View
        style={{
          width: '25%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* switch */}
        <Animated.View
          style={{
            width: 35,
            height: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
      </View>
    </View>
  );
};

export default CryptoAlarmPlaceholder;

const styles = StyleSheet.create({});
