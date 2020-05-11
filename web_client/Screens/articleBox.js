import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList} from 'react-native';

export default class ArticleBox extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.arti}>
          <View style={styles.img}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'stretch', position: 'absolute'}}
              source={require('../ressources/epiflipboard.png')} />
          </View>
          <View style={styles.tags}>
            <Text style={{textAlign: 'left', fontSize: 15}}>
              #{this.props.test[1].Tags}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={{textAlign: 'left', fontSize: 25}}>
              {this.props.test[1].Title}
            </Text>
          </View>
          <View style={styles.source}>
            <Text style={{textAlign: 'left', fontSize: 10}}>
              {this.props.test[1].Source}
            </Text>
          </View>
        </View>
        <View style={styles.arti}>
          <Text>
            art2  {this.props.test[1].Link}
          </Text>
        </View>
        <View style={styles.arti}>
          <Text>
            art3 {this.props.test[2].Link}
          </Text>
        </View>
      </View>
    )
  }
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
    marginTop: '2%',
    marginLeft: '5%'
  },
  arti: {
    backgroundColor: 'green',
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
    aligContent: 'flex-start',
    marginTop: '1%'
  },
  title: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    aligContent: 'flex-start',
    marginTop: '1%'
  },
  source: {
    flex: 0.05,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    aligContent: 'flex-start',
    marginTop: '1%'
  }

});
