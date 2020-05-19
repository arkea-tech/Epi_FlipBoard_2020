import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';
import { WebView } from 'react-native-webview';

function disTags(tags) {
  return (
    tags.map((item, key)=>(
         <Text key={key}> #{ item } </Text>)
         )
  )
}

function myDate(date) {
    const date2 = Date.parse(date);
    var a = new Date(date2 * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getYear() - 48431;
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = date + ' ' + month + ' ' + year;
      return time;
}

export default class Arti extends Component {
  render() {
    if (this.props.test.Title === "" || !this.props.test.Title) {
      return (
        <View style={styles.arti}>
          <Text style={{textAlign: 'left', fontSize: 25}}>

          </Text>
        </View>
      )
    }
    else {
      return (
          <View style={styles.arti}>
            <View style={styles.img}>
              <Image style={{width: '100%', height: '100%', resizeMode: 'stretch', position: 'absolute'}}
                source={{uri:this.props.test.Image}} />
            </View>
            <View style={styles.tags}>
              <Text style={{textAlign: 'left', fontSize: 15}}>
                {disTags(this.props.test.Tags)}
              </Text>
            </View>
            <View style={styles.title}>
              <Text style={{textAlign: 'left', fontSize: 25}} onPress={() => this.props.nav.navigate('WebV', {link: this.props.test.Link})}>
                {this.props.test.Title}
              </Text>
            </View>
            <View style={styles.source}>
              <Text style={{textAlign: 'left', fontSize: 15}}>
                {this.props.test.Source} - {this.props.test.Author}
              </Text>
              <View style={styles.title}>
                <Text style={{textAlign: 'left', fontSize: 25}}>
                  {myDate(this.props.test.Date.toString())}
                </Text>
              </View>
            </View>
          </View>
      )
    }
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
    marginLeft: '5%',
    borderColor: 'gray',
    borderBottomWidth: 1
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
