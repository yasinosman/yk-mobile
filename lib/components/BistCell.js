import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ChangePercentageView from './ChangePercentageView';

/**
 *
 * @param {{title: string, number: number, difference: number}} param0
 * @returns {React.FC}
 */

const BistCell = ({ title, number, difference }) => {
  const styles = StyleSheet.create({
    bistNumbers: {
      flex: 1.35,
    },
    bistView: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    bistNumber: {
      fontFamily: 'UbuntuLight',
      marginRight: 50,
    },
    bistRate: {
      flex: 1,
      fontFamily: 'UbuntuLight',
      color: 'rgb(59,136,196)',
    },
    arrowUp: {
      width: 45,
      height: 45,
    },
    bistInfoText: {
      fontSize: 14,
      marginLeft: 15,
      marginTop: 5,
      fontFamily: 'UbuntuBold',
    },
    bistCell: {
      flexDirection: 'row',
      height: 65,
    },
    bistImage: {
      width: 40,
      height: 30,
      borderRadius: 2,
      marginLeft: 15,
    },
    euroImageAndCaptionView: {
      flex: 1,
      marginRight: 10,
      marginTop: 10,
    },
    euroView: {
      flexDirection: 'row',
      marginTop: 10,
    },
  });
  return (
    <View style={styles.bistCell}>
      <View style={styles.euroImageAndCaptionView}>
        <View style={styles.euroView}>
          <Image
            source={require('../../assets/bist.jpg')}
            style={styles.bistImage}
          />
          <Text style={styles.bistInfoText}>{title}</Text>
        </View>
      </View>
      <View style={styles.bistNumbers}>
        <View style={styles.bistView}>
          <Text style={styles.bistNumber}>{number}</Text>
          <ChangePercentageView state="ascending" percentage={difference} />
        </View>
      </View>
    </View>
  );
};

export default BistCell;
