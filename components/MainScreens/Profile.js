import React, {useState} from 'react'
import {View, Text, FlatList, Button, StatusBar, ScrollView} from 'react-native'
import firebase from 'firebase/app';
import {connect} from 'react-redux'

function Profile(props) {
    const {currentUser, posts} = props;
    const [user, setUser] = useState(null);
    console.log({currentUser, posts})

    const Logout = () => {
        firebase.auth().signOut();
    }

    // if (firebase.auth().currentUser.uid) {
    //     setUser(currentUser)
    // }
    // if (user === null) {
    //     return <View />
    // }
    

    return (
        <ScrollView>
            <Text style={{fontSize: 30, borderBottomColor:'grey', padding: 20}}>Profile</Text>
            <View style={{flexDirection:'row', maxHeight: 30}}>
            <Text style={{fontSize:  15, padding: 20}}>Logged in as: {currentUser.email}</Text>
            <Button title="Logout" color="red" onPress={() => Logout}  />
            </View>
            <View> 
                <Text style={{fontSize:  15, padding: 20}}>All Posts:</Text>

                <FlatList 
                    inverted={true}
                    numColumns={0}
                    horizontal={false}
                    data={posts}
                    contentContainerStyle={{
                        padding: 20,
                        paddingTop: StatusBar.currentHeight || 42
                    }}
                    renderItem={({item}) => (
                        <Text style={{fontSize: '15px' , padding: 20, backgroundColor: 'white', borderRadius: 12, margin: 5}}>{item.text}</Text>
                    )}
                
                />

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})
// null since there is no action that is needed
export default connect(mapStateToProps, null)(Profile)
