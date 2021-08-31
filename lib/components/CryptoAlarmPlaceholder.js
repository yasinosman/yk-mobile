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
    <View style={[styles.wrapper, styleOverrides?.container]}>
      {/* name and date container */}
      <View style={[styles.container, { padding: theme.sizes.padding }]}>
        {/* name */}
        <Animated.View
          style={[
            styles.largeText,
            {
              backgroundColor: theme.colors.seperator,
              opacity: fade,
            },
          ]}
        ></Animated.View>
        {/* date */}
        <Animated.View
          style={[
            styles.text,
            {
              marginTop: theme.sizes.inputPadding,
              backgroundColor: theme.colors.seperator,
              opacity: fade,
            },
          ]}
        ></Animated.View>
      </View>

      {/* buy type and price container */}
      <View
        style={[
          styles.container,
          { width: '40%', padding: theme.sizes.padding },
        ]}
      >
        {/* buy type */}
        <Animated.View
          style={[
            styles.hugeText,
            {
              backgroundColor: theme.colors.seperator,
              opacity: fade,
            },
          ]}
        ></Animated.View>
        {/* price */}
        <Animated.View
          style={[
            styles.smallText,
            {
              marginTop: theme.sizes.inputPadding,
              backgroundColor: theme.colors.seperator,
              opacity: fade,
            },
          ]}
        ></Animated.View>
      </View>

      {/* switch container */}
      <View
        style={[
          styles.container,
          {
            width: '25%',
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        {/* switch */}
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.seperator,
              opacity: fade,
            },
          ]}
        ></Animated.View>
      </View>
    </View>
  );
};

export default CryptoAlarmPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
  },
  container: {
    width: '35%',
    height: '100%',
  },
  hugeText: {
    width: '80%',
    height: 18,
    borderRadius: 10,
  },
  largeText: {
    width: '75%',
    height: 18,
    borderRadius: 10,
  },
  text: {
    width: '70%',
    height: 16,
    borderRadius: 10,
  },
  smallText: {
    width: '65%',
    height: 16,
    borderRadius: 10,
  },
  button: {
    width: 35,
    height: 20,
    borderRadius: 10,
  },
});
