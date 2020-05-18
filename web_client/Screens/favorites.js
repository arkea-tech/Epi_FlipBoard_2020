import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {ImageBackground, Image, Button, View, StyleSheet, SafeAreaView, TextInput, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

class BtComp extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
         <Button
           title={this.props.title}
           onPress={() => console.log('hello')}
         />
      </View>
    );
  }
}

export function FavoritesScreen({route, navigation}) {

  const [value, onChangeText] = React.useState('');
  const [selectedIndex, onChangeselectedIndex] = React.useState('');
  const [Alert, onChangeAlert] = React.useState(false);
  const [ErrorMess, onChangeErrorMess] = React.useState('Error');
  const [TintColor1, onChangeTintColor1] = React.useState(false);
  const buttons = ['Hello', 'World', 'Buttons', 'zaezaezaezaeazezaez']

  return (
    <View style={styles.back}>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => onChangeTintColor1(true)}>
          <Image style={TintColor1 ? {width: '30vh', height: '30vh', resizeMode: 'contain', marginTop: '10vh', marginLeft: '10vw', tintColor: 'green'} : {width: '30vh', height: '30vh', resizeMode: 'contain', marginTop: '10vh', marginLeft: '10vw'}}
            source={require('../ressources/science.png')}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('touchdr')}>
          <Image style={{width: '30vh', height: '30vh', resizeMode: 'contain', marginTop: '-30vh', marginLeft: '40vw'}}
            source={require('../ressources/epiflipboard.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('touchdr')}>
          <Image style={{width: '30vh', height: '30vh', resizeMode: 'contain', marginTop: '-30vh', marginLeft: '70vw'}}
            source={require('../ressources/epiflipboard.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('touchdr')}>
          <Image style={{width: '30vh', height: '30vh', resizeMode: 'contain', marginTop: '10vh', marginLeft: '25vw'}}
            source={require('../ressources/epiflipboard.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('touchdr')}>
          <Image style={{width: '30vh', height: '30vh', resizeMode: 'contain', marginTop: '-30vh' ,marginLeft: '55vw'}}
            source={require('../ressources/epiflipboard.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
      backgroundColor: 'pink',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flex: 10
  },
  button: {
    flexDirection: 'column',
    flex: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  checked: {
    tintColor: 'red',
  },
  unchecked: {
    tintColor: 'black'
  }
});
