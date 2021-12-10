import React, {useState} from 'react'
import firebase from 'firebase/app';
import {View, Text, Button, FlatList, TextInput} from 'react-native'
import { connect } from 'react-redux'
require('firebase/firestore')
export default function Search () {
    const [posts, setPosts] = useState([])

    const fetchPost = (search) => {
        // search for user posts given the search term
        firebase.firestore().collection("posts").collection("userPosts").where('text', '>=', search)
        .get()
        .then((response) => {
            console.log(response)
            let posts  = response.docs.map(doc => {
                const posts = doc.data()
                const id = doc.id;
                return{id, ...posts}
            });
            setPosts(posts)
        })
    }
    
    return (
        <View>
            <TextInput placeholder="search for posts" />
            <Text>Search page</Text>
        </View>
    )
}

