import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEVICE_WIDTH } from '../common/dimensions';

const MenuButton = ({
  title,
  startingIcon = null,
  trailingIcon = (
    <Icon name="chevron-right" type="font-awesome" size={15} color="blue" />
  ),
  onPress = () => null,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {startingIcon && <View style={styles.iconContainer}>{startingIcon}</View>}
      <View
        style={[
          styles.textContainer,
          startingIcon ? {} : { width: CONTAINER_WIDTH * (90 / 100) },
        ]}
      >
        <Text>{title}</Text>
      </View>
      <View>{trailingIcon}</View>
    </TouchableOpacity>
  );
};

export default MenuButton;

const CONTAINER_WIDTH = DEVICE_WIDTH * (90 / 100);
const CONTAINER_HEIGHT = 45;

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    borderRadius: 10,
  },
  iconContainer: {
    width: CONTAINER_WIDTH * (10 / 100),
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: CONTAINER_WIDTH * (80 / 100),
    lineHeight: 45,
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
