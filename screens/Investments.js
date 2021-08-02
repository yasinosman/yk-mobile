import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { ICON_BLUE } from '../common/colors';
import { DEVICE_WIDTH } from '../common/dimensions';
import MenuContainer from '../components/MenuContainer';
import Tag from '../components/Tag';

const Investments = () => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuContainer
        title="Profil"
        buttons={[
          {
            title: 'Yatırımcı Profilim',
            startingIcon: (
              <Icon
                name="user"
                type="font-awesome"
                size={30}
                color={ICON_BLUE}
              />
            ),
          },
        ]}
      />

      <MenuContainer
        title="Vadeli Mevduatlar"
        buttons={[
          {
            title: 'Vadeli Mevduatlarım',
          },
          {
            title: 'Vadeli Mevduat Açılışı',
          },
          {
            title: 'Vadeli Mevduat Oranlar / Hesaplama',
          },
          {
            title: 'Vade Dönüşüm',
          },
        ]}
      />

      <MenuContainer
        title="Döviz / Altın"
        buttons={[
          {
            title: 'Alış / Satış',
          },
          {
            title: 'Çapraz Döviz İşlemleri',
          },
          {
            title: 'Emirlerim',
          },
          {
            title: 'Alarmlarım',
          },
          {
            title: 'Döviz Hesaplama',
          },
        ]}
      />

      <MenuContainer
        title="Hisse Senetleri"
        buttons={[
          {
            title: 'Hisse Senedi Hesabı Açılışı',
          },
          {
            title: 'Akıllı Borsacım Aktivasyon',
          },
          {
            title: 'Portföyüm',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Alış / Satış',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Hisse Senedi Emir Takip',
          },
          {
            title: 'Piyasa Takip Listem',
          },
          {
            title: 'Piyasa Haberleri',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'SPK Yerindelik Testi',
          },
          {
            title: 'Yapı Kredi Yatırım Ekstreleri',
          },
          {
            title: 'İşlem Sonuç Formları',
          },
          {
            title: 'Hisse Senedi Halka Arz',
          },
        ]}
      />

      <MenuContainer
        title="Yatırım Fonları"
        buttons={[
          {
            title: 'Fon Portföyüm',
          },
          {
            title: 'Fon Alış',
          },
          {
            title: 'Fon Satış',
          },
          {
            title: 'Kredi Kartı ile Düzenli Fon Alımı / Talimat İzleme',
          },
          {
            title: 'Fon / Fiyat Bilgileri',
          },
          {
            title: 'Piyasa Takip Listem',
          },
          {
            title: 'Fon Getirileri',
          },
          {
            title: 'Fon Hareketlerim',
          },
          {
            title: 'Bekleyen Emirlerim',
          },
        ]}
      />

      <MenuContainer
        title="Yatırım Paketleri"
        buttons={[
          {
            title: 'Portföyüm',
          },
          {
            title: 'Alış',
          },
          {
            title: 'Satış',
          },
          {
            title: 'Bekleyen Emirlerim',
          },
          {
            title: 'Yatırım Paketleri Getirileri',
          },
        ]}
      />

      <MenuContainer
        title="Birikim ve Emeklilik (BES)"
        buttons={[
          {
            title: 'TL Birikim (Kartopu / İlk Param)',
          },
          {
            title: 'Döviz Birikim',
          },
          {
            title: 'Altın Birikim',
          },
          {
            title: 'Bireysel Emeklilik (BES)',
          },
        ]}
      />

      <MenuContainer
        title="Raporlar"
        buttons={[
          {
            title: 'Yatırım İşlem Hareketleri',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Varlık Değişim Raporu',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Dönemsel Yatırım Getirileri',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Sermaye Piyasası Ekstresi',
            tag: <Tag title="Yeni" />,
          },
        ]}
      />
    </ScrollView>
  );
};

export default Investments;

const styles = StyleSheet.create({
  wrapper: {
    width: DEVICE_WIDTH,
  },
});
