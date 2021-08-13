import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import axios from 'axios';

/**
 *
 * @param  {...any} styles
 */
function createStyleSheet({ ...styles }) {
  const stylesheet = StyleSheet.create({
    style: {
      ...styles,
    },
  });
  return stylesheet.style;
}

/**
 *
 * @param {{url: string, method: "GET" |"POST" | "PUT" | "PATCH" | "DELETE", body: any, header: any}} param0
 */
function fetchData({ url, method, body, header = {} }) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method,
        url,
        data: body,
        headers: header,
      });

      return resolve(response?.data?.result);
    } catch (error) {
      return reject(error?.response?.data?.result);
    }
  });
}

//Status bar height

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

export { createStyleSheet, fetchData, StatusBarHeight };
