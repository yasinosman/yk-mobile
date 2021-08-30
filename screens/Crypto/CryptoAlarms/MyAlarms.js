import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '../../../context/Theme';
import {
  CryptoAlarm,
  CryptoAlarmPlaceholder,
  StyledText,
} from '../../../lib/components';
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
      <View
        style={{
          height: '90%',
          maxHeight: '90%',
          width: '95%',
          marginHorizontal: '2.5%',
        }}
      >
        <ScrollView>
          {!isAlarmsLoading &&
            alarms.length > 0 &&
            alarms.map((alarm, index) => {
              return (
                <CryptoAlarm
                  created_at={alarm.created_at}
                  name={alarm.name}
                  target_value={alarm.target_value}
                  type={alarm.type}
                  key={index}
                  styleOverrides={{
                    container:
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
                  }}
                />
              );
            })}

          {isAlarmsLoading &&
            [1, 2, 3, 4, 5, 6].map(i => (
              <CryptoAlarmPlaceholder
                key={i}
                styleOverrides={{
                  container:
                    i !== 5
                      ? {
                          borderTopWidth: 0.7,
                          borderColor: theme.colors.seperator,
                        }
                      : {
                          borderTopWidth: 0.7,
                          borderBottomWidth: 0.7,
                          borderColor: theme.colors.seperator,
                        },
                }}
              />
            ))}
        </ScrollView>
      </View>

      {alarms.length <= 0 && !isAlarmsLoading && (
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
