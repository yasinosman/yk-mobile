import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { BLUE, SHADOW_COLOR } from '../common/colors';

/**
 *
 * @param {{onPress: Function, icon: React.FC, title: string, subTitle: string, key1: string, value1: string, key2: string, value2: string, containerStyles: any, headerContainerStyles: any, contentContainerStyles: any, iconContainerStyles: any, titleContainerStyles: any, keyStyles: any, valueStyles: any }} param0
 * @returns {React.FC} A default card view
 */
const CardView = ({
  onPress = () => null,
  icon = <Icon name="money" size={45} color={BLUE} type="font-awesome" />,
  title = 'title',
  subTitle = 'subtitle',
  key1 = 'key1',
  value1 = 'value1',
  key2 = 'key2',
  value2 = 'value2',
  containerStyles = {},
  headerContainerStyles = {},
  contentContainerStyles = {},
  iconContainerStyles = {},
  titleContainerStyles = {},
  keyStyles = {},
  valueStyles = {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.cardContainer, styles.blueBorder, containerStyles]}>
        <View style={[styles.cardContainerHeader, headerContainerStyles]}>
          <View style={[styles.iconContainer, iconContainerStyles]}>
            {icon}
          </View>
          <View style={[styles.titleContainer, titleContainerStyles]}>
            <Text style={{ fontSize: 18 }}>{title}</Text>
            <Text style={{ fontSize: 12, opacity: 0.5 }}>{subTitle}</Text>
          </View>
        </View>
        <View style={[styles.cardContainerContent, contentContainerStyles]}>
          <View
            style={{
              width: Dimensions.get('window').width * (40 / 100),
            }}
          >
            <Text style={[styles.value, valueStyles]}>{value1}</Text>
            <Text style={[styles.key, keyStyles]}>{key1}</Text>
          </View>
          <View style={{ width: Dimensions.get('window').width * (40 / 100) }}>
            <Text style={[styles.value, valueStyles]}>{value2}</Text>
            <Text style={[styles.key, keyStyles]}>{key2}</Text>
          </View>
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
    fontWeight: 'bold',
  },
  key: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '100',
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
