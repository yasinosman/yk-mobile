import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../context/Theme';
import useFade from '../../hooks/useFade';
import { DEVICE_WIDTH } from '../constants';

/**
 *
 * @param {{
 * styleOverrides?:
 * {
 *  container?: StyleProp<ViewStyle>,
 *  headerContainer?: StyleProp<ViewStyle>,
 *  iconContainer?: StyleProp<ViewStyle>,
 *  titleContainer?: StyleProp<ViewStyle>,
 *  key?: StyleProp<TextStyle>,
 *  value?: StyleProp<TextStyle>,
 *  title?: StyleProp<TextStyle>,
 *  subTitle?: StyleProp<TextStyle>,
 * }
 * }} props
 * @returns
 */
const CardViewPlaceholder = props => {
  const { styleOverrides = {} } = props;

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: (DEVICE_WIDTH * 9) / 10,
      height: 126,
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      borderColor: theme.colors.seperator,
      borderLeftWidth: 5,
      marginHorizontal: DEVICE_WIDTH * (5 / 100),
      marginTop: theme.sizes.padding,
      padding: theme.sizes.padding,
      //iOS
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      //Android
      elevation: 3,
    },
    headerContainer: {
      height: 50,
      marginVertical: 3,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      width: 55,
      height: 45,
      backgroundColor: theme.colors.seperator,
      marginHorizontal: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleContainer: {
      width: DEVICE_WIDTH * (90 / 100) - (75 + 25),
      height: 45,
      flex: 1,
      justifyContent: 'flex-start',
    },
    contentContainer: {
      height: 50,
      marginVertical: 3,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    seperator: {
      height: '100%',
      width: 1,
      backgroundColor: theme.colors.seperator,
    },
  });

  const fade = useFade();

  return (
    <View style={[styles.container, styleOverrides?.container]}>
      <View style={[styles.headerContainer, styleOverrides?.headerContainer]}>
        <Animated.View
          style={[
            styles.iconContainer,
            styleOverrides?.iconContainer,
            { opacity: fade },
          ]}
        ></Animated.View>
        <View style={[styles.titleContainer, styleOverrides?.titleContainer]}>
          <View style={{ width: '80%', height: '100%' }}>
            <Animated.View
              style={[
                {
                  width: '90%',
                  height: theme.sizes.text,
                  borderRadius: 10,
                  backgroundColor: theme.colors.seperator,
                  opacity: fade,
                },
                styleOverrides?.title,
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                {
                  width: '60%',
                  height: theme.sizes.smallText,
                  borderRadius: 10,
                  backgroundColor: theme.colors.seperator,
                  marginTop: theme.sizes.padding,
                  opacity: fade,
                },
                styleOverrides?.subTitle,
              ]}
            ></Animated.View>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={{
            width: DEVICE_WIDTH * (40 / 100),
            height: '100%',
          }}
        >
          <Animated.View
            style={[
              {
                width: '80%',
                marginHorizontal: '10%',
                height: theme.sizes.smallText,
                backgroundColor: theme.colors.seperator,
                marginTop: theme.sizes.inputPadding,
                borderRadius: 10,
                opacity: fade,
              },
              styleOverrides?.value,
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              {
                width: '50%',
                marginHorizontal: '25%',
                height: theme.sizes.tinyText,
                backgroundColor: theme.colors.seperator,
                marginTop: theme.sizes.inputPadding,
                borderRadius: 10,
                opacity: fade,
              },
              styleOverrides?.key,
            ]}
          ></Animated.View>
        </View>
        <View style={styles.seperator}></View>
        <View
          style={{
            width: DEVICE_WIDTH * (40 / 100),
            height: '100%',
          }}
        >
          <Animated.View
            style={[
              {
                width: '80%',
                marginHorizontal: '10%',
                height: theme.sizes.smallText,
                backgroundColor: theme.colors.seperator,
                marginTop: theme.sizes.inputPadding,
                borderRadius: 10,
                opacity: fade,
              },
              styleOverrides?.value,
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              {
                width: '50%',
                marginHorizontal: '25%',
                height: theme.sizes.tinyText,
                backgroundColor: theme.colors.seperator,
                marginTop: theme.sizes.inputPadding,
                borderRadius: 10,
                opacity: fade,
              },
              styleOverrides?.key,
            ]}
          ></Animated.View>
        </View>
      </View>
    </View>
  );
};

export default CardViewPlaceholder;
