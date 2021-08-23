import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CryptoAlarmIn = ({ navigation }) => {
  const [open1, setDropdown1Open] = useState(false);
  const [open2, setDropdown2Open] = useState(false);
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
  return (
    <View>
      <Text>Alarmlar</Text>
      <DropDownPicker
        style={styles.dropDownTop}
        dropDownContainerStyle={styles.dropDownContainer}
        textStyle={styles.dropDownText}
        listItemLabelStyle={styles.dropDownText}
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
  );
};
const styles = StyleSheet.create({});
export default CryptoAlarmIn;
