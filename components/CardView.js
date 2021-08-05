import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { BLUE, SHADOW_COLOR } from '../common/colors';
import StyledText from './StyledText';

/**
 *
 * @param {{onPress: Function, icon: React.FC, title: string, subTitle: string, key1: string, value1: string, value1Component: React.FC, key2: string, value2: string, valu2Component: React.FC, containerStyles: any, headerContainerStyles: any, contentContainerStyles: any, iconContainerStyles: any, titleContainerStyles: any, keyStyles: any, valueStyles: any }} param0
 * @returns {React.FC} A default card view
 */
const CardView = ({
  onPress = () => null,
  icon = <Icon name="money" size={45} color={BLUE} type="font-awesome" />,
  title = 'title',
  subTitle = 'subtitle',
  key1 = 'key1',
  value1 = null,
  value1Component = null,
  key2 = 'key2',
  value2 = null,
  value2Component = null,
  containerStyles = {},
  headerContainerStyles = {},
  contentContainerStyles = {},
  iconContainerStyles = {},
  titleContainerStyles = {},
  keyStyles = {},
  valueStyles = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, styles.blueBorder, containerStyles]}
      onPress={onPress}
    >
      <View style={[styles.cardContainerHeader, headerContainerStyles]}>
        <View style={[styles.iconContainer, iconContainerStyles]}>{icon}</View>
        <View style={[styles.titleContainer, titleContainerStyles]}>
          <StyledText style={{ fontSize: 18 }}>{title}</StyledText>
          <StyledText style={{ fontSize: 12, opacity: 0.5 }}>
            {subTitle}
          </StyledText>
        </View>
      </View>
      <View style={[styles.cardContainerContent, contentContainerStyles]}>
        <View
          style={{
            width: Dimensions.get('window').width * (40 / 100),
          }}
        >
          {value1 !== null ? (
            <StyledText style={[styles.value, valueStyles]}>
              {value1}
            </StyledText>
          ) : (
            value1Component
          )}
          <StyledText style={[styles.key, keyStyles]}>{key1}</StyledText>
        </View>
        <View style={{ width: Dimensions.get('window').width * (40 / 100) }}>
          {value2 !== null ? (
            <StyledText style={[styles.value, valueStyles]}>
              {value2}
            </StyledText>
          ) : (
            value2Component
          )}
          <StyledText style={[styles.key, keyStyles]}>{key2}</StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardView;

const styles = StyleSheet.create({
  iconContainer: {
    width: 75,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width * (90 / 100) - (75 + 25),
    height: 45,
    flex: 1,
    justifyContent: 'flex-start',
  },
  value: {
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'UbuntuBold',
  },
  key: {
    textAlign: 'center',
    fontSize: 12,
  },
  cardContainer: {
    width: Dimensions.get('window').width * (90 / 100),
    height: 126,
    borderRadius: 10,
    borderLeftWidth: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: SHADOW_COLOR,
    //iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 13.0,
    //Android
    elevation: 12,
  },
  cardContainerHeader: {
    height: 50,
    marginVertical: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainerContent: {
    height: 50,
    marginVertical: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBorder: {
    borderColor: BLUE,
  },
});
