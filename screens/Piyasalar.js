import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const Piyasalar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Piyasalar</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserLoginFlex')}>
        <Text>logine dönüş</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Piyasalar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
