import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { BLUE, DEVICE_WIDTH } from '../constants';
import { useTheme } from '../../context/Theme';
import StyledText from './StyledText';

const SmallCardView = ({
  onPress = () => null,
  image = <Icon name="car" size={30} type="font-awesome" color={BLUE}></Icon>,
  title = 'title',
  containerStyles = {},
  contentStyles = {},
  titleContainerStyles = {},
  titleTextStyles = {},
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    smallContainer: {
      height: 108,
      marginTop: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    smallCardContainer: {
      width: DEVICE_WIDTH * (26.5 / 100),
      height: 88,
      marginHorizontal: DEVICE_WIDTH * (2.5 / 100),
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      //iOS
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      //Android
      elevation: 3,
    },
    smallCardTitle: {
      height: 30,
      lineHeight: 30,
      backgroundColor: theme.colors.smallCTitle,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
    },
    smallCardContent: {
      height: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      borderRadius: 10,
    },
    title: {
      textAlign: 'center',
      flexShrink: 1,
      fontSize: 13,
      color: theme.colors.text,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.smallCardContainer, containerStyles]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={[styles.smallCardContent, contentStyles]}>{image}</View>
      <View style={[styles.smallCardTitle, titleContainerStyles]}>
        <StyledText style={[styles.title, titleTextStyles]}>{title}</StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default SmallCardView;
