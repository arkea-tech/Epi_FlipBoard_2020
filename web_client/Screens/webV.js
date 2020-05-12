import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://github.com/expo/expo' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}


export function WebV({navigation}) {
  console.log('fuck you')
  return (
    <View style={styles.cont}>
      <WebView
        source={{ uri: 'https://github.com/expo/expo' }}
        style={{ marginTop: 20 }}
      />
      <Text> hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    minWidth: '80%',
    maxWidth: '80%',
    minHeight: '40vh',
    marginTop: '5%',
    marginLeft: '5%',
    position: 'absolute'
  },
});
