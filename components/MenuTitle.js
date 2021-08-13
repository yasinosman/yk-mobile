import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../context/Theme';
import StyledText from './StyledText';

const MenuTitle = ({ text, textStyles = {} }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      paddingHorizontal: 20,
      fontFamily: 'UbuntuBold',
      color: theme.colors.text,
    },
  });

  return <StyledText style={[styles.title, textStyles]}>{text}</StyledText>;
};

export default MenuTitle;
