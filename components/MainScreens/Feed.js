import React, {useState, useEffect} from 'react'
import firebase from 'firebase/app';
import {View, Text, Button, FlatList, StatusBar, SafeAreaView, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import { connect } from 'react-redux'




export default function Feed() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresting, setRefresting] = useState(false)
    // const [refreshInterval, setRefreshInterval] = useState(0);
    const fetchPost = async () => {
    let postArry = []

        firebase.firestore().collection("users").get().then((snapshot) =>{
            console.log(snapshot)
            snapshot.forEach((docs) => {
                console.log(docs.id)
                const user = docs.id
                // setUsers(users => [...users, users])
                // setUsers(...users, users);
                // console.log(users.length)
                firebase.firestore()
                .collection("posts")
                .doc(user)
                .collection("userPosts")
                .orderBy("creation", "asc")
                .get()
                .then((response) => {
                    console.log("response: ", response)
                        postArry.push([...response.docs.map(doc => {
                        // console.log(doc.data())
                        // console.log(doc.id)
                        const postData = doc.data();
                        const docID = doc.id
                        return {docID, ...postData}
                    })])
                    console.log(postArry.flat())
                    setPosts([postArry.flat()])
                    setLoading(false)

                })
            })
            // setUsers(snapshot.doc)
        })
// 
        // postArry2.push([...postArry.flat()])
        
        
        // setPost(postArry.flat())
        console.log(postArry)
        return postArry.flat()
        // console.log(post.length)
        


    }

    useEffect(() => {

        fetchPost()

        // setPost(post)
        console.log(posts)


    }, [])
    // useEffect(() => {
    //     if (refreshInterval && refreshInterval > 0) {
    //       const interval = setInterval(fetchPost, refreshInterval);
    //       return () => clearInterval(interval);
    //     }
    //   }, [refreshInterval]);
    // useEffect(() => {
    //     let posts = []

    //     firebase.auth().
        
        
    // }, [])
    
    const renderItem = ({ item }) => (
        <Text>{item.text}</Text>
      );
    return (


        <ScrollView  
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>

            <View style={{backgroundColor: '#00b2ca'}}>
            {loading?
            <Text>Loading....  </Text>
            : 


                <FlatList 
                inverted={true}
                    numColumns={0}
                    horizontal={false}
                    data={posts[0]}
                    keyExtractor={item => item.docID}
                    contentContainerStyle={{
                        padding: 20,
                        paddingTop: StatusBar.currentHeight || 42
                    }}
                    renderItem={({item}) => (
                        <Text style={{fontSize: '22px' , padding: 20, backgroundColor: 'white', borderRadius: 12, margin: 5}}>{item.text}</Text>
                    )}
                    // refreshControl={
                    //     <RefreshControl refreshing={loading} onRefresh={fetchPost} />
                    //   }

                    // refreshing={refreshing}
                    // onRefresh={fetchPost()}
                />
                
                // </ScrollView >

        }
        </View>
        </ScrollView >
       
    )
}

