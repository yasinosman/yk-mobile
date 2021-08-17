import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image, Icon, SearchBar } from 'react-native-elements';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';
import { ICON_BLUE } from '../common/colors';
import StyledText from './StyledText';
import { logout } from '../services/authentication';
import { useTheme } from '../context/Theme';
import { getLastDefinedValue, isArray } from '../utils';

const NavbarMenuButton = props => {
  return (
    <TouchableOpacity onPress={props.navigation.openDrawer}>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/yk-mobile-7ce20.appspot.com/o/img%2Fmenu.png?alt=media&token=bcc128ea-8e97-4477-8de9-de654942b93b',
        }}
        style={{ width: 20, height: 18 }}
      />
    </TouchableOpacity>
  );
};

const Navbar = props => {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const testName = React.useMemo(() => calculateRouteName(), [props]);

  function calculateRouteName() {
    const newResult = getLastDefinedValue(props, [
      'scene',
      'route',
      'state',
      'routes',
      1,
      'state',
      'routes',
      1,
      'name',
    ]);

    return typeof newResult.lastValue === 'string'
      ? newResult.lastValue
      : isArray(newResult.lastValue)
      ? newResult.lastValue[0].name
      : newResult.lastValue.name;
  }

  const { theme, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: DEVICE_HEIGHT * (12 / 100),
      width: DEVICE_WIDTH,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      paddingTop: 30,
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216,224,237)',
    },
    contentContainer: {
      width: DEVICE_WIDTH * (65 / 100),
      height: DEVICE_HEIGHT * (10 / 100),
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuButtonContainer: {
      width: (DEVICE_WIDTH * 10) / 100,
      marginLeft: (DEVICE_WIDTH * 4) / 100,
    },
    searchBarContainer: {
      width: DEVICE_WIDTH * (65 / 100),
      height: DEVICE_HEIGHT * (5 / 100),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    },
    searchBarInputContainer: {
      width: DEVICE_WIDTH * (65 / 100),
      height: DEVICE_HEIGHT * (5 / 100),
      backgroundColor: theme.colors.bg,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBarInput: {
      width: DEVICE_WIDTH * (65 / 100),
      height: DEVICE_HEIGHT * (5 / 100),
      backgroundColor: theme.colors.bg,
      borderRadius: 16,
      fontSize: 13,
      textAlign: 'center',
    },
    iconContainer: {
      width: DEVICE_WIDTH * (20 / 100),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 17,
      color: theme.colors.text,
    },
  });

  return (
    <View {...props} style={styles.container}>
      <View style={styles.menuButtonContainer}>
        <NavbarMenuButton navigation={props.navigation} />
      </View>
      <View style={styles.contentContainer}>
        {props.route.name === 'Anasayfa' && (
          <SearchBar
            placeholder="Yapı Kredi Mobil'de Ara"
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        )}
        {props.route.name !== 'Anasayfa' && (
          <StyledText style={styles.title}>
            {testName}
            {/* {props?.scene?.route?.state?.routes?.[1]?.state?.routes?.[1]
              ?.name ??
              props.currentRouteName ??
              props.route.name} */}
          </StyledText>
        )}
      </View>
      <View style={styles.iconContainer}>
        {props.route.name === 'Anasayfa' && (
          <React.Fragment>
            <TouchableOpacity onPress={toggleTheme}>
              <Icon
                containerStyle={{ marginHorizontal: DEVICE_WIDTH * (2 / 100) }}
                name="adjust"
                type="font-awesome"
                size={DEVICE_WIDTH * (6 / 100)}
                color={ICON_BLUE}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Icon
                containerStyle={{
                  marginHorizontal: DEVICE_WIDTH * (2 / 100),
                  marginRight: DEVICE_WIDTH * (3 / 100),
                }}
                name="power-off"
                type="font-awesome"
                size={DEVICE_WIDTH * (6 / 100)}
                color={ICON_BLUE}
              />
            </TouchableOpacity>
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default Navbar;
