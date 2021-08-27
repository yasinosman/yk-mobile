import React from 'react';
import { Animated } from 'react-native';
import useInterval from './useInterval';

const useFade = () => {
  const fade = new Animated.Value(0.3);

  Animated.loop(
    Animated.sequence([
      Animated.timing(fade, {
        toValue: 0.8,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 0.3,
        duration: 600,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return fade;
};

export default useFade;
