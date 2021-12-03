import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app';
import {View, Text} from 'react-native'

// custom screens import
import Landing from './components/authentication/Landing'
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Feed from './components/Feed'

// Redux imports
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Reducer from './redux/reducer/reducer'
import thunk from 'redux-thunk';
const store = createStore(Reducer, applyMiddleware(thunk))

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAth4CULH_ZUtDkLl1tTNhTFfUiajnBeq0",
  authDomain: "cyper-2d1bd.firebaseapp.com",
  projectId: "cyper-2d1bd",
  storageBucket: "cyper-2d1bd.appspot.com",
  messagingSenderId: "660515654905",
  appId: "1:660515654905:web:2625431a5a740184b62628",
  measurementId: "G-YW1XYCHLL1"
};

// make sure only 1 instance of firebase is running
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const NavigationStack = createStackNavigator();


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded: false
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true
        })
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    }
    )    
  }

  render() {
    const {loaded, loggedIn} = this.state

    if(!loaded){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
          <NavigationStack.Navigator initialRouteName="Landing" >
            <NavigationStack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
            <NavigationStack.Screen name="Register" component={Register} />
            <NavigationStack.Screen name="Login" component={Login}/>
          </NavigationStack.Navigator>
        </NavigationContainer>
      )
    }

    return(
      <Provider store={store}>
      <Feed/>
      </Provider>
        
    )
    
  }
}
