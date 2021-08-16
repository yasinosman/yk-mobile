import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

const CryptoAlarmIn = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <SearchBar
        placeholder="Ara.."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchQuery}
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <View style={styles.newStyle}>
              <Text style={styles.newAccountStyle}>
                Yapı Kredi Müşterisi Ol
              </Text>
              <View style={styles.yeniTextView}>
                <Text style={styles.yeniText}>Yeni</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Yapı Kredili olmak için şubeye gitmenize gerek yok! Yapı Kredi
              Mobil'i kullanmaya hemen başlayın!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CryptoAlarmIn;

const styles = StyleSheet.create({
  searchQuery: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
