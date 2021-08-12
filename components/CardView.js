import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { BLUE, SHADOW_COLOR } from '../common/colors';
import { DEVICE_WIDTH } from '../common/dimensions';
import { useTheme } from '../context/Theme';
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
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    cardContainer: {
      width: DEVICE_WIDTH * (90 / 100),
      height: 126,
      borderRadius: 10,
      borderLeftWidth: 5,
      marginHorizontal: DEVICE_WIDTH * (5 / 100),
      marginTop: 10,
      padding: 10,
      backgroundColor: theme.colors.card,
      shadowColor: SHADOW_COLOR,
      //iOS
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      //Android
      elevation: 3,
    },
    iconContainer: {
      width: 75,
      height: 45,
      backgroundColor: theme.colors.card,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleContainer: {
      width: DEVICE_WIDTH * (90 / 100) - (75 + 25),
      height: 45,
      flex: 1,
      justifyContent: 'flex-start',
    },
    value: {
      textAlign: 'center',
      fontSize: 19,
      fontFamily: 'UbuntuBold',
      color: theme.colors.text,
    },
    key: {
      textAlign: 'center',
      fontSize: 12,
      color: theme.colors.text,
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
      borderColor: theme.colors.blue,
    },
    seperator: {
      height: '100%',
      width: 1,
      backgroundColor: theme.colors.seperator,
    },
    title: { fontSize: 18, color: theme.colors.text },
    subTitle: { fontSize: 12, opacity: 0.5, color: theme.colors.secondaryText },
  });

  return (
    <TouchableOpacity
      style={[styles.cardContainer, styles.blueBorder, containerStyles]}
      onPress={onPress}
    >
      <View style={[styles.cardContainerHeader, headerContainerStyles]}>
        <View style={[styles.iconContainer, iconContainerStyles]}>{icon}</View>
        <View style={[styles.titleContainer, titleContainerStyles]}>
          <StyledText style={styles.title}>{title}</StyledText>
          <StyledText style={styles.subTitle}>{subTitle}</StyledText>
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
        <View style={styles.seperator}></View>
        <View style={{ width: DEVICE_WIDTH * (40 / 100) }}>
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
