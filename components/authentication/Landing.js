import React from 'react'
import { View, Text, Button } from 'react-native'


export default function Landing( { navigation } ) {
    return (
        <View style={{top: '50vh'}}>
            <Button title="Register" onPress={() => navigation.navigate("Register")}/>
            <Button title="Login" onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}
