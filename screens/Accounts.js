import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DEVICE_WIDTH } from '../lib/constants';
import { useTheme } from '../context/Theme';
import { MenuContainer, Tag } from '../lib/components';

const Accounts = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      width: DEVICE_WIDTH,
      backgroundColor: theme.colors.bg,
    },
  });
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuContainer
        title="Hesaplarım"
        buttons={[
          {
            title: 'Vadesiz Hesaplarım',
          },
          {
            title: 'Vadeli Mevduatlarım',
          },
        ]}
      />
      <MenuContainer
        title="Kolay Adreslerim"
        buttons={[
          {
            title: 'Kolay Adres Görünteleme/Tanımlama',
          },
        ]}
      />
      <MenuContainer
        title="QR İşlemleri"
        buttons={[
          {
            title: 'QR Kod ile Para Çek/Yatır',
          },
          {
            title: "QR Kod ile Cebe Havale'ni Çek",
          },
        ]}
      />
      <MenuContainer
        title="Başvurular"
        buttons={[
          {
            title: 'Esnek Hesap Başvurusu ve Limit Arttırımı',
          },
          {
            title: 'Vadesiz Hesap Açılışı',
          },
          {
            title: 'Vadeli Mevduat Açılışı',
          },
          {
            title: 'SGK Emekli Maaşı İşlemleri',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Emekli Promosyon Yenileme',
            tag: <Tag title="Yeni" />,
          },
          {
            title: 'Emekli Referans Başvurusu',
            tag: <Tag title="Yeni" />,
          },
        ]}
      />
      <MenuContainer
        title="Hesap Ayarları"
        buttons={[
          {
            title: 'Vadesiz Hesap Cüzdanı Tercihi',
          },
          {
            title: 'Vadesiz Mevduat Cüzdan Tercihi',
          },
        ]}
      />
    </ScrollView>
  );
};

export default Accounts;
