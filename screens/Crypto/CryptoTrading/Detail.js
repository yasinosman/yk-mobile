import React from 'react';
import { View, Text } from 'react-native';

const Detail = props => {
  return (
    <View>
      <Text>Kripto Detay {JSON.stringify(props)}</Text>
    </View>
  );
};

export default Detail;
