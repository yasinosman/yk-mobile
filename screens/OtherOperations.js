import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { DEVICE_WIDTH } from '../common/dimensions';
import MenuContainer from '../components/MenuContainer';
import { BLUE } from '../common/colors';

const OtherOperations = () => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuContainer
        title="Belge Görüntüleme / Onaylama"
        buttons={[
          {
            title: 'Onay Bekleyen İşlemlerim',
          },
          {
            title: 'Belgelerim',
          },
        ]}
      />

      <MenuContainer
        title="Başvuru İzleme"
        buttons={[
          {
            title: 'Başvuru İzleme',
          },
          {
            title: 'İptal / Kapama Talebi Sorgulama',
          },
        ]}
      />

      <MenuContainer
        title="e-Devlet"
        buttons={[
          {
            title: 'e-Devlet Girişi',
            startingIcon: (
              <Image
                source={require('../assets/img/e-devlet.png')}
                style={{
                  width: 32,
                  height: 25,
                }}
              />
            ),
          },
        ]}
      />

      <MenuContainer
        title="Ajanda"
        buttons={[
          {
            title: 'Akıllı Rehber',
            startingIcon: (
              <Icon
                name="address-book"
                size={30}
                color={BLUE}
                type="font-awesome"
              ></Icon>
            ),
          },
          {
            title: 'Aylık Ödeme Planı',
          },
          {
            title: 'Günlük İşlem Listesi',
          },
        ]}
      />
      <MenuContainer
        title="ATM / Şube"
        buttons={[
          {
            title: 'Şubeden Randevu Al',
          },
          {
            title: 'Şube Randevularım',
          },
          {
            title: 'QR Kod ile Bilet Al',
          },
          {
            title: 'En Yakın Yapı Kredi',
          },
        ]}
      />

      <MenuContainer
        title="İletişim"
        buttons={[
          {
            title: 'Portföy Yöneticisi Bilgileri',
          },
          {
            title: 'Facebook / Yapı Kredi',
          },
          {
            title: 'Twitter @YapiKrediHizmet',
          },
          {
            title: 'WhatsApp ile yaz',
          },
        ]}
      />

      <MenuContainer
        title="KVKK İşlemlerim"
        buttons={[
          {
            title: 'KVKK Aydınlatma Metni',
          },
          {
            title: 'KVKK Rıza Metni',
          },
        ]}
      />
    </ScrollView>
  );
};

export default OtherOperations;

const styles = StyleSheet.create({
  wrapper: {
    width: DEVICE_WIDTH,
  },
});
