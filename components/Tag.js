import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RED, BLUE } from '../common/colors';

const Tag = ({ title, containerStyles = {}, textStyles = {} }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: RED,
    paddingHorizontal: 5,
  },
  text: {
    color: 'white',
  },
});
