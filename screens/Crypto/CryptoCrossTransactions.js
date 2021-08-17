import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
          height: 30,
          justifyContent: 'center',
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
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>BTC/ETH</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
            {/* Alış Satış Günlük Fark */}
            <View style={styles.alisSatisGfView}>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Alış</Text>
                <Text style={styles.rowNumber}>9,94046</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Satış</Text>
                <Text style={styles.rowNumber}>10,0471</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Günlük Fark</Text>
                <Image
                  source={require('../../assets/arrow_up.png')}
                  style={styles.arrowUp}
                />
                <Text style={styles.rowNumber}> % -0,74</Text>
              </View>
            </View>
          </View>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>BTC/DOGE</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
            {/* Alış Satış Günlük Fark */}
            <View style={styles.alisSatisGfView}>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Alış</Text>
                <Text style={styles.rowNumber}>9,94046</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Satış</Text>
                <Text style={styles.rowNumber}>10,0471</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Günlük Fark</Text>
                <Image
                  source={require('../../assets/arrow_up.png')}
                  style={styles.arrowUp}
                />
                <Text style={styles.rowNumber}> % -0,74</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 2li rowlar */}
        <View style={styles.cellRow}>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>DOGE/ETH</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
            {/* Alış Satış Günlük Fark */}
            <View style={styles.alisSatisGfView}>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Alış</Text>
                <Text style={styles.rowNumber}>9,94046</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Satış</Text>
                <Text style={styles.rowNumber}>10,0471</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Günlük Fark</Text>
                <Image
                  source={require('../../assets/arrow_up.png')}
                  style={styles.arrowUp}
                />
                <Text style={styles.rowNumber}> % -0,74</Text>
              </View>
            </View>
          </View>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>BTC/USDT</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
            {/* Alış Satış Günlük Fark */}
            <View style={styles.alisSatisGfView}>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Alış</Text>
                <Text style={styles.rowNumber}>9,94046</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Satış</Text>
                <Text style={styles.rowNumber}>10,0471</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Günlük Fark</Text>
                <Image
                  source={require('../../assets/arrow_up.png')}
                  style={styles.arrowUp}
                />
                <Text style={styles.rowNumber}> % -0,74</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 2li rowlar */}
        <View style={styles.cellRow}>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>USDT/DOGE</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
            {/* Alış Satış Günlük Fark */}
            <View style={styles.alisSatisGfView}>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Alış</Text>
                <Text style={styles.rowNumber}>9,94046</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Satış</Text>
                <Text style={styles.rowNumber}>10,0471</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Günlük Fark</Text>
                <Image
                  source={require('../../assets/arrow_up.png')}
                  style={styles.arrowUp}
                />
                <Text style={styles.rowNumber}> % -0,74</Text>
              </View>
            </View>
          </View>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>ETH/USDT</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
            {/* Alış Satış Günlük Fark */}
            <View style={styles.alisSatisGfView}>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Alış</Text>
                <Text style={styles.rowNumber}>9,94046</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Satış</Text>
                <Text style={styles.rowNumber}>10,0471</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.rowTitle}>Günlük Fark</Text>
                <Image
                  source={require('../../assets/arrow_up.png')}
                  style={styles.arrowUp}
                />
                <Text style={styles.rowNumber}> % -0,74</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 2li rowlar */}
        <View style={styles.cellRow}>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>*Crypto Pair*</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
          </View>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>*Crypto Pair*</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
          </View>
        </View>
        {/* 2li rowlar */}
        <View style={styles.cellRow}>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>*Crypto Pair*</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
          </View>
          <View style={styles.cell}>
            <View style={styles.cardViewTitle}>
              <Text style={styles.cryptoPair}>*Crypto Pair*</Text>
              <Image
                style={styles.searchStyle}
                source={require('../../assets/img/search.png')}
              ></Image>
            </View>
            {/* Divider */}
            <View
              style={{
                width: '100%',
                flex: 0.0000001,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                opacity: 0.1,
              }}
            ></View>
          </View>
        </View>
        <View style={styles.empty}></View>
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
    marginVertical: 5,
    backgroundColor: 'rgba(244,247,250,255)',
  },
  updateText: {
    marginTop: 8,
    fontFamily: 'Ubuntu',
    opacity: 0.5,
  },
  cellRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cell: {
    width: '40%',
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  cryptoPair: {
    color: 'black',
    fontFamily: 'Ubuntu',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  alisSatisGfView: {
    flex: 1.5,
  },
  rowView: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  rowTitle: {
    flex: 1.5,
    fontFamily: 'UbuntuLight',
  },
  rowNumber: {
    flex: 1.1,
    fontFamily: 'UbuntuBold',
  },
  empty: {
    height: 100,
  },
  cardViewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchStyle: {
    flexDirection: 'row',
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 5,
  },
  arrowUp: {
    width: 30,
    height: 30,
    resizeMode: 'center',
    flex: 0.3,
  },
});
