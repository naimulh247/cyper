import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import firebase from 'firebase'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

        this.Register = this.Register.bind(this)
    }

    Register(){
        const {email, password} = this.state

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                email,
                // maybe add the uid...
            })
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

                <Button title="Register" onPress={() => this.Register()}  />
            </View>
        )
    }
}

