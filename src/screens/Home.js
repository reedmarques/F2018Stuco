/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

  state = {
    data: []
  }

  componentWillMount() {
    this.populateData()
  }

  populateData() {
    this.setState({data: [
      {
        id: 1,
        name: 'Reed'
      },
      {
        id: 2,
        name: 'Elon'
      }
    ]})
  }

  _renderItem = ({item}) => (
    <View style={styles.CellContainer}>
      <View style={styles.CellInnerCont}>

        <Text style={styles.CellText}>
          Name: {item.name}
        </Text>
        <Text style={styles.CellText}>
          ID: {item.id}
        </Text>
      </View>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen2')}>
        <Icon style={styles.icon} name='add' size={30} color='black'/>
      </TouchableOpacity>

    </View>
  )

  _keyExtractor = (item, index) => item.id;


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header title='Home'/>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            navigation={this.props.navigation}
            keyExtractor={this._keyExtractor}
          />

        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  secondContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
  },
  thirdContainer:{
    flex:2,
    backgroundColor:'green'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bottomText:{
    fontSize: 30,
    color:'red'
  },


  CellContainer:{
    flex:1,
    flexDirection:'row',
    padding: 20,
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'red'
  },
  CellText:{
    // fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    fontStyle: 'italic',

  },
  CellInnerCont:{
    flexDirection:'row'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center'
  }




});
