import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainService } from './Service';
export default class Loadings extends React.Component {
  state = {
    loaded: false,
  };
  constructor() {
    super();
    MainService.load(v => this.setState({ loaded: true }));
  }
  render() {
    return <View style={styles.loading}></View>;
  }
}
