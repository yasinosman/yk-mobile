import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';
import MenuTitle from '../components/MenuTitle';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';

const Accounts = () => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuTitle text="Hesaplarım" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="Vadesiz Hesaplarım" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Vadeli Mevduatlarım" />
      </View>
      <MenuTitle text="Kolay Adreslerim" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="Kolay Adres Görünteleme/Tanımlama" />
      </View>
      <MenuTitle text="QR İşlemleri" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="QR Kod ile Para Çek/Yatır" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="QR Kod ile Cebe Havale'ni Çek" />
      </View>
      <MenuTitle text="Başvurular" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="Esnek Hesap Başvurusu ve Limit Arttırımı" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />

        <MenuButton title="Vadesiz Hesap Açılışı" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Vadeli Mevduat Açılışı" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="SGK Emekli Maaşı İşlemleri" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Emekli Promosyon Yenileme" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Emekli Referans Başvurusu" />
      </View>

      <MenuTitle text="Hesap Ayarları" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="Vadesiz Hesap Cüzdan Tercihi" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Vadeli Mevduat Cüzdan Tercihi" />
      </View>
    </ScrollView>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  wrapper: {
    width: DEVICE_WIDTH,
  },
  container: {
    width: DEVICE_WIDTH * (95 / 100),
    marginHorizontal: DEVICE_WIDTH * (2 / 100),
    marginVertical: DEVICE_HEIGHT * (1 / 100),
    backgroundColor: '#FFFFFF',
    //Shadows
    //iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    //Android
    elevation: 3,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
  },
});
