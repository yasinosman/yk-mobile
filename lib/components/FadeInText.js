import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useTheme } from '../../context/Theme';

const FadeInText = ({ children, textStyles, ...props }) => {
  const { theme } = useTheme();
  const fadeIn = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [children]);

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Ubuntu',
      color: theme.colors.text,
    },
  });

  return (
    <Animated.Text
      style={[styles.text, textStyles, { opacity: fadeIn }]}
      {...props}
    >
      {children}
    </Animated.Text>
  );
};

export default FadeInText;
