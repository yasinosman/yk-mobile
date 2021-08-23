import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { StyledText, MenuTitle } from '../lib/components';
import { DEVICE_HEIGHT } from '../lib/constants';
import { useTheme } from '../context/Theme';
import { Icon, Image } from 'react-native-elements';

const Picker = ({ route, navigation }) => {
  const [title, setTitle] = React.useState('');
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    setTitle(route.params.title);
    setOptions(route.params.options);
  }, [route]);

  const { theme } = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.bg,
      height: DEVICE_HEIGHT,
    },
    titleContainer: {
      height: DEVICE_HEIGHT * (5 / 100),
      justifyContent: 'center',
    },
    optionsContainer: {
      height: DEVICE_HEIGHT * (95 / 100),
    },
    option: {
      flexDirection: 'row',
      height: DEVICE_HEIGHT * (7 / 100),
      alignItems: 'center',
    },
    optionIconContainer: {
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionTextContainer: {
      width: '80%',
      height: '100%',
      justifyContent: 'center',
      padding: theme.sizes.padding,
      fontSize: theme.sizes.largeText,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <MenuTitle
          text={title}
          textStyles={{ fontSize: theme.sizes.largeText }}
        />
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate({
                  name: option.navigation.to,
                  params: option.navigation.params,
                });
              }}
              style={[
                styles.option,
                index !== options.length - 1
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
              {option.startingIcon && (
                <View style={styles.optionIconContainer}>
                  <Icon
                    name={option.startingIcon.name}
                    type={option.startingIcon.type}
                    size={20}
                    color={theme.colors.icon}
                  />
                </View>
              )}

              {option.image && (
                <View style={styles.optionIconContainer}>
                  <Image
                    source={{
                      uri: option.image.uri,
                    }}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </View>
              )}

              <View style={styles.optionTextContainer}>
                <StyledText> {option.text}</StyledText>
              </View>

              {option.trailingIcon && (
                <View style={styles.optionIconContainer}>
                  <Icon
                    name={option.trailingIcon.name}
                    type={option.trailingIcon.type}
                    size={20}
                    color={theme.colors.icon}
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Picker;
