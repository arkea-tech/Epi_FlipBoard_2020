import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';
import jsonTest from './test'
import ArticleBox from './articleBox'

function ThreeByThree(list) {
  let j = 0;
  let newList = [];
  let tmpList = []

  //console.log(newList[0][0])
  for (var i = 0; i < list.length; i++) {
    tmpList.push(list[i])
    //newList[x][j] = list[i];
    j++;
    if (j == 3) {
      newList.push(tmpList)
      tmpList = [];
      j = 0;
    }
  }
  if (j != 0)
    newList.push(tmpList)
  console.log('newList: ', newList)
  return newList;
}

export function FeaturedScreen({navigation}) {

    const [valueTest, onChangeTest] = React.useState('');

    var test = '{"Tags": ["Tech", "France"], "Title": "titre 1","Link": "link1","Image": "Image1","Desc": "This article is about stuff","Source": "source1","Autor": "autor1","Date": "01/02/2020"}';
    var json = JSON.parse(test);
    var test2 = jsonTest.articles;

    console.log("wallah: ", test2)
    let newDecklist = Object.keys(test2).map((val) => { return { ...test2[val], ID: val }; });
    for (var i = 0; i < newDecklist.length; i++) {
      console.log(i, ' : ', newDecklist[i])
    }
    var newList = ThreeByThree(newDecklist);
    return (
      <ScrollView style={styles.back}>
        <FlatList
          data={newList}
          renderItem={({item}) => <ArticleBox test={item}/>}
        />
        <View style={styles.cont}>
        </View>
        <View style={styles.container}>
          <Button mode="contained" onPress={() => navigation.navigate('Spotlight')}
              title= "Explore Spotlight"
              style={styles.buttoncontainer}
          />
          <Button mode="contained" onPress={() => navigation.push('Featured')}
              title= "Featured"
              style={styles.buttoncontainer}
          />
          <Button mode="contained" onPress={() => navigation.navigate('News')}
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
      </ScrollView>
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
    back: {
        backgroundColor: 'pink',
        flexDirection: 'column',
        flex: 1
    }

  });
