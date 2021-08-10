import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DEVICE_WIDTH } from '../common/dimensions';
import MenuContainer from '../components/MenuContainer';
import { useTheme } from '../context/Theme';

const Credits = () => {
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
        title="Kredi İşlemleri"
        buttons={[
          {
            title: 'Kredilerim / Taksit Ödeme',
          },
          {
            title: 'Bireysel İhtiyaç Kredisi Başvurusu ve Kullanımı',
          },
          {
            title: 'Kredi Hesaplama',
          },
          {
            title: 'Konut Kredisi Başvurusu',
          },
        ]}
      />
      <MenuContainer
        title="Findeks Raporları"
        buttons={[
          {
            title: 'Findeks Risk Raporu Oluşturma',
          },
          {
            title: 'Findeks Çek Raporu Oluşturma',
          },
          {
            title: 'Findeks Bireysel Üyelik Başvurusu',
          },
          {
            title: 'Findeks Paket Alış',
          },
          {
            title: 'Findeks Paketlerim',
          },
        ]}
      />
    </ScrollView>
  );
};

export default Credits;
