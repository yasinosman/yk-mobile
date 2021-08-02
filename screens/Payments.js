import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DEVICE_WIDTH } from '../common/dimensions';
import MenuContainer from '../components/MenuContainer';
import Tag from '../components/Tag';

const Payments = () => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuContainer
        title="Faturalar"
        buttons={[
          {
            title: 'Fatura Ödeme',
          },
          {
            title: 'Otomatik Ödeme Talimatlarım',
          },
          {
            title: 'Yeni Otomatik Ödeme Talimatı',
          },
          {
            title: 'Talimatlı Fatura Sorgu/Ödeme',
          },
          {
            title: "Akıllı Rehber'den Fatura Ödeme",
          },
          {
            title: 'Ödenmiş Fatura İptal',
          },
        ]}
      />
      <MenuContainer
        title="Kartlar"
        buttons={[
          {
            title: 'Kendi Kredi Kartıma Borç Ödeme',
          },
          {
            title: 'Başka Kredi Kartı Borç Ödeme',
          },
          {
            title: 'Başka Ön Ödemeli Karta Para Yükleme',
          },
        ]}
      />
      <MenuContainer
        title="GSM Ödemeleri"
        buttons={[
          {
            title: 'GSM TL/Paket Yükleme',
          },
          {
            title: 'Turkcell Hızlıcep Talimatı',
          },
        ]}
      />
      <MenuContainer
        title="Ulaşım Kartları"
        buttons={[
          {
            title: 'İstanbulkartlarım',
          },
        ]}
      />
      <MenuContainer
        title="Vergi/Devlet"
        buttons={[
          {
            title: 'Motorlu Taşıtlar Vergisi',
          },
          {
            title: 'Motorlu Taşıtlar Vergisi İptal',
          },
          {
            title: 'Hızlı Geçiş Sistemi(HGS)',
          },
          {
            title: 'SGK Ödeme',
          },
          {
            title: 'SGK Ödeme İptal',
          },
          {
            title: 'Trafik Cezası Ödeme',
          },
          {
            title: 'Trafik Cezası İptal',
          },
          {
            title: 'Dekontlar',
          },
        ]}
      />
      <MenuContainer
        title="Kripto Platform İşlemleri"
        buttons={[
          {
            title: 'Para Gönderme',
            tag: <Tag title="Yeni" />,
          },
        ]}
      />
      <MenuContainer
        title="Güvenli Alım Satım"
        buttons={[
          {
            title: 'İkinci El Araç Alış/Satış',
          },
        ]}
      />
      <MenuContainer
        title="Eğitim Ödemeleri"
        buttons={[
          {
            title: 'Taksitli Eğitim Sistemi Başvuru ve Talimat Giriş',
          },
        ]}
      />
      <MenuContainer
        title="Diğer"
        buttons={[
          {
            title: 'Şans Oyunları',
          },
          {
            title: 'Bağış',
          },
          {
            title: 'POS Avans',
          },
          {
            title: 'TOBB Aidat Ödeme',
          },
          {
            title: 'Borçlusu Olduğunu Senet Ödeme',
          },
          {
            title: 'Aracım+',
          },
        ]}
      />
      {/* <MenuTitle text="Kart Bilgileri" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="Kredi Kartlarım" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Banka Kartlarım" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Ön Ödemeli Kartlarım" />
      </View>
      <MenuTitle text="Başvurular" textStyles={styles.title} />
      <View style={styles.container}>
        <MenuButton title="Kredi Kartı Başvurusu" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Kredi Kartı Başvurusu" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Kredi Kartı Başvurusu" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
        <MenuButton title="Kredi Kartı Başvurusu" />
        <Divider
          orientation="horizontal"
          subHeaderStyle={{ color: 'blue' }}
          insetType="middle"
        />
      </View> */}
    </ScrollView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  wrapper: {
    width: DEVICE_WIDTH,
  },
});
