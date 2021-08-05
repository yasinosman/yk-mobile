import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 *
 * @param {{onPress: Function, icon: React.FC, title: string, subTitle: string, key1: string, value1: string, key2: string, value2: string, containerStyles: any, headerContainerStyles: any, contentContainerStyles: any, iconContainerStyles: any, titleContainerStyles: any, keyStyles: any, valueStyles: any }} param0
 * @returns {React.FC} A default card view
 */
export const Araclarım = ({
  onPress = () => null,
  icon = <Icon name="money" size={45} color={'blue'} type="font-awesome" />,
  title = 'Araçlarım',
  subTitle = 'subtitle',
  key1 = 'key1',
  value1 = 'Henüz kayıtlı aracınız bulunmamaktadır aracınız ile ilgili tüm işlemleri yapabilmek için aracınızı ekleyerek başlayın!',
  key2 = 'key2',
  value2 = 'value2',
  containerStyles = {},
  headerContainerStyles = {},
  contentContainerStyles = {},
  iconContainerStyles = {},
  titleContainerStyles = {},
  keyStyles = {},
  valueStyles = {},
}) => {
  return (
    <View style={styles.araclarim}>
      <View>
        <Text style={styles.title}>Araçlarım</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.cardContainer, styles.blueBorder, containerStyles]}
        >
          <View style={[styles.cardContainerHeader, headerContainerStyles]}>
            <View style={[styles.iconContainer, iconContainerStyles]}>
              {icon}
            </View>
          </View>
          <View style={[styles.cardContainerContent, contentContainerStyles]}>
            <Text style={[styles.value, valueStyles]}>{value1}</Text>
          </View>
          <Button title="Araç Ekle" style={styles.aracEkle}></Button>
        </View>
      </TouchableOpacity>
      <View style={styles.aracislemleri}>
        <View style={styles.column1}>
          <Text style={styles.title_2}>Araç İşlemleri</Text>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Araçta Ödeme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Taşıt Kredisi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Kasko işlemleri</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column2}>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>MTV Ödeme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>HGS İşlemleri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Araç Kiralama</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column3}>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Trafik Cezası Ödeme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Güvenli Araç Alım Satım</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but1}>
            <Text style={styles.butText}>Araç Muayene Randevusu</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.aracım_1}>
        Aracım+ servisleri Otokoç Otomotiv işbirliği ile sunulmaktadır.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aracislemleri: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  aracım_1: {
    marginLeft: 20,
    marginTop: 450,
  },
  araclarim: {
    marginTop: '20%',
  },

  column1: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column2: {
    flex: 1,
    marginTop: 56,
    paddingTop: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column3: {
    flex: 1,
    marginTop: 56,

    paddingTop: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  butText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  but1: {
    marginTop: 5,
    marginLeft: 20,
    backgroundColor: '#49ABFF',
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  title_2: {
    marginTop: '15%',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    width: 400,
    marginLeft: 10,
  },
  iconContainer: {
    width: 75,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  aracEkle: {
    backgroundColor: 'blue',
  },
  value: {
    flex: 0.95,
    fontSize: 10,
    textAlign: 'center',
  },
  cardContainer: {
    width: Dimensions.get('window').width * (90 / 100),
    height: 150,
    borderRadius: 10,
    borderLeftWidth: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',

    //iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 13.0,
    //Android
    elevation: 12,
  },
  cardContainerHeader: {
    height: 50,
    marginVertical: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainerContent: {
    height: 50,
    marginVertical: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBorder: {
    borderColor: '#49ABFF',
  },
});
