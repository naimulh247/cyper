import React, { Component } from 'react'
import {View, Button, TextInput} from 'react-native'


export default class Register extends Component {

    constructor(props){
        super(props)

        this.state={
            email: '',
            password: ''
        }

        this.Register = this.Register.bind(this)
    }

    Register(){

    }

    render() {
        return (
            <View>
                <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})}/>
                {/* dont show passowrd use secureTextEntry */}
                <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})}/>

                <Button 
                    onPress={() => this.Register()}
                    title="Register"
                />
            </View>
        )
    }
}
