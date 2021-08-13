import React from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { BLUE } from '../common/colors';
import { DEVICE_WIDTH } from '../common/dimensions';
import MenuContainer from '../components/MenuContainer';
import MenuTitle from '../components/MenuTitle';
import SmallCardView from '../components/SmallCardView';
import Tag from '../components/Tag';
import { useTheme } from '../context/Theme';

const MoneyTransfers = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      width: DEVICE_WIDTH,
      backgroundColor: theme.colors.bg,
    },
    container: {
      height: 150,
      width: DEVICE_WIDTH,
      marginBottom: 10,
      justifyContent: 'center',
    },
  });

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuContainer
        title="Tüm İşlemler"
        buttons={[
          {
            title: 'Kayıtlı İşlemlerden Para Transferi',
          },
          {
            title: 'Başka Hesaba Havale / EFT',
            tag: (
              <Tag
                title="₺ FAST ile 7/24"
                containerStyles={{ backgroundColor: BLUE }}
              />
            ),
          },
          {
            title: 'QR Havale',
          },
          {
            title: 'Kendi Hesabıma Havale',
          },
          {
            title: 'Cebe Havale',
          },
          {
            title: 'SWIFT Transferi',
          },
          {
            title: "Yapı Kredi Yatırım FXBox'a Havale",
          },
          {
            title: 'Sorgulama / İptal',
          },
        ]}
      />

      <MenuTitle textStyles={{ marginTop: 15 }} text="Öne Çıkanlar" />

      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SmallCardView
            image={
              <Icon
                name="address-book"
                size={45}
                color={theme.colors.blue}
                type="font-awesome"
              />
            }
            title="Akıllı Rehber'den Cebe Havale"
            containerStyles={{
              width: DEVICE_WIDTH * (45 / 100),
              height: 130,
            }}
            titleContainerStyles={{
              width: DEVICE_WIDTH * (45 / 100),
              height: 50,
              backgroundColor: theme.colors.blue,
            }}
            titleTextStyles={{
              fontSize: 16,
              color: 'white',
            }}
          />

          <SmallCardView
            image={
              <Icon
                name="book"
                size={45}
                color={theme.colors.blue}
                type="font-awesome"
              />
            }
            title="Akıllı Rehber'den Havale / EFT"
            containerStyles={{
              width: DEVICE_WIDTH * (45 / 100),
              height: 130,
            }}
            titleContainerStyles={{
              width: DEVICE_WIDTH * (45 / 100),
              height: 50,
              backgroundColor: theme.colors.blue,
            }}
            titleTextStyles={{
              fontSize: 16,
              color: 'white',
            }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default MoneyTransfers;
