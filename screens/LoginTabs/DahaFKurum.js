import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LoginTabOption from '../../lib/components/LoginTabOption';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: 'Mobil Güvenlik',
    description:
      'Mobil bankacılık güvenlik önlemleri hakkında bilgi alabilirsiniz.',
  },
  {
    title: 'Planlı Çalışmalar Takvimi',
    description: 'Planlanan Mobil Şube çalışmalarını görüntüleyebilirsiniz.',
  },
  {
    title: 'Uygulama Hakkında',
    description: 'Uygulama hakkında bilgi alabilirsiniz.',
  },
];

const DahaFazlasiKurumsal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        navigation={navigation}
        navigate="BusinessLoginFlex"
        tabTitle="Daha Fazlası"
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
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default DahaFazlasiKurumsal;

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
