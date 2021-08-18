import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Kampanyalar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Kampanyalar</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserLoginFlex')}>
        <Text>logine dönüş</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Kampanyalar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
