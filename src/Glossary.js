
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , Modal, SectionList, Alert} from 'react-native';
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

const DESCRIP = {}
DESCRIP["Wood"]="Used for buildings, archers, and chopsticks"
DESCRIP["Metal"]="Used for swords person and reinforced banana"
DESCRIP["Stone"]="Used for repairing your keep and seige units"
DESCRIP["Food"]="Used to feed citizens and units"

const DATA = [
  {
    title: "Resources",
    data: ["Wood", "Stone", "Metal", "Food"]
  },
  {
    title: "Combat Units",
    data: ["Archer", "Swordsperson", "Horseperson", "Siege"]
  },
  {
    title: "Non combat units",
    data: ["Trader", "Citizen"]
  },
  {
    title: "Buildings",
    data: ["Granary", "Trading Post", "Libary", "Keep"]
  }
];

const GlossaryScreen = ({ navigation }) => {

  return(
      <SafeAreaView style={styles.container}>
        <>
      <Text>Resource Screen</Text>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} navigation={navigation} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
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

export default GlossaryScreen;