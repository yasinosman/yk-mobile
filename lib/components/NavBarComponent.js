import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

const NavBarComponent = ({ navigation, navigate, title }) => {
  const styles = StyleSheet.create({
    piyasalarImage: {
      width: 27,
      height: 27,
    },
    piyasalarView: {
      flex: 1,
    },
    piyasalarButton: {
      flex: 1,
      alignItems: 'center',
    },
    navBarText: {
      fontSize: 9,
      marginTop: 5,
      color: 'white',
      fontFamily: 'Ubuntu',
    },
  });
  return (
    <View style={styles.piyasalarView}>
      <TouchableOpacity
        style={styles.piyasalarButton}
        onPress={() => navigation.navigate(navigate)}
      >
        {title == 'PİYASALAR' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/piyasalar.jpg')}
          />
        )}
        {title == 'ATM/ŞUBE' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/atm.jpg')}
          />
        )}
        {title == 'ŞİFRE MERKEZİ' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/sifremerkezi.jpg')}
          />
        )}
        {title == 'KAMPANYALAR' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/gift.png')}
          />
        )}
        {title == 'DAHA FAZLASI' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/dahafazlasi.jpg')}
          />
        )}
        {title == 'ARAÇLAR' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/araclar.jpg')}
          />
        )}
        {title == 'İLETİŞİM' && (
          <Image
            style={styles.piyasalarImage}
            source={require('../../assets/iletisimk.jpg')}
          />
        )}
        <Text style={styles.navBarText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NavBarComponent;
