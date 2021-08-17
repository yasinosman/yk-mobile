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

export function getPositiveRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function getNDigitNumber(digit) {
  const multiplier = 9 * 10 ** digit;
  return Math.floor(Math.random() * multiplier) + 10 ** digit;
}
export function formatDate(date) {
  return (
    // ('00' + date.getDate()).slice(-2) +
    // '/' +
    // ('00' + (date.getMonth() + 1)).slice(-2) +
    // '/' +
    // date.getFullYear() +
    // ' ' +
    ('00' + date.getHours()).slice(-2) +
    ':' +
    ('00' + date.getMinutes()).slice(-2) +
    ':' +
    ('00' + date.getSeconds()).slice(-2)
  );
}

export function generateMockMarketData(initialCurrency, targetCurrency) {
  let data = [];

  for (let i = 0; i < 20; i++) {
    const [integer, decimal] = formatAmount(
      getPositiveRandomNumber(
        EXCHANGE_RATES[initialCurrency][targetCurrency] -
          (getNDigitNumber(3) > 0 || 0),
        EXCHANGE_RATES[initialCurrency][targetCurrency] + getNDigitNumber(3)
      ).toFixed(4)
    );

    const [quantityInt, quantityDecimal] = formatAmount(
      getPositiveRandomNumber(0, 10).toFixed(4)
    );

    const d = new Date();
    d.setSeconds(d.getSeconds() + (i + 10));

    data.push({
      date: formatDate(d),
      type: ['buy', 'sell'][Math.floor(Math.random() * 2)],
      quantity: `${quantityInt}${
        quantityDecimal ? `,${quantityDecimal}` : `,00`
      }`,
      price: `${integer}${decimal ? `,${decimal}` : `,00`}`,
      id: i,
    });
  }

  return data;
}

/**
 *
 * @param {any} obj
 * @param {Array<any>} propertyChain
 */
export function getLastDefinedValue(obj, propertyChain) {
  let lastValue = obj;
  let lastProperty = null;
  let firstUndefinedProperty = null;
  let fistUndefinedPropertyIndex = 0;

  for (let i = 0; i < propertyChain.length; i++) {
    const currentProp = propertyChain[i];

    if (typeof currentProp === 'function') {
      try {
        const result = currentProp(lastValue);

        if (result !== null && typeof result !== 'undefined') {
          lastValue = result;
          lastProperty = currentProp;
        } else {
          firstUndefinedProperty = currentProp;
          fistUndefinedPropertyIndex = i;
          break;
        }
      } catch (error) {
        break;
      }
    } else if (typeof currentProp === 'number') {
      const result = lastValue[currentProp];

      if (result !== null && typeof result !== 'undefined') {
        lastValue = result;
        lastProperty = currentProp;
      } else {
        firstUndefinedProperty = currentProp;
        fistUndefinedPropertyIndex = i;

        break;
      }
    } else if (
      lastValue.hasOwnProperty(currentProp) ||
      (isArray(lastValue) && lastValue.includes(currentProp))
    ) {
      lastValue = lastValue[currentProp];
      lastProperty = currentProp;
    } else {
      firstUndefinedProperty = currentProp;
      fistUndefinedPropertyIndex = i;

      break;
    }
  }

  return {
    lastValue,
    lastProperty,
    firstUndefinedProperty,
    fistUndefinedPropertyIndex,
    initialObject: obj,
  };
}

export function isArray(a) {
  return !!a && a.constructor === Array;
}

export function isObject(a) {
  return !!a && a.constructor === Object;
}
