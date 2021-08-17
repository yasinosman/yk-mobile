import React, { useState } from 'react';
import {
  StyleSheet,
  Modal,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

export class PopupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({ show: true });
  };
  close = () => {
    this.setState({ show: false });
  };

  render() {
    let { show } = this.state;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      ></Modal>
    );
  }
}

const styles = StyleSheet.create({
  searchQuery: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
