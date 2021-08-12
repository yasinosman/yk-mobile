import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const İletisim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>İletişim</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('BusinessLoginFlex')}
      >
        <Text>logine dönüş</Text>
      </TouchableOpacity>
    </View>
  );
};
export default İletisim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
