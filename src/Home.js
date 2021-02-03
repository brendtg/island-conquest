import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput , TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({ navigation }) => {
    return(
        <View>
        <Text style={styles.title}>Home Screen</Text>
            <Button title="Go to overview page"
            onPress={() => {
                navigation.navigate('Overview')
            }
            }
            />
            <Button title="See rules"
            onPress={() => {
                navigation.navigate('Buildings')
            }
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  title: {
    paddingTop: 60,
    marginLeft: 10,
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold'
  },
  panel: {
    paddingTop: 40,
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'yellow'
  },
  buttonText: {
    fontSize: 18,
    color: '#444'
  }
})
export default HomeScreen;