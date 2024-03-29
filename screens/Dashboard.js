import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { ORANGE, RED, DEVICE_HEIGHT, DEVICE_WIDTH } from '../lib/constants';
import actions from '../mock/actions';
import offers from '../mock/offers.json';
import { useTheme } from '../context/Theme';
import {
  SmallCardView,
  CardView,
  InfoCard,
  MenuTitle,
  AmountText,
  CardViewPlaceholder,
} from '../lib/components';
import useCards from '../hooks/useCards';
import useAccounts from '../hooks/useAccounts';

const Dashboard = props => {
  const { theme } = useTheme();
  const [cards, isCardsLoading] = useCards();
  const [accounts, isAccountsLoading] = useAccounts();

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      paddingTop: DEVICE_HEIGHT * (1 / 100),
      paddingBottom: 150,
      backgroundColor: theme.colors.bg,
    },
    title: {
      fontSize: 20,
      paddingHorizontal: 20,
      color: 'blue',
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
    currencyText: {
      textAlign: 'center',
      fontSize: 19,
      fontFamily: 'UbuntuBold',
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
      <View style={styles.wrapper}>
        {/* Hesaplarım */}
        <View style={[styles.container, { marginTop: 0 }]}>
          <MenuTitle text="Hesaplarım" />
          {!isAccountsLoading && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={DEVICE_WIDTH - 28}
              decelerationRate={0.5}
              scrollEnabled
            >
              {accounts.map((account, index) => {
                return (
                  <CardView
                    key={account.id}
                    onPress={() => alert(account.name)}
                    icon={
                      account.icon ? (
                        <Icon
                          name={account.icon.name}
                          type={account.icon.type}
                          size={40}
                          color={theme.colors.blue}
                        />
                      ) : (
                        <Image
                          source={{ uri: account.image_url }}
                          style={{ width: 60, height: 45 }}
                        />
                      )
                    }
                    title={account.name}
                    subTitle={account.number}
                    key1={'Kullanılabilir Bakiye'}
                    value1Component={
                      <AmountText
                        amount={parseFloat(account.available_balance).toFixed(
                          2
                        )}
                        currency={account.currency}
                      />
                    }
                    key2={'Güncel Bakiye'}
                    value2Component={
                      <AmountText
                        amount={account.current_balance}
                        currency={account.currency}
                      />
                    }
                    containerStyles={[
                      index === 0
                        ? {
                            marginLeft: DEVICE_WIDTH * (5 / 100),
                            marginRight: DEVICE_WIDTH * (3 / 100),
                          }
                        : {
                            marginLeft: 0,
                            marginRight: DEVICE_WIDTH * (3 / 100),
                          },
                      index === accounts.length - 1 && {
                        marginRight: DEVICE_WIDTH * (5 / 100),
                      },
                    ]}
                  />
                );
              })}
            </ScrollView>
          )}

          {isAccountsLoading && <CardViewPlaceholder />}
        </View>

        {/* Kartlarım */}
        <View style={styles.container}>
          <MenuTitle text="Kartlarım" />
          {!isCardsLoading && (
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
                    value1Component={
                      <AmountText
                        amount={card.current_dept}
                        currency={card.currency}
                      />
                    }
                    key2={'Kullanılabilir Limit'}
                    value2Component={
                      <AmountText
                        amount={card.available_limit}
                        currency={card.currency}
                      />
                    }
                    containerStyles={{ borderColor: theme.colors.text }}
                  />
                );
              })}
            </ScrollView>
          )}
          {isCardsLoading && <CardViewPlaceholder />}
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
