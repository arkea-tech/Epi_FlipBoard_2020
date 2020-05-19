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
  const [TintColor2, onChangeTintColor2] = React.useState(false);
  const [TintColor3, onChangeTintColor3] = React.useState(false);
  const [TintColor4, onChangeTintColor4] = React.useState(false);
  const [TintColor5, onChangeTintColor5] = React.useState(false);
  const buttons = ['Hello', 'World', 'Buttons', 'zaezaezaezaeazezaez']

  return (
    <View style={styles.back}>
      <View style={styles.title}>
        <Text style={{fontSize: 50}}> Chose tags to add to you favorites </Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => onChangeTintColor1(!TintColor1)}>
            <Image style={TintColor1 ? {width: '30vh', height: '25vh', resizeMode: 'contain', tintColor: 'green'} : {width: '30vh', height: '25vh', resizeMode: 'contain'}}
              source={require('../ressources/science.png')}  />
              <Text style={TintColor1 ? {marginLeft: '2vw', fontSize: 30, color: 'green'} :  {marginLeft: '2vw', fontSize: 30}}> Science </Text>
          </TouchableOpacity>
        </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onChangeTintColor2(!TintColor2)}>
              <Image style={TintColor2 ? {width: '30vh', height: '25vh', resizeMode: 'contain', tintColor: 'green'} : {width: '30vh', height: '25vh', resizeMode: 'contain'}}
                source={require('../ressources/culture.png')} />
                <Text style={TintColor2 ? {marginLeft: '3.5vw', fontSize: 30, color: 'green'} :  {marginLeft: '3.5vw', fontSize: 30}}> Culture </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => onChangeTintColor3(!TintColor3)}>
            <Image style={TintColor3 ? {width: '30vh', height: '25vh', resizeMode: 'contain', tintColor: 'green'} : {width: '30vh', height: '25vh', resizeMode: 'contain'}}
              source={require('../ressources/political.png')} />
              <Text style={TintColor3 ? {marginLeft: '4vw', fontSize: 30, color: 'green'} :  {marginLeft: '4vw', fontSize: 30}}> Politic </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.button2}>
          <TouchableOpacity onPress={() => onChangeTintColor4(!TintColor4)}>
            <Image style={TintColor4 ? {width: '30vh', height: '25vh', resizeMode: 'contain', tintColor: 'green'} : {width: '30vh', height: '25vh', resizeMode: 'contain'}}
              source={require('../ressources/sport.png')} />
              <Text style={TintColor4 ? {marginLeft: '4vw', fontSize: 30, color: 'green'} :  {marginLeft: '4vw', fontSize: 30}}> Sport </Text>
          </TouchableOpacity>
        </View>
          <View style={styles.button3}>
            <TouchableOpacity onPress={() => onChangeTintColor5(!TintColor5)}>
              <Image style={TintColor5 ? {width: '30vh', height: '25vh', resizeMode: 'contain', tintColor: 'green'} : {width: '30vh', height: '25vh', resizeMode: 'contain'}}
                source={require('../ressources/epiflipboard.png')} />
                <Text style={TintColor5 ? {marginLeft: '4vw', fontSize: 30, color: 'green'} :  {marginLeft: '4vw', fontSize: 30}}> Wallah </Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        <Button
          style={{width:'10vw', height: '5vh'}}
          title="Confirm"
          color="#515A5A"
          onPress={() => console.log('oki')}
        />
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
  wrapper: {
    flexDirection: 'row',
    flex: 10,
    width: '100%',
    height: '250%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '5vh'
  },
  title: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  button:  {
    flexDirection: 'column',
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '10vw'
  },
  button2:  {
    flexDirection: 'column',
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '25vw'
  },
  button3:  {
    flexDirection: 'column',
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '-5vw'
  }
});
