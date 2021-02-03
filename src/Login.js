import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebaseSDK from '../config/firebaseSDK';
import PasswordInputText from 'react-native-hide-show-password-input';


const Login = (props) => {
	const navigationOptions = {
		title: 'RN + Firebase Chat App'
    };
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

	const onPressLogin = () => {
		const user = {
			name: name,
			email: email,
			password: password
		};

		const response = firebaseSDK.login(
			user,
			loginSuccess,
			loginFailed
		);
	};

	loginSuccess = () => {
		console.log('login successful, navigate to chat.');
		props.navigation.navigate('Home');
	};

	loginFailed = () => {
		alert('Login failure. Please tried again.');
	};

	onChangeTextEmail = (email) => setEmail(email);
	onChangeTextPassword = (password) => setPassword(password);

    return (
        <View>
            <Text style={styles.title}>Email:</Text>
            <TextInput
                style={styles.nameInput}
                placeHolder="test3@gmail.com"
                onChangeText={onChangeTextEmail}
                value={email}
            />
            <PasswordInputText
                style={styles.title}
                onChangeText={onChangeTextPassword}
                value={password}
            />
            <Button
                title="Login"
                style={styles.buttonText}
                onPress={onPressLogin}
            />

            <Button
                title="Signup"
                style={styles.buttonText}
                onPress={() => props.navigation.navigate('Signup')}
            />
        </View>
		);
}

const styles = StyleSheet.create({
	title: {
		marginTop: 16,
		marginLeft: 16,
		fontSize: 16
	},
	nameInput: {
		height: 16 * 2,
		margin: 16,
		paddingHorizontal: 16,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: 16
	},
	buttonText: {
		marginLeft: 16,
		fontSize: 42
	}
});

export default Login;