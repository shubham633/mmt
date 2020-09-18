import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import fire from '../../configuration/Fire';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validation = (error) => {
        const emailRegister = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        try {
            if (email == '' || password == '') {
                Alert.alert('Please fill the details')
            }
            else if (emailRegister.test(email) !== true) {
                alert('Please enter valid email address!!')
            }
            else {
                error.preventDefault();
                fire.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        console.log(user)
                    }).catch((err) => {
                        console.log(err);
                    })
                Alert.alert("You are Sucessfully Registered!!!!")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                placeholder='Enter Email'
                onChangeText={email => setEmail(email)}
                style={styles.textField}
            />
            <TextInput
                value={password}
                placeholder='Enter Password'
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                style={styles.textField}
            />
            <TouchableOpacity style={styles.buttton} onPress={validation}>
                <Text style={styles.text}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pressBtn} onPress={() => {
                Navigation.pop(props.componentId, {
                    component: {
                        name: 'Signin',
                    }
                })
            }
            }>
                <Text style={styles.text}>Already hava an account? LogIn</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(100,0,0)',
    },
    textField: {
        width: '80%',
        backgroundColor: 'white',
        padding: 14,
        marginBottom: 15,
        borderRadius: 30,
    },
    buttton: {
        backgroundColor: 'rgb(150,150,150)',
        width: '80%',
        borderRadius: 10,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        height: 55,
    },
    pressBtn: {
        width: "80%",
        backgroundColor: 'rgb(150,150,150)',
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default Signup;