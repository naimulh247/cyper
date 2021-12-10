import React, {useState} from 'react'
import firebase from 'firebase/app';
import {View, Text, Button, FlatList, TextInput} from 'react-native'
import { connect } from 'react-redux'
require('firebase/firestore')
export default function Search () {
    const [posts, setPosts] = useState([])

    const fetchPost = (search) => {
        var postsData = []
        var num = 0
        // search for user posts given the search term
        // firebase.firestore().collection("posts").where('text', '>=', search)
        // firebase.firestore().collectionGroup("posts").where('text', '>=', search)
        // .get()
        // .then((response) => {
        //     console.log("response for search: ", response)
        //     let posts  = response.docs.map(doc => {
        //         const posts = doc.data()
        //         const id = doc.docID;
        //         return{id, ...posts}
        //     });
        //     setPosts(posts)
        // })


        // firebase.firestore()
        //     .collection("posts")
        //     // .doc(collection('users').doc(user.uid))
        //     .doc("jKTkQtIKM1Rpt0sCbvkh8mb8FQl2")
        //     .collection("userPosts")
        //     // // order by time stamp
        //     .get()
        //     .then((snapshot) => {
        //         // go through all the docs/ posts
        //         // let posts = snapshot.docs.map(doc => {
        //         //     const postData = doc.data();
        //         //     const docID = doc.docId;
        //         //     return {docID, ...postData}
        //         // })
        //         // console.log(posts)

        //         console.log(snapshot)
        //     })

        firebase.firestore().collection("users").get().then((snapshot) => {
            console.log(snapshot)
            snapshot.forEach((docs) => 
            {
                firebase.firestore()
                .collection("posts")
                .doc(docs.id)
                .collection("userPosts")
                // .where('text', '>=', 'hello')
                .get()
                .then((response) => {
                    console.log("response: ", response)
                    const posts  = response.docs.map(doc => {
                        const postData =  doc.data();
                        const docID = doc.id;

                        return {docID, postData}
                    })
                    console.log(posts)
                    postsData.push({postsData})
                    // postsData.join
                    num++
                    console.log(postsData.length)
                    for(var i = 0; i< postsData.length; i++){
                        console.log(i)
                        for(var j = 0; j < postsData[i]; j++){
                            console.log(j)
                        }
                    }
                }
                )
            
                console.log(docs.id)
                // console.log(posts)
            }

        )
        })

        // postsData.find()
        console.log(postsData)
        // postsData.find(search)
        // var matchPost = postsData[0].map((item))
        // console.log(matchPost)
    //  for(var i = 0; i < postsData.length; i++){
    //      console.log(i)
        //  console.log()
    //  }

        // firebase.firestore()
        // .collection("posts")
        // .onSnapshot((snapshot) => {
        //     console.log(snapshot)
        //     const postData = []
        //     snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
        //     console.log(postData)
        // })

        // const data =  await firebase.firestore()
        // .collection("posts").get()

        // console.log(data.docs)


        // firebase.firestore().collection('users').doc(user.uid).collection('posts').get()
    }
    
    return (
        <View>
            <Text>Search page</Text>
            <TextInput placeholder="search for posts" onChange={(search)=> fetchPost(search)}  />
            <FlatList
                numColumns={1}
                horizontal={false}
                data={posts}
                renderItem={({item}) => (
                    <Text> {item.text} </Text>
                )}
            />
        </View>
    )
}

