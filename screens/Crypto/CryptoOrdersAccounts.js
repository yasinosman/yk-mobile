import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import ThemeProvider, { useTheme } from '../../context/Theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';

const CryptoOrders = ({ navigation }) => {
  const { theme } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedValue, setSelectedValue] = useState('Hesap seçiniz');
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items1, setItems1] = useState([
    { label: 'Hesap 1', value: 'hesap1' },
    { label: 'Hesap 2', value: 'hesap2' },
    { label: 'Hesap 3', value: 'hesap3' },
    { label: 'Hesap 4', value: 'hesap4' },
  ]);
  const [items2, setItems2] = useState([
    { label: 'Kripto Cüzdanım', value: 'kriptocuzdan' },
  ]);
  const [open1, setDropdown1Open] = useState(false);
  const [open2, setDropdown2Open] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
    },
    update: {
      width: '100%',
      height: 30,
      backgroundColor: theme.colors.gray,
    },
    updateText: {
      marginTop: 8,
      marginLeft: 20,
      fontFamily: 'Ubuntu',
      fontSize: 15,
    },
    accountView: {
      width: '100%',
      height: 30,
    },
    accountTitle: {
      marginTop: 8,
      marginLeft: 20,
      fontFamily: 'Ubuntu',
      fontSize: 15,
    },
    protokolContainer: {
      height: 60,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    underlinedProtokol: {
      fontFamily: 'Ubuntu',
      fontSize: 12,
      color: 'rgba(136,205,224,255)',
      textDecorationLine: 'underline',
      marginLeft: 20,
    },
    protokolStyle: {
      fontFamily: 'Ubuntu',
      fontSize: 12,
      color: 'black',
      textDecorationColor: 'transparent',
    },
    switch: {
      width: 20,
      height: 20,
      marginRight: 50,
    },
    inputView: {
      height: 40,
      width: '90%',
      marginLeft: '5%',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'lightgray',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    inputStyle: {
      fontFamily: 'Ubuntu',
      marginLeft: 10,
    },
    forwardImage: {
      width: 20,
      height: 20,
      marginLeft: 10,
      marginRight: 10,
    },
    tutarText: {
      marginLeft: '5%',
      fontFamily: 'Ubuntu',
      fontSize: 14,
      marginBottom: 10,
      marginTop: 10,
    },
    infoImage: {
      width: 32,
      height: 32,
    },
    infoMessage: {
      flexDirection: 'row',
      height: 50,
      marginLeft: 20,
      alignItems: 'center',
    },
    infoText: {
      fontFamily: 'UbuntuLight',
      marginLeft: 5,
      fontSize: 12,
      opacity: 0.8,
      color: theme.colors.text,
    },
    bottomBar: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 30,
      marginBottom: 30,
    },
    submitButton: {
      marginTop: 15,
      width: DEVICE_WIDTH * (85 / 100),
      height: 40,
      borderRadius: 22,
    },
    tiklayinizStyle: {
      color: theme.colors.blue,
      textDecorationLine: 'underline',
    },
    dropDownPickerStyle: {
      marginHorizontal: 20,
      height: 220,
      marginTop: 5,
    },
    dropDownPickerStyle2: {},
  });

  return (
    <View style={styles.container}>
      <View style={styles.update}>
        <Text style={styles.updateText}>Paranın Çekileceği Hesap</Text>
      </View>
      {/* Divider */}
      <View
        style={{
          width: '100%',
          flex: 0.0000001,
          borderBottomColor: 'darkblue',
          borderBottomWidth: 1,
          opacity: 0.1,
        }}
      ></View>

      <View style={styles.dropDownPickerStyle}>
        <DropDownPicker
          open={open1}
          value={value1}
          setValue={setValue1}
          items={items1}
          setOpen={() => {
            setDropdown1Open(!open1);
            setDropdown2Open(false);
          }}
          setItems={setItems1}
          placeholder="Hesap seçiniz."
        />
      </View>
      <View
        style={{
          width: '100%',
          flex: 0.0000001,
          borderBottomColor: 'darkblue',
          borderBottomWidth: 1,
          opacity: 0.1,
        }}
      ></View>
      <View style={styles.update}>
        <Text style={styles.updateText}>Paranın Yatırılacağı Hesap</Text>
      </View>
      <View
        style={{
          width: '100%',
          flex: 0.0000001,
          borderBottomColor: 'darkblue',
          borderBottomWidth: 1,
          opacity: 0.1,
        }}
      ></View>
      <View style={styles.dropDownPickerStyle}>
        <DropDownPicker
          open={open2}
          value={value2}
          setValue={setValue2}
          items={items2}
          setOpen={() => {
            setDropdown1Open(false);
            setDropdown2Open(!open2);
          }}
          setItems={setItems2}
          placeholder="Hesap seçiniz."
        />
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.infoMessage}>
          <Icon
            name="info-circle"
            type="font-awesome-5"
            size={30}
            color={theme.colors.blue}
          />
          <Text style={styles.infoText}>
            Farklı döviz cinsinden işlem yapmak için ilgili döviz cinsinden
            {'\n'}vadesiz hesap seçiniz. Hesap açılışı yapmak için{' '}
            <Text style={styles.tiklayinizStyle}>tıklayınız.</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Kripto Emirlerim Hesaplar')}
          style={{
            backgroundColor: 'rgba(5,136,217,255)',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '5%',
            marginTop: 10,
            borderRadius: 22,
            height: 40,
          }}
        >
          <Text
            style={{
              fontFamily: 'Ubuntu',
              fontSize: 20,
              color: 'white',
            }}
          >
            Devam
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CryptoOrders;
