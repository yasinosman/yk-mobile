import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Icon, Button, Switch } from 'react-native-elements';
import { useTheme } from '../../../context/Theme';
import { AmountText, StyledText } from '../../../lib/components';
import useAlarms from '../../../hooks/useAlarms';

const MyAlarms = ({ navigation, route }) => {
  const [alarms, isAlarmsLoading] = useAlarms();

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
      flex: 1,
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
      {alarms.length > 0 && (
        <View
          style={{
            height: '90%',
            maxHeight: '90%',
            width: '95%',
            marginHorizontal: '2.5%',
          }}
        >
          <ScrollView>
            {alarms.map((alarm, index) => {
              return (
                <View
                  key={index}
                  style={[
                    {
                      backgroundColor: theme.colors.bg,
                      height: 70,
                      flexDirection: 'row',
                    },
                    index !== alarms.length - 1
                      ? {
                          borderTopWidth: 0.7,
                          borderColor: theme.colors.seperator,
                        }
                      : {
                          borderTopWidth: 0.7,
                          borderBottomWidth: 0.7,
                          borderColor: theme.colors.seperator,
                        },
                  ]}
                >
                  <View
                    style={{
                      width: '35%',
                      height: '100%',
                      padding: theme.sizes.padding,
                    }}
                  >
                    <StyledText
                      style={{
                        fontFamily: 'UbuntuBold',
                        fontSize: theme.sizes.largeText,
                        marginBottom: theme.sizes.inputPadding,
                      }}
                    >
                      {alarm.name}
                    </StyledText>
                    <StyledText style={{ fontFamily: 'UbuntuLight' }}>
                      {alarm.created_at}
                    </StyledText>
                  </View>
                  <View
                    style={{
                      width: '40%',
                      height: '100%',
                      padding: theme.sizes.padding,
                    }}
                  >
                    <StyledText
                      style={{
                        fontFamily: 'UbuntuBold',
                        fontSize: theme.sizes.largeText,
                        marginBottom: theme.sizes.inputPadding,
                      }}
                    >
                      Banka {alarm.type === 'buy' ? 'Alış' : 'Satış'}
                    </StyledText>
                    <AmountText
                      amount={alarm.target_value}
                      currency="try"
                      primaryTextStyles={{
                        fontFamily: 'Ubuntu',
                        fontSize: theme.sizes.smallText,
                        textAlign: 'left',
                      }}
                      secondaryTextStyles={{
                        fontFamily: 'Ubuntu',
                        fontSize: theme.sizes.tinyText,
                        textAlign: 'left',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: '25%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Switch
                      trackColor={{
                        false: theme.colors.seperator,
                        true: theme.colors.blue,
                      }}
                      ios_backgroundColor={theme.colors.seperator}
                      // onValueChange={toggleAgreementSwitch}
                      value={true}
                      style={styles.switch}
                      thumbColor="white"
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
      {alarms.length <= 0 && (
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
            <StyledText style={[styles.text]}>
              Alarmınız bulunmamaktadır.
            </StyledText>
          </View>
        </View>
      )}

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
