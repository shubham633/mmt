import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { BottomTab, DrawerNavigation, stackNavigation } from '../../navigation/Nav';
import fire from '../../configuration/Fire';

const Signin = (props) => {
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
 
  const validation = async () => {
    const emailRegister = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try {
      if (useremail == '' || userpassword == '')
      {
        alert('Please fill the details')
      }
      else if (emailRegister.test(useremail) !== true)
             {
                alert('Please enter valid email address!!')
            }
      else {
        let response = await fire.auth().signInWithEmailAndPassword(useremail, userpassword)
        let user = fire.auth().currentUser.uid;
        if (response && response.user) {
          Alert.alert("Successfully Login.....!!!!")
          if (user) {
            console.log(user);
            BottomTab();
          }
        }
        else {
          Alert.alert("Your Email or Password is incorrect.....!!!!")
        }
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={useremail}
        placeholder='Enter Email'
        onChangeText={useremail => setUserEmail(useremail)}
        style={styles.textField}
      />
      <TextInput
        value={userpassword}
        placeholder='Enter Password'
        secureTextEntry={true}
        onChangeText={userpassword => setUserPassword(userpassword)}
        style={styles.textField}
      />
      <TouchableOpacity style={styles.buttton} onPress={validation}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pressBtn}
        onPress={() => { stackNavigation() }}>
        <Text style={styles.text}>Don't have an account?  Register</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => { BottomTab() }}>
        <Text>Skip Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => { DrawerNavigation() }}>
        <Text>Drawer</Text>
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
    backgroundColor: "white",
    padding: 14,
    marginBottom: 20,
    borderRadius: 30,
  },
  pressBtn: {
    backgroundColor: 'rgb(150,150,150)',
    width: '80%',
    borderRadius: 10,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 55,
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
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Signin;