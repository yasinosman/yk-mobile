import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image, Icon, SearchBar } from 'react-native-elements';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';
import { ICON_BLUE } from '../common/colors';
import StyledText from './StyledText';

const NavigationDrawerStructure = props => {
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
  return (
    <View {...props} style={styles.container}>
      <View style={styles.menuButtonContainer}>
        <NavigationDrawerStructure navigation={props.navigation} />
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
          <StyledText style={{ fontSize: 17 }}>{props.route.name}</StyledText>
        )}
      </View>
      <View style={styles.iconContainer}>
        {props.route.name === 'Anasayfa' && (
          <React.Fragment>
            <Icon
              containerStyle={{ marginHorizontal: DEVICE_WIDTH * (2 / 100) }}
              name="envelope"
              type="font-awesome"
              size={DEVICE_WIDTH * (6 / 100)}
              color={ICON_BLUE}
            />
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
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT * (12 / 100),
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: 'rgb(245,247,250)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  searchBarInputContainer: {
    width: DEVICE_WIDTH * (65 / 100),
    height: DEVICE_HEIGHT * (5 / 100),
    backgroundColor: 'rgb(245,247,250)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarInput: {
    width: DEVICE_WIDTH * (65 / 100),
    height: DEVICE_HEIGHT * (5 / 100),
    backgroundColor: 'rgb(245,247,250)',
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
});
