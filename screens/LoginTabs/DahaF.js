import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LoginTabOption from '../../lib/components/LoginTabOption';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: 'Yapı Kredi Müşterisi Ol',
    description:
      "Yapı Kredili olmak için şubeye gitmenize gerek yok! Yapı Kredi Mobil'i kullanmaya hemen başlayın!",
    isNew: true,
    image: require('../../assets/musteri.jpg'),
  },
  {
    title: 'İletişim',
    description:
      'Sizin için buradayız. Her türlü soru ve önerinizi dilediğiniz an bize iletebilirsiniz.',
    image: require('../../assets/iletisimdf.jpg'),
  },
  {
    title: 'Hesaplama Araçları',
    description:
      'Krediden mevduata, dövizden fona kadar birçok ürün için hesaplamalarınızı kolayca yapın!',
    image: require('../../assets/hesaplama.jpg'),
  },
  {
    title: 'Kart Takibi',
    description:
      'Yeni başvurduğunuz ya da yenilenen kartlarınızın durumlarını kolayca takip edin!',
    image: require('../../assets/karttakibi.jpg'),
  },
  {
    title: 'Kart Başvurusu',
    description:
      "İhtiyacınız olan kredi kartı Yapı Kredi'de sizi bekliyor. Dilediğiniz karta hemen başvurun!",
    image: require('../../assets/kredikarti.jpg'),
  },
  {
    title: 'Kredi Başvurusu',
    description:
      "Her türlü ihtiyacınız için krediniz Yapı Kredi'de. Hemen başvurun!",
    image: require('../../assets/kredibasvuru.jpg'),
  },
  {
    title: 'BES Başvurusu',
    description: "Devlet Katkılı BES'e hemen başvurun!",
    image: require('../../assets/besbasvuru.jpg'),
  },
  {
    title: 'Planlı Çalışmalar Takvimi',
    description: 'Planlanan Mobil Şube çalışmalarını görüntüleyebilirsiniz.',
    image: require('../../assets/takvim.jpg'),
  },
  {
    title: 'Mobil Güvenlik',
    description:
      'Mobil bankacılık güvenlik önlemleri hakkında bilgi alabilirsiniz.',
    image: require('../../assets/mobilguvenlik.jpg'),
  },

  {
    title: 'KVKK Aydınlatma metni',
    description:
      'Kişisel verileriniz 6698 sayılı Kanun kapsamında işlenip, korunmaktadır. Detaylar hakkında bilgi alabilirsiniz.',
    image: require('../../assets/kvkk.jpg'),
  },
  {
    title: 'Uygulama Hakkında',
    description: 'Uygulama hakkında bilgi alabilirsiniz.',
    image: require('../../assets/hakkinda.jpg'),
  },
];

const DahaFazlasi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        navigation={navigation}
        navigate="UserLoginFlex"
        tabTitle="Daha Fazlası"
      />
      <ScrollView style={styles.scrollView}>
        <Divider />
        {options.map((option, index) => {
          return (
            <View key={index}>
              <LoginTabOption
                key={index}
                title={option.title}
                description={option.description}
                isNew={option.isNew}
                backgroundColor={
                  index % 2 === 0 ? 'white' : 'rgba(245,246,250,255)'
                }
                image={option.image}
                imageHeight={55}
                imageWidth={55}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default DahaFazlasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 10,
    width: '100%',
  },
});
