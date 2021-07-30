import React from 'react';
import { Image, Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { SHADOW_COLOR } from '../common/colors';

/**
 *
 * @param {{text: string, image: React.FC, button: React.FC, containerStyles: any, contentStyles: any, textStyles: any, imageStyles: any}} param0
 * @returns {React.FC} info card
 */
const InfoCard = ({
  text = 'text',
  image = (
    <Image
      source={require('../assets/img/interest.png')}
      style={{ width: 75, height: 100 }}
    />
  ),
  button = (
    <Button
      buttonStyle={{ borderRadius: 10, marginTop: 5 }}
      title="Şimdi Yap"
    />
  ),
  containerStyles = {},
  contentStyles = {},
  textStyles = {},
  imageStyles = {},
}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <View>
        <View style={[styles.textContainer, contentStyles]}>
          <Text style={[{ fontSize: 14 }, textStyles]}>{text}</Text>
        </View>
        {button}
      </View>
      <View>{image}</View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * (60 / 100),
    height: 140,
    marginHorizontal: 10,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: SHADOW_COLOR,
    //iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    //Android
    elevation: 12,
  },
  textContainer: {
    paddingLeft: 5,
    width: 120,
    height: 80,
    lineHeight: 120,
  },
});
