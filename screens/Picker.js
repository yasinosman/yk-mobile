import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { StyledText } from '../lib/components';
import { DEVICE_HEIGHT } from '../lib/constants';
import { useTheme } from '../context/Theme';
import { Icon, Image, SearchBar } from 'react-native-elements';

const Picker = ({ route, navigation }) => {
  const [options, setOptions] = React.useState([]);
  const [isSearchingAllowed, setIsSearchingAllowed] = React.useState(false);

  React.useEffect(() => {
    setOptions(route?.params?.options ?? []);
    setIsSearchingAllowed(route?.params?.allowSearch ?? false);
  }, [route]);

  const { theme } = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.bg,
      height: DEVICE_HEIGHT,
    },
    optionsContainer: {},
    searchContainer: {
      width: '100%',
      backgroundColor: theme.colors.bg,
      paddingBottom: 10,
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

  const [search, setSearch] = React.useState('');

  const calculatedOptions = React.useMemo(() => {
    if (search !== '') {
      return options.filter(option =>
        option.text.toLowerCase().includes(search.toLowerCase())
      );
    }

    return options;
  }, [options, search]);

  const fadeIn = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [calculatedOptions]);

  return (
    <View style={styles.wrapper}>
      {isSearchingAllowed && (
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Kripto Çifti Ara"
            inputStyle={{
              fontFamily: 'Ubuntu',
              fontSize: 16,
            }}
            value={search}
            onChangeText={setSearch}
            inputContainerStyle={{
              backgroundColor: theme.colors.bg,
              height: 30,
            }}
            containerStyle={{
              backgroundColor: theme.colors.bg,
              borderWidth: 0,
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
              borderRadius: 100,
              width: '95%',
              marginTop: 10,
              marginLeft: '2.5%',
              height: 30,
              justifyContent: 'center',
            }}
          />
        </View>
      )}
      <ScrollView>
        <View style={styles.optionsContainer}>
          {calculatedOptions.map((option, index) => {
            return (
              <Animated.View key={index} style={{ opacity: fadeIn }}>
                <TouchableOpacity
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
                        size={option.startingIcon.size ?? 20}
                        color={option.startingIcon.color ?? theme.colors.icon}
                      />
                    </View>
                  )}

                  {option.image && (
                    <View style={styles.optionIconContainer}>
                      <Image
                        source={{
                          uri: option.image.uri,
                        }}
                        style={{
                          width: option.image.size ?? 20,
                          height: option.image.size ?? 20,
                        }}
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
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Picker;
