import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Divider from './Divider';

/**
 *
 * @param {{backgroundColor: string, title: string, description: string, isNew: boolean, optionHeight: number}} param0
 * @returns {React.FC}
 */

const LoginTabOption = ({
  backgroundColor,
  title,
  description = '',
  isNew = false,
  optionHeight = 95,
}) => {
  const styles = StyleSheet.create({
    optionWhite: {
      flex: 1,
      height: optionHeight,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: backgroundColor,
    },
    icons: {
      marginLeft: 25,
      width: 30,
      height: 30,
      tintColor: 'rgba(2,140,226,255)',
    },
    textView: {
      flex: 1,
    },
    newStyle: {
      flexDirection: 'row',
    },
    newAccountStyle: {
      flex: 0.85,
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 15,
      fontFamily: 'UbuntuBold',
    },
    yeniTextView: {
      flex: 0.12,
      backgroundColor: 'rgba(255,84,51,255)',
      height: 15,
      borderRadius: 3,
      borderColor: 'rgba(255,84,51,255)',
      borderWidth: 1,
    },
    yeniText: {
      textAlign: 'center',
      height: 15,
      fontSize: 12,
      color: 'white',
      fontFamily: 'Ubuntu',
    },
    descriptionStyle: {
      marginLeft: 20,
      fontSize: 14,
      marginRight: 10,
      opacity: 0.7,
      fontFamily: 'Ubuntu',
      marginTop: 3,
    },
    arrowText: {
      marginRight: 18,
      height: 36,
      width: 20,
      resizeMode: 'contain',
    },
  });

  return (
    <View>
      <TouchableOpacity style={styles.optionWhite}>
        <Image
          source={require('../../assets/gift.png')}
          style={styles.icons}
        ></Image>
        <View style={styles.textView}>
          <View style={styles.newStyle}>
            <Text style={styles.newAccountStyle}>{title}</Text>
            {isNew == true && (
              <View style={styles.yeniTextView}>
                <Text style={styles.yeniText}>Yeni</Text>
              </View>
            )}
          </View>
          {description.length > 0 && (
            <Text style={styles.descriptionStyle}>{description}</Text>
          )}
        </View>
        <Image
          style={styles.arrowText}
          source={require('../../assets/img/ic_action_forward.png')}
        ></Image>
      </TouchableOpacity>
      <Divider />
    </View>
  );
};
export default LoginTabOption;
