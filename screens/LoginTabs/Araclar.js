import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import LoginTabOption from '../../lib/components/LoginTabOption';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: 'Mevduat Faizi Hesaplama',
  },
  {
    title: 'Döviz Hesaplama',
  },
  {
    title: 'Esnek Hesap Hesaplama',
  },
];

const İletisim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        navigation={navigation}
        navigate="BusinessLoginFlex"
        tabTitle="Araçlar"
        flexNumber={0.05}
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
