import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { BLUE } from '../common/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';
import MenuButton from './MenuButton';
import StyledText from './StyledText';
import { StatusBarHeight } from '../utils';

const NavigationDrawer = props => {
  const [currentRoute, setCurrentRoute] = React.useState('Anasayfa');

  React.useEffect(() => {
    const lastRoute = props.state?.history[props.state?.history?.length - 1];
    if (lastRoute && lastRoute.key) {
      const currentRoute = props.state.routes.find(r => r.key == lastRoute.key);
      if (currentRoute && currentRoute.name) {
        setCurrentRoute(currentRoute.name);
      }
    }
  }, [props.state]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      alert('Çıkış yapılırken bir hata oluştu.');
    }
  };
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: StatusBarHeight,
      }}
      {...props}
    >
      <View style={styles.wrapper}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/img%2Frandom-user_imageF39%403x.png?alt=media&token=14910c65-de93-46a5-b576-73f1c0d9d7a4',
            }}
            style={styles.profilePicture}
          />

          <View style={styles.greetingContainer}>
            <StyledText style={styles.greetingText}>İyi günler, </StyledText>
            <StyledText style={styles.higlightedText}>Selen Şentürk</StyledText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fhome%403x.png?alt=media&token=2fc898b3-7f19-4577-a7a3-a4c135309892',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Anasayfa"
            iconContainerStyles={styles.imageContainer}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Anasayfa' && styles.activeMenuButton,
            ]}
            textStyles={styles.text}
            textContainerStyles={styles.textContainerStyles}
            onPress={() => {
              props.navigation.navigate('Anasayfa');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fwallet%403x.png?alt=media&token=2cc5090f-cf92-4fb7-91e4-cd4f1905ff96',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Hesaplarım"
            iconContainerStyles={styles.imageContainer}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Hesaplarım' && styles.activeMenuButton,
            ]}
            textStyles={styles.text}
            textContainerStyles={styles.textContainerStyles}
            onPress={() => {
              props.navigation.navigate('Hesaplarım');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fcredit-card%403x.png?alt=media&token=44f54028-8a49-4dec-a5c4-60b6f3494b99',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Kartlarım"
            iconContainerStyles={styles.imageContainer}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Kartlarım' && styles.activeMenuButton,
            ]}
            onPress={() => {
              props.navigation.navigate('Kartlarım');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fexchange%403x.png?alt=media&token=92a52161-12f0-471d-b911-871b252a5865',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Para Transferleri"
            iconContainerStyles={styles.imageContainer}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Para Transferleri' && styles.activeMenuButton,
            ]}
            onPress={() => {
              props.navigation.navigate('Para Transferleri');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fchart-line%403x.png?alt=media&token=ef621f4f-5343-4214-ab53-68d920e903a9',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Yatırımlar"
            iconContainerStyles={styles.imageContainer}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Yatırımlar' && styles.activeMenuButton,
            ]}
            onPress={() => {
              props.navigation.navigate('Yatırımlar');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fpayment%403x.png?alt=media&token=5254d0f1-7737-4d67-ab6c-f120070e4a2c',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Ödemeler"
            iconContainerStyles={styles.imageContainer}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Ödemeler' && styles.activeMenuButton,
            ]}
            onPress={() => {
              props.navigation.navigate('Ödemeler');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fmoney%403x.png?alt=media&token=e9611973-aaf1-42d2-92fa-569a8547cf2c',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Krediler"
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Krediler' && styles.activeMenuButton,
            ]}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            iconContainerStyles={styles.imageContainer}
            onPress={() => {
              props.navigation.navigate('Krediler');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fapplication%403x.png?alt=media&token=41c0192a-9878-49c8-880d-ab4489140cd9',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Sigortalar"
            iconContainerStyles={styles.imageContainer}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Sigortalar' && styles.activeMenuButton,
            ]}
            onPress={() => {
              props.navigation.navigate('Sigortalar');
            }}
          />
          <MenuButton
            startingIcon={
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fother-operation%403x.png?alt=media&token=e0899ec4-b849-4e2d-b5f8-c90259ee880b',
                }}
                style={styles.image}
                resizeMode="contain"
              />
            }
            trailingIcon={null}
            title="Diğer İşlemler"
            iconContainerStyles={styles.imageContainer}
            containerStyles={[
              styles.menuButton,
              currentRoute === 'Diğer İşlemler' && styles.activeMenuButton,
              { borderBottomWidth: 0 },
            ]}
            textContainerStyles={styles.textContainerStyles}
            textStyles={styles.text}
            onPress={() => {
              props.navigation.navigate('Diğer İşlemler');
            }}
          />
        </View>

        <View style={styles.exitContainer}>
          <TouchableOpacity style={styles.settingsButton}>
            <View
              style={{
                width: '30%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fsettigns%403x.png?alt=media&token=68e7f022-3bb5-4c1b-b79d-f8f7a0a6c86e',
                }}
                style={{
                  width: DEVICE_WIDTH * (8 / 100),
                  height: DEVICE_WIDTH * (8 / 100),
                }}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                width: '60%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledText style={styles.settingsText}>Ayarlar</StyledText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.exitButton}>
            <View
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/icons%2Fpower-off%403x.png?alt=media&token=d4701d9f-4bbf-4043-a0bc-3cfeae4f9914',
                }}
                style={{
                  width: DEVICE_WIDTH * (8 / 100),
                  height: DEVICE_WIDTH * (8 / 100),
                }}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                width: '55%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledText style={styles.exitText}>Çıkış</StyledText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default NavigationDrawer;

const NAVBAR_HEIGHT = DEVICE_HEIGHT - StatusBarHeight;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: NAVBAR_HEIGHT * (5 / 100),
    marginBottom: NAVBAR_HEIGHT * (6 / 100),
    height: NAVBAR_HEIGHT * (85 / 100),
    justifyContent: 'space-around',
  },
  profileContainer: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: DEVICE_HEIGHT * (12 / 100),
    height: DEVICE_HEIGHT * (12 / 100),
  },
  greetingContainer: {
    backgroundColor: 'white',
    width: '50%',
    marginLeft: DEVICE_WIDTH * (5 / 100),
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontFamily: 'UbuntuLight',
    color: 'rgb(126,145,172)',
  },
  higlightedText: {
    fontSize: 20,
    color: BLUE,
  },
  buttonContainer: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  menuButton: {
    backgroundColor: 'white',
    height: '10%',
    width: '95%',
    marginVertical: DEVICE_HEIGHT * (0.1 / 100),
    borderColor: 'transparent',
    borderLeftWidth: 5,
  },
  activeMenuButton: {
    borderColor: BLUE,
    backgroundColor: 'rgba(5,136,218, 0.1)',
  },
  exitContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(245,247,250)',
  },

  settingsButton: {
    width: '47%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1.5%',
    padding: 0,
  },
  settingsText: {
    fontSize: 21,
    color: BLUE,
    fontFamily: 'UbuntuLight',
  },
  exitButton: {
    width: '47%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1.5%',
    padding: 0,
  },
  exitText: {
    fontSize: 21,
    color: 'rgb(255,87,56)',
    fontFamily: 'UbuntuLight',
  },
  imageContainer: {
    width: '20%',
    height: '100%',
  },
  image: { width: 40, height: 40 },
  textContainerStyles: {
    width: '62%',
  },
  text: {
    fontSize: 20,
  },
});
