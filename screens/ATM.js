import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ATM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ATM/ŞUBE</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserLoginFlex')}>
        <Text>logine dönüş</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ATM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
