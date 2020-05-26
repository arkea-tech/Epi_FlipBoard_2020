import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';
import jsonTest from './test'
import ArticleBox from './articleBox'
import NavBar from './navBar'

function ThreeByThree(list) {
  let j = 0;
  let newList = [];
  let tmpList = []

  for (var i = 0; i < list.length; i++) {
    tmpList.push(list[i])
    j++;
    if (j == 3) {
      newList.push(tmpList)
      tmpList = [];
      j = 0;
    }
  }
  if (j != 0)
    newList.push(tmpList)
  //console.log('newList: ', newList)
  return newList;
}

export function FeaturedScreen({route, navigation}) {

    const [valueTest, onChangeTest] = React.useState('');
    const [UserId, onChangeUserID] = React.useState('');
    const [test2, onChangeTest2] = React.useState(jsonTest.articles)
    const [Body, onChangeBody] = React.useState(JSON.stringify({"country":"fr", "word":"sport"}));
    const [Url, onChangeUrl] = React.useState('news-ct');

    React.useEffect(() => {
        callApi()
    })

    function handler(vari) {
        console.log('testing:', vari)
        if (vari == 'featured') {
          onChangeBody(JSON.stringify({"country":"fr"}))
          onChangeUrl('news-ct')
        }
        if (vari == 'sport') {
          onChangeBody(JSON.stringify({"country":"fr", "word":"sport"}))
          onChangeUrl('news-q')
        }
        if (vari == 'business') {
          onChangeBody(JSON.stringify({"country":"fr", "word":"business"}))
          onChangeUrl('news-q')
        }
        if (vari == 'world') {
          onChangeBody(JSON.stringify({"country":"fr", "word":"world"}))
          onChangeUrl('news-q')
        }
    }

    function callApi() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = Body;

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:3000/api/stuff/" + Url, requestOptions)
          .then(response => response.text())
          .then(result => JSON.parse(result))
          .then(resultParse => onChangeTest2(resultParse))
          .catch(error => console.log('error', error))
    }

    const test = route.params.userId;
    //const test = navigation.getParam('userName', 'NO-User');
    //console.log('userId: ', test)

    //console.log("wallah: ", test2)
    let newDecklist = Object.keys(test2).map((val) => { return { ...test2[val], ID: val }; });
    /*for (var i = 0; i < newDecklist.length; i++) {
      console.log(i, ' : ', newDecklist[i])
    }*/
    var newList = ThreeByThree(newDecklist);
    return (
      <ScrollView style={styles.back}>
        <View style={styles.container}>
          <NavBar nav={navigation} action={handler}/>
        </View>
        <FlatList
          data={newList}
          renderItem={({item}) => <ArticleBox test={item} nav={navigation}/>}
        />
        <View style={styles.cont}>
        </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-evenly',
      minWidth: '100vw'
    },
    back: {
        backgroundColor: 'pink',
        flexDirection: 'column',
        flex: 1
    }

  });
