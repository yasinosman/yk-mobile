import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Divider,
  ScrollView,
} from 'react-native';

const SifreM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserLoginFlex')}
          style={styles.lessView}
        >
          <Image
            style={styles.imgArPic}
            source={require('../../assets/img/ic_action_backward.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Daha Fazlası</Text>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scrollView}>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <View style={styles.newStyle}>
              <Text style={styles.newAccountStyle}>
                Yapı Kredi Müşterisi Ol
              </Text>
              <View style={styles.yeniTextView}>
                <Text style={styles.yeniText}>Yeni</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Yapı Kredili olmak için şubeye gitmenize gerek yok! Yapı Kredi
              Mobil'i kullanmaya hemen başlayın!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionBlue}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>İletişim</Text>
            <Text style={styles.description}>
              Sizin için buradayız. Her türlü soru ve önerinizi dilediğiniz an
              bize iletebilirsiniz.
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Hesaplama Araçları</Text>
            <Text style={styles.description}>
              Krediden mevduata, dövizden fona kadar birçok ürün için
              hesaplamalarınızı kolayca yapın!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionBlue}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Kart Takibi</Text>
            <Text style={styles.description}>
              Yeni başvurduğunuz ya da yenilenen kartlarınızın durumlarını
              kolayca takip edin!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Kredi Kart Başvurusu</Text>
            <Text style={styles.description}>
              İhtiyacınız olan kredi kartı Yapı Kredi'de sizi bekliyor.
              Dilediğiniz karta hemen başvurun!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionBlue}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Kredi Başvuru</Text>
            <Text style={styles.description}>
              Her türlü ihtiyacınız için krediniz Yapı Kredi'de. Hemen başvurun!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>BES Başvurusu</Text>
            <Text style={styles.description}>
              Devlet Katkılı BES'e hemen başvurun!
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionBlue}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Mobil Güvenlik</Text>
            <Text style={styles.description}>
              Mobil bankacılık güvenlik önlemleri hakkında bilgi alabilirsiniz.
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Planlı Çalışmalar Takvimi</Text>
            <Text style={styles.description}>
              Planlanan Mobil Şube çalışmalarını görüntüleyebilirsiniz.
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionBlue}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>KVKK Aydınlatma metni</Text>
            <Text style={styles.description}>
              Kişisel verileriniz 6698 sayılı Kanun kapsamında işlenip,
              korunmaktadır. Detaylar hakkında bilgi alabilirsiniz.
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <TouchableOpacity style={styles.optionWhite}>
          <Image
            source={require('../../assets/gift.png')}
            style={styles.icons}
          ></Image>
          <View style={styles.textView}>
            <Text style={styles.optionText}>Uygulama Hakkında</Text>
            <Text style={styles.description}>
              Uygulama hakkında bilgi alabilirsiniz.
            </Text>
          </View>
          <Image
            style={styles.arrowText}
            source={require('../../assets/img/ic_action_forward.png')}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
      </ScrollView>
    </View>
  );
};
export default SifreM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imgArPic: {
    height: 36,
    width: 20,
    resizeMode: 'contain',
  },
  arrowText: {
    marginRight: 18,
    height: 36,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 10,
    width: '100%',
  },
  optionText: {
    flex: 0.4,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'UbuntuBold',
  },
  optionWhite: {
    flex: 1,
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionBlue: {
    flex: 1,
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245,246,250,255)',
  },
  lessView: {
    marginLeft: 10,
    flex: 2.5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleView: {
    flex: 4.5,
  },
  lessText: {
    marginLeft: 10,
    color: 'rgba(2,140,226,255)',
    fontSize: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Ubuntu',
  },
  icons: {
    marginLeft: 25,
    width: 30,
    height: 30,
    tintColor: 'rgba(2,140,226,255)',
  },
  textView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 14,
    marginRight: 10,
    opacity: 0.7,
    fontFamily: 'Ubuntu',
    marginTop: 3,
  },
  newStyle: {
    flexDirection: 'row',
  },
  yeniTextView: {
    flex: 0.12,
    backgroundColor: 'rgba(255,84,51,255)',
    height: 15,
    borderRadius: 3,
    borderColor: 'rgba(255,84,51,255)',
    borderWidth: 1,
    marginTop: 15,
  },
  yeniText: {
    textAlign: 'center',
    height: 15,
    fontSize: 12,
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  newAccountStyle: {
    flex: 0.85,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'UbuntuBold',
  },
});
