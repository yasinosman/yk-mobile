import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainService {
  static load(cb) {
    setTimeout(cb, 3000);
  }
}
