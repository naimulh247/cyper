import React, { Component } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import DeviceStorage from '../../services/DeviceStorage'
import axios from 'axios';


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:'',
            loading: false,
            jtw:''
        }
        this.Login = this.Login.bind(this)
        this.FailLogin = this.FailLogin.bind(this)
    }

    Login(){
        console.log("Login Button Pressed")
        const{email, password, jwt} = this.state
        console.log(email, password)
        this.setState({error:'', loading:true})


        const options = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            data: ({
                "email": email,
                "password": password
            }),
            url: `http://55.55.55.55:5000/signin`
        
        }

        axios(options)
        .then(res =>{

            if(res.data.jsonToken){
                const token = res.data.jsonToken
                console.log(res)
                DeviceStorage.saveKey(res.data.jsonToken)
                const dtoken = DeviceStorage.get()
                this.setState({jwt:'lol'})
                console.log("jsonToken is present")
                // this.props.newJWT(res.data.jsonToken)
            }
            else{
                console.log('err:',response)
                FailLogin()
            }

        }).catch(err =>{
            console.log('err:',err)
                this.FailLogin()
        })
    }

    FailLogin(){
        console.log("in fail function")
        this.setState({
            error: 'Login Failed',
            loading: false
        })
        // console.log(this.state.error)
        
    }

    render() {
        const { email, password, error, loading } = this.state;
        return (
            <View>
                <TextInput placeholder="email" onChangeText={(email) => this.setState({email})}  />
                <TextInput secureTextEntry={true} placeholder="password" onChangeText={(password) => this.setState({password})} />
                {/* <Button title="Login" onPress={() => this.Login()}  /> */}
                
                {!loading ?
                <Button title="Login" onPress={this.Login}/>
                :
                <Text>Loading</Text>
                }
                <Text> {error} </Text>

                
            </View>
        )
    }
}
