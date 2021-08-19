import React, { useState } from 'react';
import {
  StyleSheet,
  Modal,
  Dimensions,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

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
        <Text>Kripto Çiftleri:</Text>
        <ModalDropdown
          defaultValue="Seçiniz.."
          style={{
            borderColor: 'black',
            borderWidth: 2,
            width: '30%',
            height: '20%',
            borderRadius: 10,
            marginTop: 10,
            alignItems: 'center',
          }}
          options={[
            'BTC/DOGE',
            'BTC/ETH',
            'BTC/XRP',
            'BTC/USDT',
            'BTC/TRY',
            'ETH/BTC',
            'ETH/DOGE',
            'ETH/XRP',
            'ETH/USDT',
            'ETH/TRY',
            'XRP/BTC',
            'XRP/ETH',
            'XRP/DOGE',
            'XRP/USDT',
            'XRP/TRY',
            'USDT/BTC',
            'USDT/ETH',
            'USDT/DOGE',
            'USDT/XRP',
            'USDT/TRY',
          ]}
        />
        <View>
          <TouchableOpacity
            style={{
              marginLeft: '20%',
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 10,
              width: 85,
              top: 22,
              alignItems: 'center',
            }}
          >
            <Text>Banka Alış</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              marginLeft: '50%',
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 2,
              width: 85,
            }}
          >
            <Text>Banka Satış</Text>
          </TouchableOpacity>
          <Text style={{ top: 20 }}>Hedef Kur:</Text>
          <TextInput
            type="numeric"
            placeholder="0,00000"
            placeholderTextColor="black"
            style={{ top: 25 }}
          ></TextInput>
        </View>
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
              maxHeight: deviceHeight * 0.6,
              borderRadius: 30,
              paddingHorizontal: 5,
              paddingBottom: 50,
              bottom: 200,
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
