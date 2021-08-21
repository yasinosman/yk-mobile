import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import { useTheme } from '../../context/Theme';
import { StyledText } from '../../lib/components';

/**
 *
 * @param {{
 *  inputValue: string,
 *  setInputValue: (text: string) => void,
 *  label?: string,
 *  inputPlaceholder?: string,
 *  inputDisabled?:boolean,
 *  inputKeyboardType?: KeyboardTypeOptions,
 *  styleOverrides?:
 *  {
 *      container?: StyleProp<ViewStyle>,
 *      labelContainer?: StyleProp<ViewStyle>,
 *      label?:StyleProp<TextStyle>,
 *      inputContainer?: StyleProp<ViewStyle>,
 *      input?: StyleProp<TextStyle>
 *  }}
 * } props
 * @returns
 */
const InputWithLabel = ({
  inputValue,
  setInputValue,
  label = 'Değer',
  inputPlaceHolder = 'Lütfen bir değer girin',
  inputKeyboardType = 'default',
  inputDisabled = false,
  styleOverrides = {},
}) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.colors.bg,
      paddingBottom: theme.sizes.padding,
    },
    labelContainer: {
      padding: theme.sizes.padding,
      paddingBottom: theme.sizes.inputPadding,
    },
    label: {
      color: inputDisabled ? theme.colors.secondaryText : theme.colors.text,
    },
    inputContainer: {
      padding: theme.sizes.inputPadding,
      paddingLeft: theme.sizes.padding,
      marginHorizontal: theme.sizes.inputPadding,
      borderColor: theme.colors.blue,
      borderWidth: 0.5,
      borderRadius: 10,
      backgroundColor: inputDisabled ? theme.colors.paleGrey : 'transparent',
    },
    input: {
      fontFamily: 'Ubuntu',
      color: inputDisabled ? theme.colors.secondaryText : theme.colors.text,
    },
  });

  return (
    <View style={[styles.container, styleOverrides?.container]}>
      <View style={[styles.labelContainer, styleOverrides?.labelContainer]}>
        <StyledText style={[styles.label, styleOverrides?.label]}>
          {label}
        </StyledText>
      </View>
      <View style={[styles.inputContainer, styleOverrides?.inputContainer]}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={inputPlaceHolder}
          placeholderTextColor={theme.colors.secondaryText}
          style={[styles.input, styleOverrides.input]}
          keyboardType={inputKeyboardType}
          editable={!inputDisabled}
        />
      </View>
    </View>
  );
};

export default InputWithLabel;
