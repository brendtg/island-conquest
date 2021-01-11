
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , Modal, SectionList} from 'react-native';
import { Picker } from '@react-native-community/picker';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Collapsible from 'react-native-collapsible';

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  item: {
    // backgroundColor: "#A9C2FF",
    padding: 10,
    marginVertical: 8
  },
  middle: {
    padding: 20,
    marginVertical: 28,
    fontSize: 32,
    // backgroundColor: "#A9C2FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    // backgroundColor: "#A9C2FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24
  }
});

const BattleScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("sword");
  const [selectedLevel, setSelectedLevel] = useState("sword");
  return(
    <>
      <SafeAreaView style={styles.title}>
      <Text style={styles.header}>Battle Calculator</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.picker}>
          <Text style={styles.header}>Your unit</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="sword fighter" value="sword" />
        <Picker.Item label="archer" value="archer" />
        <Picker.Item label="horse fighter" value="horse" />
        <Picker.Item label="siege" value="siege" />
      </Picker>
      </View>
        <View style={styles.picker}>
          <Text style={styles.header}>Off.</Text>
      <Picker
        selectedValue={selectedLevel}
        style={{ height: 50, width: 50  }}
        onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      </View>
        <View style={styles.picker}>
          <Text style={styles.header}>Def.</Text>
      <Picker
        selectedValue={selectedLevel}
        style={{ height: 50, width: 50  }}
        onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      </View>
  </SafeAreaView>
  <SafeAreaView style={styles.middle}>
    <Text style = {styles.header}>VS</Text>
  </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.picker}>
          <Text style={styles.header}>Your unit</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="sword fighter" value="sword" />
        <Picker.Item label="archer" value="archer" />
        <Picker.Item label="horse fighter" value="horse" />
        <Picker.Item label="siege" value="siege" />
      </Picker>
      </View>
        <View style={styles.picker}>
          <Text style={styles.header}>Off.</Text>
      <Picker
        selectedValue={selectedLevel}
        style={{ height: 50, width: 50  }}
        onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      </View>
        <View style={styles.picker}>
          <Text style={styles.header}>Def.</Text>
      <Picker
        selectedValue={selectedLevel}
        style={{ height: 50, width: 50  }}
        onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      </View>
  </SafeAreaView>
      </>
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