import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common/dimensions';
import StyledText from '../../components/StyledText';
import { useTheme } from '../../context/Theme';

const CryptoAlarms = ({ navigation }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      backgroundColor: theme.colors.bg,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    imageAndTextContainer: {
      width: '100%',
      height: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      backgroundColor: theme.colors.seperator,
      borderRadius: 55,
      padding: 5,
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 80,
      width: 80,
    },
    textContainer: {
      marginTop: 30,
    },
    text: {
      fontSize: 20,
      fontFamily: 'UbuntuLight',
    },
    buttonContainer: {
      width: '100%',
      height: '30%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    button: {
      width: '80%',
      height: '20%',
      marginVertical: '15%',
      backgroundColor: theme.colors.blue,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageAndTextContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/img/notification.png')}
          ></Image>
        </View>
        <View style={styles.textContainer}>
          <StyledText style={styles.text}>
            Alarmınız bulunmamaktadır.
          </StyledText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <StyledText style={styles.buttonText}>Alarm Kur</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CryptoAlarms;
