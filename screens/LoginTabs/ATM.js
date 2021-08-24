import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import LoginTabOption from '../../lib/components/LoginTabOption';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: 'QR Kod ile Bilet Al',
    description:
      'Dilediğiniz şubeden sıra beklemden QR kodu okutarak bilet alabilirsiniz.',
    isNew: true,
    image: require('../../assets/qr.jpg'),
  },
  {
    title: 'En Yakın Yapı Kredi',
    description:
      "En Yakın Yapı Kredi şube ve ATM'lerini görüntüyebilir,şubeyoğunluklarını inceleyebilirsiniz.",
    image: require('../../assets/enyakin.jpg'),
  },
];

const SifreM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        tabTitle="ATM / Şube"
        navigation={navigation}
        navigate="UserLoginFlex"
      />
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
export default SifreM;

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
