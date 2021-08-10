import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../common/dimensions';
import { Divider } from 'react-native-elements';
import MenuTitle from './MenuTitle';
import MenuButton from './MenuButton';
import { useTheme } from '../context/Theme';

/**
 *
 * @param {{title: string, buttons: Array<{title: string, startingIcon: React.FC, trailingIcon: React.FC, tag: React.FC}>}} param0
 * @returns
 */
const MenuContainer = ({ title, buttons }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: DEVICE_WIDTH * (95 / 100),
      marginHorizontal: DEVICE_WIDTH * (2 / 100),
      marginVertical: DEVICE_HEIGHT * (1 / 100),
      backgroundColor: theme.colors.bg,
      borderRadius: 20,
      //Shadows
      //iOS
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      //Android
      elevation: 1,
    },
    title: {
      marginTop: 10,
    },
  });

  return (
    <React.Fragment>
      <MenuTitle text={title} textStyles={styles.title} />
      <View style={styles.container}>
        {buttons.map((button, index) => (
          <React.Fragment key={index}>
            <MenuButton
              title={button.title}
              startingIcon={button.startingIcon}
              trailingIcon={button.trailingIcon}
              tag={button.tag}
            />
            {index !== buttons.length - 1 && (
              <Divider
                orientation="horizontal"
                subHeaderStyle={{ color: 'red' }}
                insetType="middle"
              />
            )}
          </React.Fragment>
        ))}
      </View>
    </React.Fragment>
  );
};

export default MenuContainer;
