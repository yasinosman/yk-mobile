import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export const Language = ({
  style = {},
  textStyle = {},
  size = 30,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 2,

      borderRadius: 100,
    },
    text: {
      fontSize: size,
    },
  });
