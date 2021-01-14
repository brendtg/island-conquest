import React, { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity , TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GlossaryScreen from './src/Glossary';
import ResourceScreen from './src/Resources';
import OverviewScreen from './src/Overview';
import BuildingsScreen from './src/Buildings';
import BattleScreen from './src/Battle';
import DiplomacyScreen from './src/Diplomacy';
import Chat from './src/Chat';
import HomeScreen from './src/Home';
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Glossary" component={GlossaryScreen}/>
      </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Buildings" component={BuildingsScreen}/>
        <Tab.Screen name="Battle" component={BattleScreen}/>
        <Tab.Screen name="Overview" component={OverviewScreen}/>
        <Tab.Screen name="Resources" component={ResourceScreen}/>
        <Tab.Screen name="Chat" component={Chat}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
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

export default App
