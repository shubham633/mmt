import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import fire from '../configuration/Fire';
import ChooseImage from '../components/ChooseImage';

const Drawer = () =>{
    const[user, setUser]=useState('');
    const profile =()=>{        
         setUser(fire.auth().currentUser.email);
         console.log(user);       
    }
    return(
        <View>
        <View style={styles.chooseImage}>
        <ChooseImage/>
        </View>
        <TouchableOpacity onPress={profile}>
        <View style={styles.profile}>
        <Image source={require('../assets/profile.png')}
        style={styles.image}/>
        <Text>View Id</Text> 
        </View>
        </TouchableOpacity>
        <Text>{user}</Text>
        <Icon.Button
            name="settings-outline" size={30} color='black'
            backgroundColor="white"
            onPress={()=>{console.log('setting')}}>
            Setting
        </Icon.Button>
        </View>
    );
}

const styles = StyleSheet.create({
    chooseImage:{
        alignItems:'center',
        marginTop:10
    },
    profile:{
        flexDirection:'row',
        margin:10
    },
    image:{
        height:30, 
        width:30, 
        marginRight:10
    }
}); 

export default Drawer;