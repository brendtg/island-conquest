import NumericInput from 'react-native-numeric-input'
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , Modal, SectionList, Alert} from 'react-native';
import 'react-native-gesture-handler';




const ResourceItem = (title) => {
  const [counterValue, setCounterValue] = useState(0);
  console.log(`${title}:${counterValue}`)
  return(
      <>
      <Text>{title} </Text>
   <NumericInput 
            value={counterValue} 
            onChange={(counterValue) => {
                setCounterValue(counterValue)
            }}
            totalWidth={240} 
            totalHeight={50} 
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
  const Resources = ["wood", "stone", "food", "metal"]
  return(
        <>
    <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {Resources.map((elt) => {
          return(
          ResourceItem(elt, navigation)
          )
      })}
    </View>
    </>
  )
}

export default ResourceScreen;