import { StyleSheet } from 'react-native';

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

export { createStyleSheet };
