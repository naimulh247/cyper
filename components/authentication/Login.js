import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import firebase from 'firebase'

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

        this.SignIn = this.SignIn.bind(this)
    }

    SignIn(){
        const {email, password} = this.state

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            console.log(response);
        })
        .catch((err) =>{
            console.log(err);
        })


    }
    render() {
        return (
            <View>
                <TextInput placeholder="email" onChangeText={(email)=> this.setState({email})} />
                <TextInput secureTextEntry={true} placeholder="password" onChangeText={(password)=> this.setState({password})} />

                <Button title="Login" onPress={() => this.SignIn()}  />
            </View>
        )
    }
}

