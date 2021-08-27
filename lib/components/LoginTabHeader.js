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

const LoginTabHeader = ({ navigation, navigate, tabTitle }) => {
  const styles = StyleSheet.create({
    title: {
      alignItems: 'center',
      width: '100%',
      height: Platform.OS === 'android' ? 75 : 90,
      flexDirection: 'row',
      backgroundColor: 'white',
      marginTop: Platform.OS === 'android' ? 25 : 0,
    },
    lessView: {
      marginLeft: 10,
    },
    imgArPic: {
      height: 36,
      width: 20,
      resizeMode: 'contain',
    },
    titleText: {
      color: 'black',
      fontSize: 18,
      fontFamily: 'Ubuntu',
      flex: 1,
      textAlign: 'center',
      marginRight: 30,
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
      <Text style={styles.titleText}>{tabTitle}</Text>
    </SafeAreaView>
  );
};
export default LoginTabHeader;
