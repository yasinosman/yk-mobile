import React from 'react';
import { Animated, StyleSheet } from 'react-native';

const FadeInText = ({ children, textStyles, ...props }) => {
  const fadeIn = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [children]);

  return (
    <Animated.Text
      style={[styles.text, textStyles, { opacity: fadeIn }]}
      {...props}
    >
      {children}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Ubuntu',
  },
});

export default FadeInText;
