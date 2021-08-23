import React from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import LoginTabOption from '../../lib/components/LoginTabOption';
import Divider from '../../lib/components/Divider';

const options = [
  {
    title: 'Mobil Şifre Belirleme',
    optionHeight: 80,
  },
  {
    title: 'Kart Şifre Belirleme',
    optionHeight: 80,
  },
];

const SifreM = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        navigation={navigation}
        navigate="UserLoginFlex"
        tabTitle="Şifre Merkezi"
        flexNumber={0.05}
      />
      <Divider />
      <ScrollView style={styles.options}>
        {options.map((option, index) => {
          return (
            <LoginTabOption
              title={option.title}
              optionHeight={option.optionHeight}
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

export default SifreM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  options: {
    flex: 2.5,
    width: '100%',
  },
});
