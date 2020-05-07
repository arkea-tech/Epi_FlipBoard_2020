import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Button, View, StyleSheet,Text} from 'react-native';

export function BusinessScreen({navigation}) {
    return (
      
      <View style={styles.container}>
      <Text style= {styles.centered}> this is business screen </Text>

      <Button mode="contained" onPress={() => navigation.navigate('Spotlight')}
          title= "Explore Spotlight"
          style={styles.buttoncontainer}
      />
      <Button mode="contained" onPress={() => navigation.navigate('Featured')}
          title= "Featured"
          style={styles.buttoncontainer}
      />
      <Button mode="contained" onPress={() => navigation.navigate('News')}
          title= "News"
          style={styles.buttoncontainer}
      />
      <Button mode="contained" onPress={() => navigation.push('Business')}
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
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    background: {
      width: null,
      height: null,
      flex: 1,
    },
    title: {
      justifyContent: 'center'
    }
  
  });
