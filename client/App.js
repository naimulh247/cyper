import React, { Component } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from './screens/Landing'
import Register from './screens/Authentication/Register'
import Login from './screens/Authentication/Login'
import Feed from './screens/User/Feed'
import DeviceStorage from './services/DeviceStorage'

const NavStack = createStackNavigator()

const NavStackScreen = () => {
  return(
  <NavStack.Navigator initialRouteName="Landing">
    <NavStack.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
    <NavStack.Screen name="Register" component={Register}/>
    <NavStack.Screen name="Login" component={Login}/>
  </NavStack.Navigator>
  )
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    }

    this.newJWT = this.newJWT.bind(this);
    this.delete = DeviceStorage.delete.bind(this);
    this.load = DeviceStorage.load.bind(this);
    this.load();
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render() {

    if(!this.state.jwt){
      return(
        <NavigationContainer>
        <NavStackScreen/>
      </NavigationContainer>
      )
      
    }
    else{

      return(
        <View>
          <Feed jwt={this.state.jwt} delete={this.delete}/>
        </View>
      )
    // return (
    //   <NavigationContainer>
    //     <NavStackScreen/>
    //   </NavigationContainer>
    // )
  }
}
}
export default App
