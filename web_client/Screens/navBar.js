import React, { Component } from 'react';
import {Button,Image, View, StyleSheet,Text,ScrollView,FlatList,TouchableOpacity} from 'react-native';

export default class NavBar extends Component {
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate('Spotlight')}>
            <Text style={{ fontSize: 20 }}>Explore Spotlight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate('Featured')}>
            <Text style={{ fontSize: 20 }}>Featured</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate('News')}>
            <Text style={{ fontSize: 20 }}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate('Business')}>
            <Text style={{ fontSize: 20 }}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate('Tech')}>
            <Text style={{ fontSize: 20 }}>Tech and science</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate('Sport')}>
            <Text style={{ fontSize: 20 }}>Sport</Text>
          </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: '80%',
    maxWidth: '80%',
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
    width: '14.66%',
    height: '8vh',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: '1%',
    marginRight: '1%'
  },
});
