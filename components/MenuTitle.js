import React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';

const MenuTitle = ({ text, textStyles = {} }) => {
  return <StyledText style={[styles.title, textStyles]}>{text}</StyledText>;
};

export default MenuTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontFamily: 'UbuntuBold',
  },
});
