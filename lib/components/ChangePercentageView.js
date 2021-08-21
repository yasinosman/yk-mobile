import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../context/Theme';
import StyledText from './StyledText';
import { Icon } from 'react-native-elements';

/**
 * @param {{state: "descending" | "ascending", percentage: number}} param0
 */
const ChangePercentageView = ({ state, percentage }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
      color: state === 'descending' ? theme.colors.red : theme.colors.green,
    },
  });

  return (
    <View style={styles.container}>
      <Icon
        name={state === 'descending' ? 'chevron-down' : 'chevron-up'}
        type="font-awesome-5"
        size={20}
        color={state === 'descending' ? theme.colors.red : theme.colors.green}
      />
      <StyledText style={styles.text}> %{percentage}</StyledText>
    </View>
  );
};

export default ChangePercentageView;
