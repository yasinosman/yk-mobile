import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DahaF = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Daha Fazlası</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserLoginFlex')}>
        <Text>logine dönüş</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DahaF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
