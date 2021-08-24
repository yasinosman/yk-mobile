import React, { useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LoginTabHeader from '../../lib/components/LoginTabHeader';
import Divider from '../../lib/components/Divider';
import SubHeader from '../../lib/components/SubHeader';
import CurrencyButton from '../../lib/components/CurrencyButton';
import InfoMessage from '../../lib/components/InfoMessage';
import BistCell from '../../lib/components/BistCell';
import ShareCell from '../../lib/components/ShareCell';

let start = new Date().toLocaleString();

const optionsCurrency = [
  {
    currency: 'EUR',
    currencyOrigin: 'Avrupa Para Birimi',
    buy: '9,94046',
    sell: '10,0471',
    dailyDifference: '% -0,74',
  },
  {
    currency: 'USD',
    currencyOrigin: 'Amerika Doları',
    buy: '8,43000',
    sell: '8,48700',
    dailyDifference: '% -0,65',
  },
  {
    currency: 'XAU',
    currencyOrigin: 'Altın (Gram)',
    buy: '480,174',
    sell: '483,600',
    dailyDifference: '% -0,81',
  },
];

const optionsBIST = [
  {
    title: 'BIST 100',
    number: '1.401,19',
    difference: 0.99,
  },
  {
    title: 'BIST 50',
    number: '1.290,18',
    difference: 0.81,
  },
  {
    title: 'BIST 30',
    number: '1.573,77',
    difference: 0.77,
  },
];

const optionsShares = [
  {
    title: 'IZFAS',
    number: 16.82,
    difference: 10.11,
  },
  {
    title: 'VKING',
    number: 10.36,
    difference: 10.02,
  },
  {
    title: 'KSTUR',
    number: 26.61,
    difference: 10.01,
  },
  {
    title: 'UFUK',
    number: 18.63,
    difference: 10.98,
  },
  {
    title: 'MANAS',
    number: 17.53,
    difference: 10.79,
  },
];

const infoMessages = [
  { message: 'Detaylı döviz kurları listesini görüntülemek için tıklayınız.' },
  { message: 'BIST verileri 15 dakika gecikmeli olarak sağlanmaktadır.' },
];

const StatefulButton = props => {
  const { color, activeColor, text } = props;
  const [active, setActive] = useState(false);
  const onPress = () => setActive(!active);
  const buttonTextStyle = {
    color: active ? activeColor : color,
    fontFamily: 'UbuntuLight',
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const Piyasalar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginTabHeader
        tabTitle="Piyasa Bilgileri"
        navigation={navigation}
        navigate="UserLoginFlex"
      />
      <Divider />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.updateText}>Son Güncelleme : {start}</Text>
        <SubHeader title="Döviz / Altın Bilgileri" />
        {/* Currencies */}
        <View style={styles.currencyInfo}>
          {optionsCurrency.map((option, index) => {
            return (
              <View>
                <CurrencyButton
                  currency={option.currency}
                  currencyOrigin={option.currencyOrigin}
                  buy={option.buy}
                  sell={option.sell}
                  dailyDifference={option.dailyDifference}
                />
                {index != 2 && <Divider />}
              </View>
            );
          })}
        </View>
        <InfoMessage message={infoMessages[0].message} />
        <SubHeader title="BIST Endeksleri" />
        {/* BIST Indexes */}
        {optionsBIST.map((option, index) => {
          return (
            <View>
              <BistCell
                title={option.title}
                number={option.number}
                difference={option.difference}
              />
              {index != 2 && <Divider />}
            </View>
          );
        })}
        {/* Shares */}
        <SubHeader title="Hisse Bilgileri" />
        <View style={styles.shareOptions}>
          <StatefulButton color="black" activeColor="blue" text="Artan" />
          <StatefulButton color="black" activeColor="blue" text="Azalan" />
          <StatefulButton color="black" activeColor="blue" text="Hacme Göre" />
        </View>
        {optionsShares.map((option, index) => {
          return (
            <View>
              <ShareCell
                title={option.title}
                number={option.number}
                difference={option.difference}
              />
              {index != 4 && <Divider />}
            </View>
          );
        })}
        <InfoMessage message={infoMessages[1].message} />
        <View style={styles.empty}></View>
      </ScrollView>
    </View>
  );
};
export default Piyasalar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    width: '100%',
  },
  updateText: {
    textAlign: 'center',
    fontFamily: 'UbuntuLight',
    marginTop: 5,
    marginBottom: 5,
  },
  shareOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  empty: {
    height: 80,
  },
});
