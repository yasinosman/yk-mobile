import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';
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
    <ScrollView>
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
                  key1={'Kullanılabilir Limit'}
                  value1={`${account.available_balance} ${
                    CURRENCY_DICTIONARY[account.currency]
                  }`}
                  key2={'Güncel Bakiye'}
                  value2={`${account.current_balance} ${
                    CURRENCY_DICTIONARY[account.currency]
                  }`}
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

const CURRENCY_DICTIONARY = {
  eur: '€',
  try: '₺',
  usd: '$',
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    paddingTop: Dimensions.get('window').height * (5 / 100),
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  container: {
    height: 179,
    width: Dimensions.get('window').width,
    marginTop: 0,
    marginBottom: 5,
  },
  smallContainer: {
    height: 108,
    width: Dimensions.get('window').width,
    marginBottom: 10,
  },
  redBorder: {
    borderColor: RED,
  },
  orangeBorder: {
    borderColor: ORANGE,
  },
});
