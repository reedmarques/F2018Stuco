import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text} from 'react-native';

import { NavigationActions, Navigation, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header.js'
import firebase from '../config/firebase';

export default class AddContact extends React.Component {


  state={
    "celebId":"",
    "name":"",
    "dob":"",
    "havePic":"",
    "twitter":"",
    "price":0,
    "age":0
  }


  pushData(){
    const data = this.state;

    if (data.name && data.dob && data.age && data.celebId) {
      const ref = firebase.database().ref(`Users/${data.celebId}`);

      ref.set(
        data
      ).then(() => {
        alert('Successfully added!')
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      alert('Fill out all required fields!')
    }

  }


  render() {
    return(
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header title='AddContact' navigation={this.props.navigation}/>
          <View style={styles.body}>
            <TextInput style={styles.input}
              placeholder='Name'
              height={40}
              onChangeText={(text) => this.setState({name: text})}
            />
            <TextInput style={styles.input}
              placeholder='Twitter'
              height={40}

              onChangeText={(text) => this.setState({twitter: text})}
            />
            <TextInput style={styles.input}
              placeholder='Job'
              onChangeText={(text) => this.setState({job: text})}
            />
            <TextInput style={styles.input}
              placeholder='DoB'
              keyboardType='numeric'
              onChangeText={(text) => this.setState({dob: text})}
            />
            <TextInput style={styles.input}
              placeholder='Age'
              keyboardType='numeric'
              onChangeText={(text) => this.setState({age: text})}
            />
            <TextInput style={styles.input}
              placeholder='Celeb ID'
              keyboardType='numeric'
              onChangeText={(text) => this.setState({celebId: text})}
            />
            <TouchableOpacity
              onPress={() => this.pushData()}>
              <Text> Submit </Text>

            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC644B',
  },
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  input: {},
  safeArea:{
    flex:1,
    backgroundColor:'white'
  },
});
