import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput , TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@save_name'

const HomeScreen = ({ navigation }) => {
    const onChangeText = userName => setName(userName)

    const onSubmitEditing = () => {
    if (!name) return
    saveData(name)
    // setAge('')
    }

    const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
        alert('Storage cleared')
    } catch (e) {
        alert('Failed to clear')
    }
    }
    const saveData = async() => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, name)
        alert('Data successfully saved')
    } catch (e) {
        alert('Failed to save name')
    }
    }

    const readData = async() => {
    try {
        const userName = await AsyncStorage.getItem(STORAGE_KEY)
        if (userName !== null) {
        setAge(userName)
        }
    } catch (e) {
        alert('Failed to fetch the name from storage')
    }
    }

    const [name, setName] = useState('')
    useEffect(() => {
        readData()
    },[])
    return(
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.panel}>Your name is {name}</Text>
        <Text>Home Screen</Text>
            <Text>Enter your name here:</Text>
            <TextInput
            style={styles.input}
            value={name}
            placeholder="Name"
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            />
            <TouchableOpacity onPress={clearStorage} style={styles.button}>
            <Text style={styles.buttonText}>Clear Storage</Text>
            </TouchableOpacity>
            <Button title="Go to glossary page"
            onPress={() => {
                navigation.navigate('Glossary')
            }
            }
            />
            <Button title="Go to resources page"
            onPress={() => {
                navigation.navigate('Resources')
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
    fontSize: 22,
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