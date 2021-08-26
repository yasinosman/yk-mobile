import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../context/Theme';

const Divider = ({}) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        width: '100%',
        height: 0.5,
        backgroundColor: theme.colors.text,
        // borderBottomWidth: 1,
        opacity: 0.5,
      }}
    ></View>
  );
};
export default Divider;
