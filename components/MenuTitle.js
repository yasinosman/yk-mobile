import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MenuTitle = ({ text, textStyles = {} }) => {
  return <Text style={[styles.title, textStyles]}>{text}</Text>;
};

export default MenuTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
