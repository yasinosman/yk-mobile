import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { useTheme } from '../../context/Theme';
import Divider from './Divider';
import useFade from '../../hooks/useFade';

const OrderPlaceholder = props => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    order: {
      paddingVertical: theme.sizes.padding,
      paddingHorizontal: theme.sizes.padding * 2,
      width: '100%',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: theme.sizes.padding,
      justifyContent: 'space-between',
    },
    subView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: theme.sizes.inputPadding,
      justifyContent: 'space-between',
    },
  });

  const fade = useFade();

  return (
    <View>
      <View style={styles.order}>
        <View style={styles.titleView}>
          <Animated.View
            style={{
              width: '30%',
              height: theme.sizes.hugeText,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>
          <Animated.View
            style={{
              width: '40%',
              height: theme.sizes.smallText,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>
        </View>
        <Animated.View
          style={{
            width: '10%',
            height: theme.sizes.largeText,
            backgroundColor: theme.colors.seperator,
            borderRadius: 10,
            opacity: fade,
          }}
        ></Animated.View>

        <View style={styles.subView}>
          <Animated.View
            style={{
              width: '20%',
              height: theme.sizes.smallText,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>

          <Animated.View
            style={{
              width: '15%',
              height: theme.sizes.text,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>
        </View>

        <View style={styles.subView}>
          <Animated.View
            style={{
              width: '25%',
              height: theme.sizes.smallText,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>

          <Animated.View
            style={{
              width: '25%',
              height: theme.sizes.text,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>
        </View>
        <View style={styles.subView}>
          <Animated.View
            style={{
              width: '26%',
              height: theme.sizes.smallText,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>

          <Animated.View
            style={{
              width: '20%',
              height: theme.sizes.text,
              backgroundColor: theme.colors.seperator,
              borderRadius: 10,
              opacity: fade,
            }}
          ></Animated.View>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default OrderPlaceholder;

const styles = StyleSheet.create({});
