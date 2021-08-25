import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';
import ChangePercentageView from './ChangePercentageView';

/**
 *
 * @param {{message: string}} param0
 * @returns {React.FC}
 */

const ShareCell = ({ title, number, difference }) => {
  const styles = StyleSheet.create({
    shareCell: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
    },
    shareText: {
      fontSize: 16,
      marginTop: 5,
      fontFamily: 'UbuntuBold',
      marginLeft: 40,
      flex: 0.72,
    },
    izfas1: {
      marginRight: 80,
    },
  });
  return (
    <View style={styles.shareCell}>
      <Text style={styles.shareText}>{title}</Text>
      <Text style={styles.izfas1}>{number}</Text>
      <ChangePercentageView state="ascending" percentage={difference} />
    </View>
  );
};
export default ShareCell;
