import { StyleSheet } from 'react-native';
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

export { createStyleSheet, fetchData };
