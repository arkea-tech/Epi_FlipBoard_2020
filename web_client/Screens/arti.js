import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  }
}

function dispWeb() {
  console.log('hey hello')
  return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
}

export default class Arti extends Component {
  render() {
    return (
        <View style={styles.arti}>
          <View style={styles.img}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'stretch', position: 'absolute'}}
              source={require('../ressources/epiflipboard.png')} />
          </View>
          <View style={styles.tags}>
            <Text style={{textAlign: 'left', fontSize: 15}}>
              #{this.props.test.Tags}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={{textAlign: 'left', fontSize: 25}} onPress={() => this.props.nav.navigate('WebV')}>
              {this.props.test.Title}
            </Text>
          </View>
          <View style={styles.source}>
            <Text style={{textAlign: 'left', fontSize: 15}}>
              {this.props.test.Source} - {this.props.test.Autor}
            </Text>
            <View style={styles.title}>
              <Text style={{textAlign: 'left', fontSize: 25}}>
                {this.props.test.Date}
              </Text>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  arti: {

    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    minWidth: '25vw',
    minHeight: '40vh',
    marginLeft: '5%'
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: '1%'
  },
  title: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: '1%'
  },
  source: {
    flex: 0.05,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: '1%'
  }

});
