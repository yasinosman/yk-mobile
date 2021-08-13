import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../context/Theme';

const StyledText = ({ style = {}, children, ...props }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Ubuntu',
      color: theme.colors.text,
    },
  });

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
