import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { useState } from 'react';
import ChangePercentageView from '../../components/ChangePercentageView';

let start = new Date().toLocaleString();

const StatefulButton = props => {
  const { color, activeColor, text } = props;
  const [active, setActive] = useState(false);
  const onPress = () => setActive(!active);
  const buttonTextStyle = {
    color: active ? activeColor : color,
    fontFamily: 'UbuntuLight',
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const Piyasalar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserLoginFlex')}
          style={styles.lessView}
        >
          <Image
            style={styles.arrow}
            source={require('../../assets/img/ic_action_backward.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Piyasa Bilgileri</Text>
        </View>
      </SafeAreaView>
      {/* Divider */}
      <View
        style={{
          width: '100%',
          flex: 0.0000001,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          opacity: 0.1,
        }}
      ></View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.currencyTitle}>
          <Text style={styles.currencyTitleText}>Döviz / Altın Bilgileri</Text>
        </View>
        {/* Currencies */}
        <View style={styles.currencyInfo}>
          {/* Euro */}
          <TouchableOpacity>
            <View style={styles.buySellView}>
              <View style={styles.euroImageAndCaptionView}>
                <View style={styles.euroView}>
                  <Image
                    source={require('../../assets/eur.png')}
                    style={styles.eurImage}
                  />
                  <Text style={styles.currencyInfoText}>EUR</Text>
                </View>
                <Text style={styles.euroCaption}>Avrupa Para Birimi</Text>
              </View>
              <Image
                source={require('../../assets/arrow_down.png')}
                style={styles.arrowDown}
              />
              <View style={styles.euroNumbers}>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Alış</Text>
                  <Text style={styles.euroBuyAmount}>9,94046</Text>
                </View>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Satış</Text>
                  <Text style={styles.euroBuyAmount}>10,0471</Text>
                </View>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Günlük Fark</Text>
                  <Text style={styles.euroBuyAmount}> % -0,74</Text>
                </View>
              </View>
              <View style={styles.arrowView}>
                <Image
                  style={styles.arrowText}
                  source={require('../../assets/img/ic_action_forward.png')}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
          {/* Divider */}
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              flex: 0.0000001,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              opacity: 0.1,
            }}
          ></View>
          <TouchableOpacity>
            {/* USD */}
            <View style={styles.buySellView}>
              <View style={styles.euroImageAndCaptionView}>
                <View style={styles.euroView}>
                  <Image
                    source={require('../../assets/amerika.jpg')}
                    style={styles.eurImage}
                  />
                  <Text style={styles.currencyInfoText}>USD</Text>
                </View>
                <Text style={styles.euroCaption}>Amerikan Doları</Text>
              </View>
              <Image
                source={require('../../assets/arrow_down.png')}
                style={styles.arrowDown}
              />
              <View style={styles.euroNumbers}>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Alış</Text>
                  <Text style={styles.euroBuyAmount}>8,43000</Text>
                </View>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Satış</Text>
                  <Text style={styles.euroBuyAmount}>8,48700</Text>
                </View>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Günlük Fark</Text>
                  <Text style={styles.euroBuyAmount}> % -0,65</Text>
                </View>
              </View>
              <View style={styles.arrowView}>
                <Image
                  style={styles.arrowText}
                  source={require('../../assets/img/ic_action_forward.png')}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
          {/* Divider */}
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              flex: 0.0000001,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              opacity: 0.1,
            }}
          ></View>
          {/* XAU */}
          <TouchableOpacity>
            <View style={styles.buySellView}>
              <View style={styles.euroImageAndCaptionView}>
                <View style={styles.euroView}>
                  <Image
                    source={require('../../assets/xau.jpg')}
                    style={styles.eurImage}
                  />
                  <Text style={styles.currencyInfoText}>XAU</Text>
                </View>
                <Text style={styles.euroCaption}>Altın (Gram)</Text>
              </View>
              <Image
                source={require('../../assets/arrow_down.png')}
                style={styles.arrowDown}
              />
              <View style={styles.euroNumbers}>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Alış</Text>
                  <Text style={styles.euroBuyAmount}>480,17473</Text>
                </View>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Satış</Text>
                  <Text style={styles.euroBuyAmount}>483,60000</Text>
                </View>
                <View style={styles.euroBuyView}>
                  <Text style={styles.euroBuy}>Günlük Fark</Text>
                  <Text style={styles.euroBuyAmount}> % -1,22</Text>
                </View>
              </View>
              <View style={styles.arrowView}>
                <Image
                  style={styles.arrowText}
                  source={require('../../assets/img/ic_action_forward.png')}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.infoMessage}>
          <Image
            source={require('../../assets/info.jpg')}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>
            Detaylı döviz kurları listesini görüntülemek için tıklayınız.
          </Text>
        </View>
        {/* BIST Indexes */}
        <View style={styles.currencyTitle}>
          <Text style={styles.currencyTitleText}>BIST Endeksleri</Text>
        </View>
        {/* BIST 100 */}
        <View style={styles.bistCell}>
          <View style={styles.euroImageAndCaptionView}>
            <View style={styles.euroView}>
              <Image
                source={require('../../assets/bist.jpg')}
                style={styles.bistImage}
              />
              <Text style={styles.bistInfoText}>BIST 100</Text>
            </View>
          </View>
          <View style={styles.bistNumbers}>
            <View style={styles.bistView}>
              <Text style={styles.bistNumber}>1.459,11</Text>
              <ChangePercentageView state="ascending" percentage={0.79} />
            </View>
          </View>
        </View>
        {/* Divider */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        {/* BIST 50 */}
        <View style={styles.bistCell}>
          <View style={styles.euroImageAndCaptionView}>
            <View style={styles.euroView}>
              <Image
                source={require('../../assets/bist.jpg')}
                style={styles.bistImage}
              />
              <Text style={styles.bistInfoText}>BIST 50</Text>
            </View>
          </View>
          <View style={styles.bistNumbers}>
            <View style={styles.bistView}>
              <Text style={styles.bistNumber}>1.290,18</Text>
              <ChangePercentageView state="ascending" percentage={0.81} />
            </View>
          </View>
        </View>
        {/* Divider */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        {/* BIST 30 */}
        <View style={styles.bistCell}>
          <View style={styles.euroImageAndCaptionView}>
            <View style={styles.euroView}>
              <Image
                source={require('../../assets/bist.jpg')}
                style={styles.bistImage}
              />
              <Text style={styles.bistInfoText}>BIST 30</Text>
            </View>
          </View>
          <View style={styles.bistNumbers}>
            <View style={styles.bistView}>
              <Text style={styles.bistNumber}>1.573,77</Text>
              <ChangePercentageView state="ascending" percentage={0.77} />
            </View>
          </View>
        </View>
        <View style={styles.currencyTitle}>
          <Text style={styles.currencyTitleText}>Hisse Bilgileri</Text>
        </View>
        <View style={styles.shareOptions}>
          <StatefulButton color="black" activeColor="blue" text="Artan" />
          <StatefulButton color="black" activeColor="blue" text="Azalan" />
          <StatefulButton color="black" activeColor="blue" text="Hacme Göre" />
        </View>
        {/* Divider */}
        <View
          style={{
            width: '100%',
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <View style={styles.shareCell}>
          <Text style={styles.shareText}>IZFAS</Text>
          <Text style={styles.izfas1}>16.82</Text>
          <ChangePercentageView state="ascending" percentage={10.11} />
        </View>
        {/* Divider */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <View style={styles.shareCell}>
          <Text style={styles.shareText}>VKING</Text>
          <Text style={styles.izfas1}>10,36</Text>
          <ChangePercentageView state="ascending" percentage={10.02} />
        </View>
        {/* Divider */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <View style={styles.shareCell}>
          <Text style={styles.shareText}>KSTUR</Text>
          <Text style={styles.izfas1}>26,60</Text>
          <ChangePercentageView state="ascending" percentage={10.01} />
        </View>
        {/* Divider */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <View style={styles.shareCell}>
          <Text style={styles.shareText}>UFUK</Text>
          <Text style={styles.izfas1}>18,63</Text>
          <ChangePercentageView state="ascending" percentage={10.98} />
        </View>
        {/* Divider */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flex: 0.0000001,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            opacity: 0.1,
          }}
        ></View>
        <View style={styles.shareCell}>
          <Text style={styles.shareText}>MANAS</Text>
          <Text style={styles.izfas1}>17,53</Text>
          <ChangePercentageView state="ascending" percentage={10.79} />
        </View>
        <View style={styles.infoMessage}>
          <Image
            source={require('../../assets/info.jpg')}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>
            BIST verileri 15 dakika gecikmeli olarak sağlanmaktadır.
          </Text>
        </View>
        <View style={styles.empty}></View>
      </ScrollView>
    </View>
  );
};
export default Piyasalar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  safeArea: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  lessView: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  arrow: {
    height: 36,
    width: 20,
    resizeMode: 'contain',
  },
  scrollView: {
    width: '100%',
  },
  titleView: {
    flex: 2.3,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: 50,
      },
      default: {},
    }),
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Ubuntu',
  },
  update: {
    width: '100%',
    alignItems: 'center',
    height: 30,
  },
  updateText: {
    marginTop: 8,
    fontFamily: 'Ubuntu',
  },
  currencyTitle: {
    flex: 0.1,
    width: '100%',
    backgroundColor: 'rgba(244,247,250,255)',
  },
  currencyTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'Ubuntu',
    height: 25,
  },
  currencyInfo: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  currencyInfoText: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'Ubuntu',
  },
  euroImageAndCaptionView: {
    flex: 1,
    marginRight: 10,
    marginTop: 10,
  },
  euroView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  eurImage: {
    width: 45,
    height: 30,
    borderRadius: 2,
    marginLeft: 15,
    resizeMode: 'contain',
  },
  euroCaption: {
    marginTop: 10,
    fontSize: 11,
    marginLeft: 12,
    fontFamily: 'UbuntuLight',
  },
  buySellView: {
    flexDirection: 'row',
    flex: 3,
    height: 90,
    marginLeft: 10,
  },
  arrowDown: {
    width: 45,
    height: 45,
    marginTop: 10,
  },
  euroNumbers: {
    flex: 1.5,
  },
  euroBuyView: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'row',
    flex: 3,
  },
  euroBuy: {
    flex: 1,
    fontFamily: 'UbuntuLight',
  },
  euroBuyAmount: {
    flex: 1,
    fontFamily: 'UbuntuBold',
  },
  infoImage: {
    width: 32,
    height: 32,
  },
  infoMessage: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 20,
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'UbuntuLight',
    marginLeft: 5,
    fontSize: 12,
    opacity: 0.8,
  },
  bistNumbers: {
    flex: 1,
  },
  bistView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  bistNumber: {
    fontFamily: 'UbuntuLight',
    marginRight: 50,
  },
  bistRate: {
    flex: 1,
    fontFamily: 'UbuntuLight',
    color: 'rgb(59,136,196)',
  },
  arrowUp: {
    width: 45,
    height: 45,
  },
  bistInfoText: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'Ubuntu',
  },
  bistCell: {
    flexDirection: 'row',
    flex: 3,
    height: 65,
  },
  bistImage: {
    width: 40,
    height: 30,
    borderRadius: 2,
    marginLeft: 15,
  },
  shareOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },

  arrowText: {
    marginRight: 18,
    height: 36,
    width: 20,
    resizeMode: 'contain',
  },
  arrowView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  shareCell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  shareText: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Ubuntu',
    marginLeft: 40,
    flex: 0.72,
  },
  izfas1: {
    marginRight: 80,
  },
  empty: {
    height: 80,
  },
});
