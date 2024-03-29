import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DEVICE_WIDTH, ORANGE } from '../lib/constants';
import { useTheme } from '../context/Theme';
import { MenuContainer, Tag } from '../lib/components';

const Cards = () => {
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
        title="Kart Bilgileri"
        buttons={[
          {
            title: 'Kredi Kartlarım',
          },
          {
            title: 'Banka Kartlarım',
          },
          {
            title: 'Ön Ödemeli Kartlarım Kartlarım',
          },
        ]}
      />
      <MenuContainer
        title="Başvurular"
        buttons={[
          {
            title: 'Kredi Kartı Başvurusu',
          },
          {
            title: 'Ön Ödemeli Kart Başvurusu',
          },
          {
            title: 'Kredi Kartı Limit Değişikliği',
          },
          {
            title: 'Kart Takibi',
          },
        ]}
      />
      <MenuContainer
        title="Borç Ödeme"
        buttons={[
          {
            title: 'Kredi Kartı Başvurusu',
          },
          {
            title: 'Başka Kredi Kartıma Borç Ödeme',
          },
          {
            title: 'Başka Ön Ödemeli Karta Para Yükleme',
          },
        ]}
      />
      <MenuContainer
        title="Nakit Avans"
        buttons={[
          {
            title: 'Kendi Hesabıma Nakit Avans',
            tag: (
              <Tag
                title="Taksitlendir"
                containerStyles={{ backgroundColor: ORANGE }}
              />
            ),
          },
          {
            title: 'Başka Hesaba Nakit Avans',
            tag: (
              <Tag
                title="Taksitlendir"
                containerStyles={{ backgroundColor: ORANGE }}
              />
            ),
          },
          {
            title: 'Taksitli Nakit Avanslarım',
          },
        ]}
      />
      <MenuContainer
        title="World PAY"
        buttons={[
          {
            title: 'QR Kod ile Ödeme',
          },
          {
            title: 'Araçta Ödeme',
          },
        ]}
      />
      <MenuContainer
        title="Kart Ayarları"
        buttons={[
          {
            title: 'Panik Yok(Geçici Kart Kapama)',
          },
          {
            title: 'Kart Yetkileri/ Talimatları ve Otomatik Ödeme',
          },
          {
            title: 'Kart Şifre İşlemleri',
          },
          {
            title: 'Karta Hesap Bağlama/Çıkarma',
          },
          {
            title: 'Hesap Kesim Tarihi Değişikliği',
          },
          {
            title: 'Kart Gönderim Adresi',
          },
        ]}
      />
    </ScrollView>
  );
};

export default Cards;
