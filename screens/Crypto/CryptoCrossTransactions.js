import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
let start = new Date().toLocaleDateString();

const CryptoCrossTransactions = () => {
  const state = {
    search: '',
  };
  const updateSearch = search => {
    this.setState({ search });
  };

  const { search } = state;
  return (
    <View>
      <SearchBar
        placeholder="Kripto Çifti Ara"
        inputStyle={{
          fontFamily: 'Ubuntu',
          fontSize: 15,
        }}
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={{
          backgroundColor: 'white',
          height: 30,
        }}
        containerStyle={{
          backgroundColor: 'white',
          borderWidth: 0,
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          borderRadius: 100,
          width: '95%',
          marginTop: 5,
          marginLeft: '2.5%',
        }}
      />
      {/* Son Güncelleme */}
      <View style={styles.update}>
        <Text style={styles.updateText}>Son Güncelleme: {start} </Text>
      </View>
      <ScrollView>
        {/* 2li rowlar */}
        <View style={styles.cellRow}>
          <View style={styles.cell}>
            <Text>BTC/ETH</Text>
          </View>
          <View style={styles.cell}>
            <Text>BTC/ETH</Text>
          </View>
        </View>
        {/* 2li rowlar */}
        <View style={styles.cellRow}>
          <View style={styles.cell}>
            <Text>BTC/ETH</Text>
          </View>
          <View style={styles.cell}>
            <Text>BTC/ETH</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CryptoCrossTransactions;

const styles = StyleSheet.create({
  update: {
    width: '100%',
    alignItems: 'center',
    height: 30,
    backgroundColor: 'rgba(244,247,250,255)',
  },
  updateText: {
    marginTop: 8,
    fontFamily: 'Ubuntu',
    opacity: 0.5,
  },
  cellRow: {
    flexDirection: 'row',
  },
  cell: {
    width: '40%',
    height: 150,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'red',
    marginBottom: 20,
  },
});
