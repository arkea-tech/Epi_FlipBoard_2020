import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';
import Arti from './arti'

const blank = '{"Tags": ["Tech"], "Title": "blank","Link": "","Image": "","Desc": "","Source": "","Autor": "","Date": ""}';

export default class ArticleBox extends Component {


    render() {
      if (this.props.test.length == 3) {
        return (
          <View style={styles.cont}>
            <Arti test={this.props.test[0]} nav={this.props.nav}/>
            <Arti test={this.props.test[1]} nav={this.props.nav}/>
            <Arti test={this.props.test[2]} nav={this.props.nav}/>
          </View>
        )
      }
      if (this.props.test.length == 2) {
        return (
          <View style={styles.cont}>
            <Arti test={this.props.test[0]} nav={this.props.nav}/>
            <Arti test={this.props.test[1]} nav={this.props.nav}/>
            <Arti test={blank} nav={this.props.nav}/>
          </View>
        )
      }
      if (this.props.test.length == 1) {
        return (
          <View style={styles.cont}>
            <Arti test={this.props.test[0]} nav={this.props.nav}/>
            <Arti test={blank} nav={this.props.nav}/>
            <Arti test={blank} nav={this.props.nav}/>
          </View>
        )
      }
    }
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    minWidth: '80%',
    maxWidth: '80%',
    minHeight: '40vh',
    marginTop: '5%',
    marginLeft: '5%'
  },

});
