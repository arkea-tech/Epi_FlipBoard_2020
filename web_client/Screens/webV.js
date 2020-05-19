import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList,Platform} from 'react-native';
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


export function WebV({route, navigation}) {
  return (Platform.OS === 'web'?<iframe src={route.params.link} height={'100%'} width={'100%'}/>:<View style={{flex:1}}>:<WebView originWhitelist={['*']}
      source={{ uri: route.params.link, baseUrl:'' }}
     style={{flex:1,height:2}}
     />
  </View>)
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    minWidth: '100vw',
    minHeight: '100vh',

  },
});
