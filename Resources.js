import NumericInput from 'react-native-numeric-input'
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , Modal, SectionList, Alert, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-community/picker';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    fontWeight:'bold',
    fontSize: 19,
    backgroundColor: '#dcdcdc',
    marginTop: 10,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  picker: {
    height: 20, 
    width: '110%',
    alignContent: 'center',
    paddingTop: 60,
    paddingBottom: 80,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  picker_column: {
    flexDirection: 'column',
    padding:2,
    alignContent: 'center',
    justifyContent: 'center'
  },  
  picker_row  : {
    marginTop: 10,
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
    backgroundColor: '#37BE0A',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10,
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



const ResourceScreen = ({ navigation }) => {
  const [counterValue, setCounterValue] = useState(0);
  const [level, setLevel] = useState(1);
 const ResourceItem = (title, type) => {
  return(
      <>
      <View style={styles.picker_row}>
      <View styles={styles.picker_row}>
      <Text>{title} </Text>
   <NumericInput 
            value={counterValue} 
            onChange={(counterValue) => {
                setCounterValue(counterValue)
            }}
            totalWidth={200} 
            minValue={0}
            totalHeight={40} 
            iconSize={25}
            step={1}
            valueType='integer'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            </View>
            { type==="improvement" && 
      <View styles={styles.picker_row}>
      <Text>Level </Text>
   <NumericInput 
            value={level} 
            onChange={(level) => {
                setCounterValue(setLevel)
            }}
            totalWidth={100} 
            minValue={0}
            maxValue={5}
            totalHeight={40} 
            iconSize={25}
            step={1}
            valueType='integer'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            </View>
            }
            </View>          
            </>
  )
};
  const Improvements = ["farms", "quarries", "lumbermills", "mines"]
  const Resources = ["food", "stone", "wood", "metal"]
  return(
        <>
        <SafeAreaView style={styles.panel}>
          <Text style={styles.header}>Improvements</Text>
    <View style = {styles.picker_column}>
      {Improvements.map((elt) => {
          return(
          ResourceItem(elt, "improvement", navigation)
          )
      })}
    </View>
          <Text style={styles.header}>Reserves</Text>
    <View style = {styles.picker_column} >
      {Resources.map((elt) => {
          return(
          ResourceItem(elt,"resource", navigation)
          )
      })}
    </View>
      <SafeAreaView style={styles.panel}>
        <TouchableOpacity onPress={()=>{}} style={styles.button} title="Generate Resources"><Text style={styles.button}>Generate Resources</Text></TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
    </>
  )
}

export default ResourceScreen;