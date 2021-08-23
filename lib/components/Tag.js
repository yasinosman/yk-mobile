import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RED } from '../constants';
import StyledText from './StyledText';

const Tag = ({ title, containerStyles = {}, textStyles = {} }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <StyledText style={[styles.text, textStyles]}>{title}</StyledText>
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
