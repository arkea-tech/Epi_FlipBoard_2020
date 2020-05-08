import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, Image, Button, View, Alert, StyleSheet, SafeAreaView, TextInput, Text, StatusBar} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

function RandPic() {
    var nb = Math.floor(Math.random() * 3) + 1;
    var img = '';

    if (nb == 1)
      img = require('../ressources/street1.jpg');
    if (nb == 2)
      img = require('../ressources/street2.jpeg');
    if (nb == 3)
      img = require('../ressources/plum2.jpg');
    console.log(nb)
    return img;
}

function LogUser(email, password) {
  console.log("hello man")
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"email": email, "password": password});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http:localhost:3000/api/auth/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export function RegisterScreen({navigation}) {

    const [value, onChangeText] = React.useState('');
    const [valuePass, onChangePass] = React.useState('');
    const [valueConfPass, onChangeConfPass] = React.useState('');
    const [Img, onChangeImg] = React.useState(RandPic());
    const [Alert, onChangeAlert] = React.useState(false);
    const [ErrorMess, onChangeErrorMess] = React.useState('Error');

    function RegUser(email, password, conf) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"email": email, "password": password});
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http:localhost:3000/api/auth/signup", requestOptions)
        .then(response => response.text())
        .then(result => {
          var test = JSON.parse(result)
          if (test.error) {
            onChangeAlert(true);
            onChangeErrorMess(test.error.message)
          }
          if (test.message == 'User added successfully !')
            LogUser(email, password)
        })
        .catch(error => {
          console.log('error', error)
        });
    }

    return (

      <View style={styles.back}>
        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute'}}
          source={Img} />
          <View style={styles.form}>
            <View style={styles.logo}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute'}}
              source={require('../ressources/epiflipboard.png')} />
            </View>
            <View style={styles.textInput}>
              <TextInput
                underlineColorAndroid={'purple'}
                style={{ height: 50, width: '70%', fontSize: 20, borderColor: 'gray', borderBottomWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                textAlign={'center'}
                placeholder={'    Username'}
                autoCompleteType={'username'}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                underlineColorAndroid={'purple'}
                style={{ height: 50, width: '70%', fontSize: 20, borderColor: 'gray', borderBottomWidth: 1 }}
                onChangeText={text => onChangePass(text)}
                value={valuePass}
                textAlign={'center'}
                placeholder={'     Password'}
                autoCompleteType={'password'}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                underlineColorAndroid={'purple'}
                style={{ height: 50, width: '70%', fontSize: 20, borderColor: 'gray', borderBottomWidth: 1 }}
                onChangeText={text => onChangeConfPass(text)}
                value={valueConfPass}
                textAlign={'center'}
                placeholder={'Confirm Password'}
                autoCompleteType={'password'}
                secureTextEntry={true}
              />
            </View>
            <View style={{flex: 0.1, flexDirection: 'column'}}>
              <Button
                title="Confirm"
                color="#515A5A"
                onPress={() => RegUser(value, valuePass, valueConfPass)}
              />
            </View>
            <View style={{flex: 0.4, flexDirection: 'column'}}>
              <Text style={styles.textLink} onPress={() => navigation.navigate('Login')}>
                Already have an account ?
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <Button mode="contained" onPress={() => navigation.navigate('Spotlight')}
                title= "Explore Spotlight"
                style={styles.buttoncontainer}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Featured')}
                title= "Featured"
                style={styles.buttoncontainer}
            />
            <Button mode="contained" onPress={() => navigation.push('News')}
                title= "News"
                style={styles.buttoncontainer}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Business')}
                title= "Business"
                style={styles.buttoncontainer}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Tech')}
                title= "Tech and science"
                style={styles.buttoncontainer}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Sport')}
                title= "Sport"
                style={styles.buttoncontainer}
            />
          </View>
          
          <AwesomeAlert
              show={Alert}
              showProgress={false}
              title="Register Error"
              message={ErrorMess}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showConfirmButton={true}
              confirmText="Ok"
              confirmButtonColor="#DD6B55"
              onCancelPressed={() => {
                onChangeAlert(false)
              }}
              onConfirmPressed={() => {
                onChangeAlert(false)
              }}
            />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-evenly',
    },
    buttonContainer: {
      width: 100,
      height: 100,
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
      width: null,
      height: null,
      flex: 1,
    },
    title: {
      justifyContent: 'center'
    },
    back: {
        backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    form: {
        backgroundColor: '#FFC300',
        flex: 0.9,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '20%',
        height: '100%',
        marginTop: '5%',
        opacity: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 0.2,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
    },
    textLink: {
        color: '#671478',
        fontSize: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
        justifyContent: 'center',
        textAlign: 'center'
    },
    logo: {
      backgroundColor: '#FFC300',
      flex: 0.45,
      width: '100%',
      height: '100%',
      opacity: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '5%',
      marginTop: '5%'
    }

  });
