import React from 'react';
import { StyleSheet, Text } from 'react-native';

const StyledText = ({ style = {}, children, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Ubuntu',
  },
});
