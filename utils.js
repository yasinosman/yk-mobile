import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import axios from 'axios';
import { EXCHANGE_RATES } from './hooks/useCurrency';

/**
 *
 * @param  {...any} styles
 */
export function createStyleSheet({ ...styles }) {
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
export function fetchData({ url, method, body, header = {} }) {
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

/**
 *
 * @param {number | string} amount
 */
export function formatAmount(amount) {
  const splittedArr = amount.toString().split('.');
  const formattedIntegerPart = splittedArr[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.'
  );
  return [formattedIntegerPart, splittedArr[1]];
}

//Status bar height
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

export function getCurrentRouteName(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  return getFocusedRouteNameFromRoute(route);
}

/**
 *
 * @param {"try" | "eur" | "usd"} initialCurrency
 * @param {number} initialAmount
 * @param {"try" | "eur" | "usd"} targetCurrency
 */
export function convertCurrency(
  initialCurrency,
  initialAmount,
  targetCurrency
) {
  if (initialCurrency === targetCurrency) {
    return initialAmount;
  }
  return (
    Math.round(
      (initialAmount * EXCHANGE_RATES[initialCurrency][targetCurrency] +
        Number.EPSILON) *
        1000000
    ) / 1000000
  );
}
