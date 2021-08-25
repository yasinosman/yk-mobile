import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '../../../context/Theme';
import { StyledText } from '../../../lib/components';

const MyAlarms = ({ navigation }) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
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
      width: '90%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 30,
    },
    button: {
      backgroundColor: theme.colors.blue,
      borderWidth: 1,
      borderRadius: 20,
      width: '100%',
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
          <Icon
            type="font-awesome-5"
            name="bell"
            color={theme.colors.blue}
            size={35}
          />
        </View>
        <View style={styles.textContainer}>
          <StyledText style={styles.text}>
            Alarmınız bulunmamaktadır.
          </StyledText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Alarm Kur"
          containerStyle={{ width: '100%', borderRadius: 20 }}
          onPress={() => navigation.navigate('Alarm Kur')}
        />
      </View>
    </View>
  );
};

export default MyAlarms;
