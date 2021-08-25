import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useTheme } from '../../context/Theme';
import { StyledText } from '../../lib/components';
import MenuButton from '../../lib/components/MenuButton';
import InputWithLabel from '../../lib/components/InputWithLabel';
import { Icon, Button } from 'react-native-elements';

const CryptoAlarmIn = ({ navigation }) => {
  const { theme } = useTheme();
  const [option, setOption] = React.useState('buy');

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.bg,
      flex: 1,
    },
    targetNum: {
      marginTop: 20,
      marginHorizontal: '4%',
      width: '92%',
    },
    inputLabelStyle: {
      fontSize: 16,
    },
    buttonAlarm: {
      width: '85%',
      height: '15%',
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
    deleteAlarmText: {
      opacity: 0.5,
    },
    image: {
      width: 20,
      height: 20,
    },
    cryptoDuo: {
      top: 10,
    },
    cryptoDuoText: {
      height: 20,
      marginLeft: 24,
      fontSize: 16,
    },
    middle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonSwitch: {
      borderWidth: 1,
      width: '45%',
      height: '180%',
      alignItems: 'center',
      borderColor: theme.colors.blue,
    },
    touchWrite: {
      top: '20%',
    },
    infoMessage: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      width: '100%',
    },
    infoText: {
      fontFamily: 'UbuntuLight',
      marginLeft: 5,
      fontSize: 12,
      opacity: 0.8,
      color: theme.colors.text,
    },
    bottomBar: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 30,
      width: '90%',
      marginHorizontal: '5%',
      flex: 1,
    },
    button: {
      backgroundColor: theme.colors.blue,
      borderWidth: 1,
      borderRadius: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.cryptoDuo}>
          <StyledText style={styles.cryptoDuoText}>Kripto Çiftleri</StyledText>
          <MenuButton
            containerStyles={{
              borderColor: theme.colors.blue,
              borderWidth: 0.7,
              borderRadius: 10,
              width: '90%',
              marginHorizontal: '5%',
              marginTop: theme.sizes.padding * 2,
            }}
            title="Seçiniz."
            onPress={() => navigation.navigate('Kripto Çiftleri')}
          />
        </View>
        <View style={styles.middle}>
          <TouchableOpacity
            style={[
              styles.buttonSwitch,
              {
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: option === 'buy' ? theme.colors.blue : 'white',
              },
            ]}
            onPress={() => setOption('buy')}
          >
            <StyledText
              style={[
                styles.touchWrite,
                { color: option === 'buy' ? 'white' : theme.colors.blue },
              ]}
            >
              Banka Alış
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonSwitch,
              {
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor:
                  option === 'sell' ? theme.colors.blue : 'white',
              },
            ]}
            onPress={() => setOption('sell')}
          >
            <StyledText
              style={[
                styles.touchWrite,
                { color: option === 'sell' ? 'white' : theme.colors.blue },
              ]}
            >
              Banka Satış
            </StyledText>
          </TouchableOpacity>
        </View>
        <View style={styles.targetNum}>
          <InputWithLabel
            style={styles.inputLabelStyle}
            title="Hedef Kur"
            label="Hedef Kur"
            inputKeyboardType="numeric"
            inputPlaceholder="0,0000"
            styleOverrides={{
              label: {
                fontSize: 16,
              },
              input: {
                textAlign: 'right',
              },
            }}
          />
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.infoMessage}>
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={30}
              color={theme.colors.blue}
            />
            <Text style={styles.infoText}>
              Alarmınız bir yıl sonra otomatik silenecektir.
            </Text>
          </View>
          <View style={{ width: '100%' }}>
            <Button
              onPress={() => navigation.navigate('Kripto Alarmlarım')}
              title="Alarm Kur"
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CryptoAlarmIn;
