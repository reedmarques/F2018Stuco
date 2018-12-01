import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home';
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import Screen4 from '../screens/Screen4'
import Screen5 from '../screens/Screen5'
import Screen6 from '../screens/Screen6'
import AddContact from '../screens/AddContact'

const BGC = 'white'
const tintColor = 'red'




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

export const HomeStackOuter = createStackNavigator({
  Home:{
    screen: HomeStack
  },
  AddContact: {
    screen: AddContact
  }
}, {
  headerMode:'none',
  mode: 'modal',
})


export const TabNav = createBottomTabNavigator({
  Home: {
    screen: HomeStackOuter,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: <Icon name="ios-square" size={30} color={`${tintColor}`}/>
    }
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: <Icon name="ios-cloud" size={30} color={`${tintColor}`}/>
    }
  },
  Screen4: {
    screen: Screen4,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: <Icon name="ios-star" size={30} color={`${tintColor}`}/>
    }
  },
  Screen5: {
    screen: Screen5,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: <Icon name="ios-notifications" size={30} color={`${tintColor}`}/>
    }
  },
  Screen6: {
    screen: Screen6,
    navigationOptions: {
      tabBarLabel: null,
      tabBarIcon: <Icon name="md-add-circle" size={30} color={`${tintColor}`}/>
    }
  },
}, {
  headerMode: 'none',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    // showLabel: false,
    activeTintColor: '#e91e63', // just changes the label color
    activeBackgroundColor:`${BGC}`,
    inactiveBackgroundColor:`${BGC}`,
  }
})



export const Root = createStackNavigator({
  Root: {
    screen: TabNav,
  }
}, {
  headerMode: 'none'
})
