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
 * @param {{title: string}} param0
 * @returns {React.FC}
 */

const SubHeader = ({ title }) => {
  const styles = StyleSheet.create({
    title: {
      height: 30,
      width: '100%',
      backgroundColor: 'rgba(244,247,250,255)',
    },
    text: {
      fontSize: 16,
      marginLeft: 15,
      marginTop: 5,
      fontFamily: 'Ubuntu',
    },
  });
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default SubHeader;
