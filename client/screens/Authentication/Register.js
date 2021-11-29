import React, { Component } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import DeviceStorage from '../../services/DeviceStorage'
import axios from 'axios';



export class Register extends Component {
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:"",
            err:''
        }
        this.Register = this.Register.bind(this)

    }
    Register(){
        console.log("Registering Pressed")
        const {email , password} = this.state;
        console.log(email, password)
        
        
        /// first trrial


        const options = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            data: ({
                "email": email,
                "password": password
            }),
            url: `http://55.55.55.55:5000/signup`
        }

        axios(options)
        .then(response =>{
            console.log(response)
        })
        .catch(err =>{
            console.log('axios error:',err)
        })


        
    }

    render() {
        return (
            <View>
                {/* <Text>This is the registration page</Text> */}
                <TextInput placeholder="email" onChangeText={(email) => this.setState({email})}/>
                <TextInput secureTextEntry={true} placeholder="password" onChangeText={(password) => this.setState({password})}/>
                <Button title="Register" onPress={() => this.Register()} />
            </View>
        )
    }
}

export default Register
