
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , Modal, SectionList} from 'react-native';
import { Picker } from 'react-native-community/picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Collapsible from 'react-native-collapsible';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#A9C2FF",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

const BattleScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");
  return(
      <SafeAreaView style={styles.container}>
        <>
      <Text>Battle Calculator</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </>
  </SafeAreaView>
  );
}

const Item = ({ title, navigation  }) => {
  const [collapsibleVisible, setCollapsibleVisible] = useState(true);
  console.log (Collapsible)
  return(
  <View style={styles.item}>
    <Button title={title}
    onPress={() => {
      setCollapsibleVisible(!collapsibleVisible)
        // navigation.navigate('Home')
    }}
    />
    <Collapsible collapsed={collapsibleVisible}>
      <View>
        <Text>{title}: {DESCRIP[title]} </Text>
      </View>
    </Collapsible>
    </View>
  )
};

export default BattleScreen;