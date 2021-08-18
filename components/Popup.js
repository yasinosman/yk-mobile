import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '../context/Theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';
import StyledText from './StyledText';

/**
 *
 * @param {{type: "info" | "success" | "warning" | "error", open: boolean, styleOverrides: {container: any, iconContainer: any, textContainer:any, title: any, text:any, buttonContainer:any, defaultButton:any}, title?: string, text: string, buttons: Array<React.FC>, onClose: Function}} props
 * @returns {React.FC}
 */
const Popup = ({
  type = 'info',
  open,
  onClose = () => null,
  title = 'Bilgilendirme',
  text,
  buttons,
  styleOverrides,
}) => {
  const { theme } = useTheme();
  const TYPE_ELEMENTS = {
    info: {
      color: theme.colors.blue,
      icon: (
        <Icon
          name="info-circle"
          type="font-awesome-5"
          size={50}
          color={theme.colors.blue}
        />
      ),
    },
    success: {
      color: theme.colors.green,
      icon: (
        <Icon
          name="check-circle"
          type="font-awesome-5"
          size={50}
          color={theme.colors.green}
        />
      ),
    },
    warning: {
      color: theme.colors.orange,
      icon: (
        <Icon
          name="exclamation-circle"
          type="font-awesome-5"
          size={50}
          color={theme.colors.orange}
        />
      ),
    },
    error: {
      color: theme.colors.red,
      icon: (
        <Icon
          name="times-circle"
          type="font-awesome-5"
          size={50}
          color={theme.colors.red}
        />
      ),
    },
  };

  const styles = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(100,100,100, 0.8)',
      padding: 20,
    },
    content: {
      width: '75%',
      height: '35%',
      borderRadius: 10,
      backgroundColor: theme.colors.bg,
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 20,
    },
    iconContainer: {
      backgroundColor: 'white',
      position: 'absolute',
      padding: 2,
      paddingHorizontal: 3,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.bg,
      top: -27,
    },
    textContainer: {
      width: '100%',
      justifyContent: 'space-around',
    },
    title: {
      fontSize: 17,
      fontFamily: 'UbuntuBold',
      color: TYPE_ELEMENTS[type].color,
      marginBottom: 15,
    },
    contentText: {
      fontSize: 14,
      fontFamily: 'Ubuntu',
      color: theme.colors.text,
    },
    buttonContainer: {
      width: '100%',
    },
    button: {
      width: '95%',
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '2.5%',
    },
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      <View style={styles.wrapper}>
        <View style={[styles.content, styleOverrides?.container]}>
          <View style={[styles.iconContainer, styleOverrides?.iconContainer]}>
            {TYPE_ELEMENTS[type].icon}
          </View>
          <View style={[styles.textContainer, styleOverrides?.textContainer]}>
            <StyledText style={[styles.title, styleOverrides?.title]}>
              {title}
            </StyledText>
            <StyledText style={[styles.contentText, styleOverrides?.text]}>
              {text}
            </StyledText>
          </View>

          <View
            style={[styles.buttonContainer, styleOverrides?.buttonContainer]}
          >
            {buttons ?? (
              <Button
                title="Devam"
                onPress={onClose}
                buttonStyle={[styles.button, styleOverrides?.defaultButton]}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
