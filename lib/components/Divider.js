import React from 'react';
import { View } from 'react-native';

const Divider = ({}) => {
  return (
    <View
      style={{
        width: '100%',
        flex: 0.0000001,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        opacity: 0.1,
      }}
    ></View>
  );
};
export default Divider;
