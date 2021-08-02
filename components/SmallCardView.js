import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { BLUE, GRAY, RED, SHADOW_COLOR } from '../common/colors';

const SmallCardView = ({
  onPress = () => null,
  image = <Icon name="car" size={30} type="font-awesome" color={BLUE}></Icon>,
  title = 'title',
  containerStyles = {},
  contentStyles = {},
  titleContainerStyles = {},
  titleTextStyles = {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={[styles.smallCardContainer, containerStyles]}>
        <View style={[styles.smallCardContent, contentStyles]}>{image}</View>
        <View style={[styles.smallCardTitle, titleContainerStyles]}>
          <Text style={[styles.title, titleTextStyles]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SmallCardView;

const styles = StyleSheet.create({
  smallContainer: {
    height: 108,
    marginTop: 10,
    marginBottom: 10,
  },
  smallCardContainer: {
    width: Dimensions.get('window').width * (26.5 / 100),
    height: 88,
    marginHorizontal: Dimensions.get('window').width * (2.5 / 100),
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: SHADOW_COLOR,
    //iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 13,
    //Android
    elevation: 5,
  },
  smallCardTitle: {
    height: 30,
    lineHeight: 30,
    backgroundColor: GRAY,
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
  },
  title: {
    textAlign: 'center',
    flexShrink: 1,
    fontSize: 13,
    fontWeight: '500',
  },
});
