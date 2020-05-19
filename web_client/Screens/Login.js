import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, Image, Button, View, StyleSheet, SafeAreaView, TextInput, Text, StatusBar} from 'react-native';
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
    return img;
}

function CheckResult(res, navigation) {
  res = JSON.parse(res)
  if (!res.userId || !res.token)
    return;
  navigation.navigate('Featured', {userId: res.userId, token: res.token});
  //navigation.navigate('Favorites');
}

export function LoginScreen({navigation}) {

    const [value, onChangeText] = React.useState('');
    const [valuePass, onChangePass] = React.useState('');
    const [Img, onChangeImg] = React.useState(RandPic());
    const [Alert, onChangeAlert] = React.useState(false);
    const [ErrorMess, onChangeErrorMess] = React.useState('Error');

    function LogUser(email, password) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({"email": email, "password": password});

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
          var test = JSON.parse(result)
          CheckResult(result, navigation)
          if (test.error) {
            if (!test.error.length) {
              test.error = 'user not existing';
            }
            onChangeAlert(true);
            onChangeErrorMess(test.error)
          }
        })
        .catch(error => console.log('error', error));
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
                placeholder={'    Username'}
                autocompletetype={'username'}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                underlineColorAndroid={'purple'}
                style={{ height: 50, width: '70%', fontSize: 20, borderColor: 'gray', borderBottomWidth: 1 }}
                onChangeText={text => onChangePass(text)}
                value={valuePass}
                placeholder={'     Password'}
                autocompletetype={'password'}
                secureTextEntry={true}
              />
            </View>
            <View style={{flex: 0.1, flexDirection: 'column'}}>
              <Button
                title="Confirm"
                color="#515A5A"
                onPress={() => LogUser(value, valuePass)}
              />
            </View>
            <View style={{flex: 0.4, flexDirection: 'column'}}>
              <Text style={styles.textLink} onPress={()=> props.navigation.navigate('Home')}>
                Forgot Password ?
              </Text>
              <Text style={styles.textLink} onPress={() => navigation.navigate('Register')}>
                Dont have an account ?
              </Text>
            </View>
          </View>
          <AwesomeAlert
            show={Alert}
            showProgress={false}
            title="Login Error"
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
