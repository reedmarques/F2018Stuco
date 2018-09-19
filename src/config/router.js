import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Screen2 from '../screens/Screen2'

export const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Screen2: {
    screen: Screen2
  }
}, {
  headerMode: 'none'
})



export const Root = createStackNavigator({
  Root: {
    screen: HomeStack,
  }
}, {
  headerMode: 'none'
})
