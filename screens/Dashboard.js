import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { ORANGE, RED } from '../common/colors';
import SmallCardView from '../components/SmallCardView';
import CardView from '../components/CardView';
import InfoCard from '../components/InfoCard';
import actions from '../mock/actions';
import offers from '../mock/offers.json';
import MenuTitle from '../components/MenuTitle';
import { getCards } from '../services/cards';
import { getAccounts } from '../services/accounts';
import { CURRENCY_DICTIONARY } from '../hooks/useCurrency';
import CurrencyText from '../components/CurrencyText';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';

const Dashboard = () => {
  const [cards, setCards] = React.useState([]);
  const [accounts, setAccounts] = React.useState([]);

  React.useEffect(() => {
    async function fetchAllData() {
      try {
        setCards(await getCards());
        setAccounts(await getAccounts());
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
      <View style={styles.wrapper}>
        {/* Hesaplarım */}
        <View style={[styles.container, { marginTop: 0 }]}>
          <MenuTitle text="Hesaplarım" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {accounts.map(account => {
              return (
                <CardView
                  key={account.id}
                  onPress={() => alert(account.name)}
                  icon={
                    <Image
                      source={{ uri: account.image_url }}
                      style={{ width: 60, height: 45 }}
                    />
                  }
                  title={account.name}
                  subTitle={account.number}
                  key1={'Kullanılabilir Bakiye'}
                  value1Component={
                    <CurrencyText
                      textStyles={styles.currencyText}
                      initialAmount={account.available_balance}
                      initialCurrency={account.currency}
                      targetCurrency="try"
                      calculationTimeout={4000}
                    />
                  }
                  key2={'Güncel Bakiye'}
                  value2Component={
                    <CurrencyText
                      textStyles={styles.currencyText}
                      initialAmount={account.current_balance}
                      initialCurrency={account.currency}
                      targetCurrency="try"
                      calculationTimeout={4000}
                    />
                  }
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Kartlarım */}
        <View style={styles.container}>
          <MenuTitle text="Kartlarım" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cards.map(card => {
              return (
                <CardView
                  key={card.id}
                  onPress={() => alert(card.name)}
                  icon={
                    <Image
                      source={require('../assets/img/Card.png')}
                      style={{ width: 60, height: 40 }}
                    />
                  }
                  title={card.name}
                  subTitle={card.number}
                  key1={'Güncel Borç'}
                  value1={`${card.current_dept} ${
                    CURRENCY_DICTIONARY[card.currency]
                  }`}
                  key2={'Kullanılabilir Limit'}
                  value2={`${card.available_limit} ${
                    CURRENCY_DICTIONARY[card.currency]
                  }`}
                  containerStyles={styles.orangeBorder}
                />
              );
            })}
          </ScrollView>
        </View>
        {/* Dİğer işlemler */}
        <View style={styles.smallContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {actions.map(action => {
              const { id, image, title } = action;
              return (
                <SmallCardView
                  key={id}
                  onPress={() => console.log(id)}
                  id={id}
                  image={image}
                  title={title}
                />
              );
            })}
          </ScrollView>
        </View>

        {/** Teklifler */}
        <View style={[styles.container, { height: 200 }]}>
          <MenuTitle text="Teklifler" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map(offer => (
              <InfoCard key={offer.id} text={offer.offer} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: DEVICE_HEIGHT * (2 / 100),
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  container: {
    height: 179,
    width: DEVICE_WIDTH,
    marginTop: 0,
    marginBottom: 5,
  },
  smallContainer: {
    height: 108,
    width: DEVICE_WIDTH,
    marginBottom: 10,
  },
  redBorder: {
    borderColor: RED,
  },
  orangeBorder: {
    borderColor: ORANGE,
  },
  currencyText: { textAlign: 'center', fontSize: 19, fontFamily: 'UbuntuBold' },
});
