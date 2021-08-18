import React, { useState } from 'react';
import {
  StyleSheet,
  Modal,
  Dimensions,
  Text,
  View,
  ScrollView,
  Picker,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
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

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: '100 %' }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: '100%' }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }
  renderTitle = () => {
    const { title } = this.props;
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Ubuntu',
            fontSize: 20,
            fontWeight: '500',
            margin: 15,
          }}
        >
          {title}
        </Text>
      </View>
    );
  };

  renderContent = () => {
    return (
      <View>
        <Text>Kripto Çiftleri</Text>
      </View>
    );
  };

  render() {
    let { show } = this.state;
    const { onTouchOutside, title } = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: '#000000AA',

            justifyContent: 'center',
          }}
        >
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              maxHeight: deviceHeight * 0.4,
              borderRadius: 30,
              paddingHorizontal: 5,
              paddingBottom: 50,
              bottom: 50,
            }}
          >
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  searchQuery: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
