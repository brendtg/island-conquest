
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button,  ScrollView, View, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-community/picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Collapsible from 'react-native-collapsible';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  picker: {
    height: 20, 
    width: '110%',
    alignContent: 'center',
    paddingTop: 80,
    paddingBottom: 90,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  picker_column: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },  
  picker_row  : {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  title: {
    paddingTop: 60,
    marginLeft: 10,
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold'
  },
  panel: {
    paddingTop: 50,
    alignItems: 'center'
  },
  TextStyle:
  {
    textAlign: 'center',
    justifyContent: 'center',
    width: 175,
    fontSize: 30,
     borderWidth: 2,
     borderColor: '#D42500',
     borderRadius: 20 ,
     backgroundColor : "#FFFFFF"
  },
  text: {
    fontSize: 30,
    padding: 10,
    backgroundColor: '#37BE0A',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
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
    fontSize: 30,
    backgroundColor: "#ABBABB",
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#444'
  }
})

const BattleScreen = ({ navigation }) => {
  const [attackerType, setAttackerType] = useState("sword");
  const [attackerValue, setAttackerValue] = useState("0");
  const [defenderType, setDefenderType] = useState("sword");
  const [defenderValue, setDefenderValue] = useState("0");
  const [winner, setWinner] = useState("")
  return(
    <>
    <ScrollView style={styles.container}>
    <SafeAreaView style={styles.title}>
      <Text style={styles.title}>Battle calculator</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.picker_row}>
    <View style={styles.picker_column}>
          <Text style={styles.TextStyle}>Attacker</Text>
      <Picker
        selectedValue={attackerType}
        style={styles.picker}
        onValueChange={(attackerType, itemIndex) => setAttackerType(attackerType)}
      >
        <Picker.Item label="sword fighter" value="sword" />
        <Picker.Item label="archer" value="archer" />
        <Picker.Item label="horse fighter" value="horse" />
        <Picker.Item label="siege" value="siege" />
      </Picker>
      </View>
      <View style={styles.picker_column}>
          <Text style={styles.TextStyle}>Bonus</Text>
      <Picker
        selectedValue={attackerValue}
        style={styles.picker}
        onValueChange={(attackerValue, itemIndex) => setAttackerValue(attackerValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      </View>
      </SafeAreaView>
    <SafeAreaView style={styles.picker_row}>
    <View style={styles.picker_column}>
          <Text style={styles.TextStyle}>Defender</Text>
      <Picker
        selectedValue={defenderType}
        style={styles.picker}
        onValueChange={(defenderType, itemIndex) => setDefenderType(defenderType)}
      >
        <Picker.Item label="sword fighter" value="sword" />
        <Picker.Item label="archer" value="archer" />
        <Picker.Item label="horse fighter" value="horse" />
        <Picker.Item label="siege" value="siege" />
      </Picker>
      </View>
      <View style={styles.picker_column}>
          <Text style={styles.TextStyle}>Bonus</Text>
      <Picker
        selectedValue={defenderValue}
        style={styles.picker}
        onValueChange={(defenderValue, itemIndex) => setDefenderValue(defenderValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      </View>
      </SafeAreaView>
      <SafeAreaView style={styles.panel}>
        <TouchableOpacity onPress={()=>setWinner(attackerValue>=defenderValue ? "Attacker" : "Defender")} style={styles.button} title="calculate"><Text style={styles.button}>Caclulate</Text></TouchableOpacity>
        <Text style={styles.text}>{winner} wins!</Text>
      </SafeAreaView>
      </ScrollView>
  </>
  );
}



export default BattleScreen;