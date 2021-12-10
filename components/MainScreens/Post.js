import {View, TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import firebase from 'firebase/app';


export default function Post(props) {

    const [text, setText] = useState("")

    const upload = () =>{

        firebase.firestore()
        .collection('posts')
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .add({
            text,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
            props.navigation.popToTop()
        }))
    }
    return (
        <View>
            <TextInput placeholder="Say something :) "
            onChangeText={(text) => setText(text)}
            />

            <Button title="Send" onPress={() => upload()} />
        </View>
    )
}

