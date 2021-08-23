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
 * @param {{navigation: any, navigate: string, title: string, flex: number}} param0
 * @returns {React.FC} A default card view
 */

const LoginTabHeader = ({ navigation, navigate, tabTitle, flexNumber }) => {
  const styles = StyleSheet.create({
    title: {
      flex: flexNumber,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    lessView: {
      marginLeft: 10,
      flex: 2.5,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imgArPic: {
      height: 36,
      width: 20,
      resizeMode: 'contain',
    },
    titleView: {
      flex: 5,
    },
    titleText: {
      color: 'black',
      fontSize: 18,
      fontFamily: 'Ubuntu',
    },
  });
  return (
    <SafeAreaView style={styles.title}>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigate)}
        style={styles.lessView}
      >
        <Image
          style={styles.imgArPic}
          source={require('../../assets/img/ic_action_backward.png')}
        ></Image>
      </TouchableOpacity>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{tabTitle}</Text>
      </View>
    </SafeAreaView>
  );
};
export default LoginTabHeader;
