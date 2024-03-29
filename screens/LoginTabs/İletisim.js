import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import LoginTabOption from '../../lib/components/LoginTabOption';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: "Yapı Kredi'yi Ara",
    description:
      'Ürün ve hizmetlerimizle ilgili şikayet, talep ve önerileriniz için bizi arayabilirsiniz.',
    image: require('../../assets/ara.jpg'),
  },
  {
    title: '@YapiKrediHizmet',
    image: require('../../assets/twitter.jpg'),
  },
  {
    title: 'Yapı Kredi',
    image: require('../../assets/facebook.jpg'),
  },
];

const İletisim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        navigation={navigation}
        navigate="BusinessLoginFlex"
        tabTitle="İletişim"
      />
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/iletisim.jpg')}
          style={styles.imageStyle}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <Divider />
        {options.map((option, index) => {
          return (
            <LoginTabOption
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
          );
        })}
      </ScrollView>
    </View>
  );
};
export default İletisim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imageView: {
    flex: 0.249,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 500,
    height: 150,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
});
