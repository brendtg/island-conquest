import NumericInput from 'react-native-numeric-input'
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , Modal, SectionList, Alert} from 'react-native';
import 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    marginTop: 10,
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


const ResourceItem = (title) => {
  const [counterValue, setCounterValue] = useState(0);
  return(
      <>
      <Text>{title} </Text>
   <NumericInput 
            value={counterValue} 
            onChange={(counterValue) => {
                setCounterValue(counterValue)
            }}
            totalWidth={200} 
            totalHeight={40} 
            iconSize={25}
            step={1}
            valueType='integer'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            </>
  )
};

const ResourceScreen = ({ navigation }) => {
    console.log("\n")
  const Improvements = ["farms", "quarries", "lumbermills", "mines"]
  const Resources = ["food", "stone", "wood", "metal"]
  return(
        <>
        <SafeAreaView style={styles.panel}>
          <Text style={styles.header}>Improvements</Text>
    <View style = {styles.picker_column}>
      {Improvements.map((elt) => {
          return(
          ResourceItem(elt, navigation)
          )
      })}
    </View>
          <Text style={styles.header}>Reserves</Text>
    <View style = {styles.picker_column} >
      {Resources.map((elt) => {
          return(
          ResourceItem(elt, navigation)
          )
      })}
    </View>
    </SafeAreaView>
    </>
  )
}

export default ResourceScreen;