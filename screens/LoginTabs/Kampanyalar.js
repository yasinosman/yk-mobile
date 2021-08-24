import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import LoginTabOption from '../../lib/components/LoginTabOption';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title:
      "Emekli tanıdıklarınıza referans olun, 2.500 TL'ye varan ödül kazanın!",
    image: require('../../assets/img/Kampanyalar/kampanya1.jpg'),
  },
  {
    title:
      "Otomatik ödeme talimatı ver, hem fatura takibinden kurtul hem de 100 TL'ye varan puan kazan!",
    image: require('../../assets/img/Kampanyalar/kampanya2.jpg'),
  },
  {
    title: "Avis'te %40 a varan indirim fırsatı şimdi Aracım'da sizi bekliyor!",
    image: require('../../assets/img/Kampanyalar/kampanya3.jpg'),
  },
  {
    title:
      "Arkadaşlarınızı World Mobil'li yapın, beraber 75'er TL Worldpuan kazanın!",
    image: require('../../assets/img/Kampanyalar/kampanya4.jpg'),
  },
  {
    title:
      "Kasko sigortasında %50'ye varan özel indirimlere ek kasko tutarının %10'u kadar Puan hediye!",
    image: require('../../assets/img/Kampanyalar/kampanya5.jpg'),
  },
  {
    title:
      "Bankamıza getireceğiniz yeni paranıza özel %17.75'e varan kaçmaz faiz fırsatı!",
    image: require('../../assets/img/Kampanyalar/kampanya6.jpg'),
  },
  {
    title:
      'Tüm ihtiyaçlarınız için kredinizi şimdi alın, ödemeye 3 ay sonra başlayın!',
    image: require('../../assets/img/Kampanyalar/kampanya7.jpg'),
  },
  {
    title:
      "Emekli maaşını Yapı Krediye taşıyanlar, 1.750 TL'ye varan promosyon kazanıyor!",
    image: require('../../assets/img/Kampanyalar/kampanya8.jpg'),
  },
  {
    title:
      "Tamamlayıcı Sağlık Sigortasında %25' e varan indirime ek %10 puan hediye Yapı Kredi Mobil'de!",
    image: require('../../assets/img/Kampanyalar/kampanya9.jpg'),
  },
  {
    title: "Zorunlu Deprem Sigortanızı Yapı Kredi Mobil'den kolayca yaptırın!",
    image: require('../../assets/img/Kampanyalar/kampanya10.jpg'),
  },
  {
    title: "Esnek Hesap'la ihtiyaçlarınızı ertelemeyin!",
    image: require('../../assets/img/Kampanyalar/kampanya11.jpg'),
  },
  {
    title:
      "Akıllı Alışveriş Arkadaşınız World Mobil ile kampanyalara katılarak ayda toplam 1.500 TL'ye varan puan ve indirim kazanabilirsiniz!",
    image: require('../../assets/img/Kampanyalar/kampanya12.jpg'),
  },
  {
    title: "Lufian.com'da 30 TL İndirim Yapı Kredi Mobil'de!",
    image: require('../../assets/img/Kampanyalar/kampanya13.jpg'),
  },
  {
    title:
      "GoldMasterhome.com'da tüm ürünlerde %60 indirim Yapı Kredi Mobil'de!",
    image: require('../../assets/img/Kampanyalar/kampanya14.jpg'),
  },
  {
    title:
      "Setur'dan yapacağınız yurt dışı uçak bileti rezervasyonlarınızda 100 TL indirim Yapı Kredi Mobil'de!",
    image: require('../../assets/img/Kampanyalar/kampanya15.jpg'),
  },
  {
    title: "Setur'da Şehir Otellerinde %10 İndirim Yapı Kredi Mobil'de!",
    image: require('../../assets/img/Kampanyalar/kampanya16.jpg'),
  },
  {
    title: "Setur'da Uçak Rezervasyonlarınızda 25 İndirim Yapı Kredi Mobil'de!",
    image: require('../../assets/img/Kampanyalar/kampanya17.jpg'),
  },
];

const Kampanyalar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        tabTitle="Kampanyalar ve Yenilikler"
        navigate="UserLoginFlex"
        navigation={navigation}
      />
      <ScrollView style={styles.scrollView}>
        <Divider />
        {options.map((option, index) => {
          return (
            <LoginTabOption
              title={option.title}
              image={option.image}
              imageWidth={50}
              imageHeight={50}
              backgroundColor={
                index % 2 === 0 ? 'white' : 'rgba(245,246,250,255)'
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Kampanyalar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
});
