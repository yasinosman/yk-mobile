import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../lib/constants';
import { useTheme } from '../../context/Theme';
import { StyledText } from '../../lib/components';
import { SearchBar } from 'react-native-elements';
import { CRYPTO_CURRENCIES } from '../../hooks/useCurrency';

const CryptoDuo = ({ navigation }) => {
  const CRYPTO_PARITIES = React.useMemo(() => {
    let result = [];
    CRYPTO_CURRENCIES.forEach(currency =>
      CRYPTO_CURRENCIES.forEach(c =>
        result.push({ currency1: c.value, currency2: currency.value })
      )
    );
    return result;
  }, []);
  const { theme } = useTheme();
  const [search, setSearch] = React.useState('');
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.bg,
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      paddingBottom: 10,
    },
    searchContainer: {
      width: DEVICE_WIDTH,
      backgroundColor: theme.colors.bg,
      paddingBottom: 10,
    },
    touchDuo: {
      borderBottomWidth: 1,
      borderRadius: 5,
      backgroundColor: theme.colors.bg,
      flex: 1,
      borderColor: 'silver',
      marginHorizontal: 10,
    },
    textStyle: {
      fontFamily: 'UbuntuLight',
      padding: 10,
      fontSize: 16,
      color: theme.colors.text,
      textTransform: 'uppercase',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Kripto Çifti Ara"
          inputStyle={{
            fontFamily: 'Ubuntu',
            fontSize: 16,
          }}
          value={search}
          onChangeText={setSearch}
          inputContainerStyle={{
            backgroundColor: theme.colors.bg,
            height: 30,
          }}
          containerStyle={{
            backgroundColor: theme.colors.bg,
            borderWidth: 0,
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            borderRadius: 100,
            width: '95%',
            marginTop: 10,
            marginLeft: '2.5%',
            height: 30,
            justifyContent: 'center',
          }}
        />
      </View>
      <ScrollView>
        {CRYPTO_PARITIES.map(parity => (
          <TouchableOpacity
            style={styles.touchDuo}
            onPress={() => navigation.navigate('Alarm Kur')}
          >
            <StyledText style={styles.textStyle}>
              {parity.currency1} / {parity.currency2}
            </StyledText>
          </TouchableOpacity>
        ))}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
};
export default CryptoDuo;
