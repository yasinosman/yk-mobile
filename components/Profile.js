import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
export const Profile = ({
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
      <Image
        style={styles.imagestyle}
        source={require('../assets/user-32px.png')}
      />
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
      color: 'white',
    },
    text: {
      color: 'white',
      fontSize: size,
    },
  });
