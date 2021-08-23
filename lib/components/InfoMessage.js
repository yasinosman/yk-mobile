import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

/**
 *
 * @param {{message: string}} param0
 * @returns {React.FC}
 */

const InfoMessage = ({ message }) => {
  const styles = StyleSheet.create({
    infoImage: {
      width: 32,
      height: 32,
    },
    infoMessage: {
      flexDirection: 'row',
      height: 50,
      marginLeft: 20,
      alignItems: 'center',
    },
    infoText: {
      fontFamily: 'UbuntuLight',
      marginLeft: 5,
      fontSize: 12,
      opacity: 0.8,
    },
  });
  return (
    <View style={styles.infoMessage}>
      <Image
        source={require('../../assets/info.jpg')}
        style={styles.infoImage}
      />
      <Text style={styles.infoText}>{message}</Text>
    </View>
  );
};
export default InfoMessage;
