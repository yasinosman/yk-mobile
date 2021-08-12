import React from 'react';
import { Image, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';
import StyledText from './StyledText';
import { SHADOW_COLOR } from '../common/colors';
import { useTheme } from '../context/Theme';
import { DEVICE_WIDTH } from '../common/dimensions';

/**
 *
 * @param {{text: string, image: React.FC, button: React.FC, containerStyles: any, contentStyles: any, textStyles: any}} param0
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
      titleStyle={{
        fontFamily: 'Ubuntu',
      }}
    />
  ),
  containerStyles = {},
  contentStyles = {},
  textStyles = {},
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: DEVICE_WIDTH * (60 / 100),
      height: 140,
      marginHorizontal: 10,
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      shadowColor: SHADOW_COLOR,
      //iOS
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      //Android
      elevation: 3,
    },
    textContainer: {
      paddingLeft: 5,
      width: 120,
      height: 80,
      lineHeight: 120,
    },
    text: {
      fontSize: 14,
      color: theme.colors.text,
    },
  });

  return (
    <View style={[styles.container, containerStyles]}>
      <View>
        <View style={[styles.textContainer, contentStyles]}>
          <StyledText style={[styles.text, textStyles]}>{text}</StyledText>
        </View>
        {button}
      </View>
      <View>{image}</View>
    </View>
  );
};

export default InfoCard;
