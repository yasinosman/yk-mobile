import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SifreM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Şifre Merkezi</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserLoginFlex')}>
        <Text>logine dönüş</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SifreM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
