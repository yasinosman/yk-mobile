import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import LoginTabOption from '../../lib/components/LoginTabOption';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: 'Mevduat Faizi Hesaplama',
    image: require('../../assets/mevduat.jpg'),
  },
  {
    title: 'Döviz Hesaplama',
    image: require('../../assets/doviz.jpg'),
  },
  {
    title: 'Esnek Hesap Hesaplama',
    image: require('../../assets/esnek.jpg'),
  },
];

const İletisim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        navigation={navigation}
        navigate="BusinessLoginFlex"
        tabTitle="Araçlar"
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
              optionHeight={75}
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
  scrollView: {
    flex: 1,
    width: '100%',
  },
});
