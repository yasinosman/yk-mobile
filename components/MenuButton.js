import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEVICE_WIDTH } from '../common/dimensions';
import { ICON_BLUE } from '../common/colors';
import StyledText from './StyledText';

/**
 *
 * @param {{title: string, startingIcon: React.FC, trailingIcon: Rect.FC, tag:  React.FC, onPress: Function}} param0
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
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {startingIcon && <View style={styles.iconContainer}>{startingIcon}</View>}
      <View
        style={[
          styles.textContainer,
          !startingIcon && { width: CONTAINER_WIDTH * (88 / 100) },
        ]}
      >
        <StyledText>
          {title}
          {'  '}
          {tag}
        </StyledText>
      </View>
      <View style={styles.iconContainer}>{trailingIcon}</View>
    </TouchableOpacity>
  );
};

export default MenuButton;

const CONTAINER_WIDTH = DEVICE_WIDTH * (95 / 100);
const CONTAINER_HEIGHT = 45;

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    borderRadius: 10,
    paddingLeft: DEVICE_WIDTH * (2 / 100),
  },
  iconContainer: {
    width: CONTAINER_WIDTH * (10 / 100),
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textContainer: {
    width: CONTAINER_WIDTH * (78 / 100),
    lineHeight: 45,
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
