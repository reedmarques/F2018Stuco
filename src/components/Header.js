/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        {this.props.title != 'Home' ? <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name='arrow-back' size={30} color='blue'/>
        </TouchableOpacity>
        :
        <TouchableOpacity>
          <Icon name='menu' size={30} color='blue'/>
        </TouchableOpacity>}

        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <Icon name='menu' size={30} color='transparent'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:40,
    padding:8,
    paddingHorizontal:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white'
  },
  title:{
    color:'blue',
    fontSize:20,
  }
});
