import React from 'react';
import { Icon, Image } from 'react-native-elements';
import { BLUE } from '../lib/constants';

const actions = [
  {
    title: 'Varlıklarım',
    id: 1,
    image: (
      <Image
        source={require('../assets/img/varliklarim.png')}
        style={{ width: 30, height: 30 }}
      />
    ),
  },
  {
    title: 'Para Çek / Yatır',
    id: 2,
    image: (
      <Image
        source={require('../assets/img/cekyatir.png')}
        style={{ width: 30, height: 30 }}
      />
    ),
  },
  {
    title: 'Akıllı Rehber',
    id: 3,
    image: (
      <Icon
        name="address-book"
        size={30}
        color={BLUE}
        type="font-awesome"
      ></Icon>
    ),
  },
  {
    title: 'Aracım+',
    id: 5,
    image: <Icon name="car" size={30} type="font-awesome" color={BLUE}></Icon>,
  },
  {
    title: 'WorldPay',
    id: 4,
    image: (
      <Image
        source={require('../assets/img/wpay2.png')}
        style={{ width: 55, height: 55, marginBottom: -5 }}
      />
    ),
  },
];

export default actions;
