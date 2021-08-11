import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEVICE_WIDTH } from '../common/dimensions';
import { ICON_BLUE } from '../common/colors';
import StyledText from './StyledText';
import { useTheme } from '../context/Theme';

/**
 *
 * @param {{title: string, startingIcon: React.FC, trailingIcon: React.FC, tag: React.FC, onPress: Function, containerStyles: any, iconContainerStyles: any, textContainerStyles:any, textStyles:any}} param0
 * @returns
 */
const MenuButton = ({
  title,
  startingIcon = null,
  trailingIcon = (
    <Icon
      name="chevron-right"
      type="font-awesome"
      size={15}
      color={ICON_BLUE}
    />
  ),
  tag = null,
  onPress = () => null,
  containerStyles = {},
  iconContainerStyles = {},
  textContainerStyles = {},
  textStyles = {},
}) => {
  const CONTAINER_WIDTH = DEVICE_WIDTH * (95 / 100);
  const CONTAINER_HEIGHT = 45;

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: CONTAINER_WIDTH,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: CONTAINER_HEIGHT,
      //borderRadius: 5,
      paddingLeft: DEVICE_WIDTH * (2 / 100),
      backgroundColor: theme.colors.card,
    },
    iconContainer: {
      width: '10%',
      height: CONTAINER_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    textContainer: {
      width: '78%',
      lineHeight: 45,
      height: CONTAINER_HEIGHT,
      justifyContent: 'center',
      paddingLeft: 10,
    },
    text: {
      color: theme.colors.text,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}
    >
      {startingIcon && (
        <View style={[styles.iconContainer, iconContainerStyles]}>
          {startingIcon}
        </View>
      )}
      <View
        style={[
          styles.textContainer,
          !startingIcon && { width: CONTAINER_WIDTH * (88 / 100) },
          textContainerStyles,
        ]}
      >
        <StyledText style={[styles.text, textStyles]}>
          {title}
          {'  '}
          {tag}
        </StyledText>
      </View>
      <View style={[styles.iconContainer, iconContainerStyles]}>
        {trailingIcon}
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
