import React, {useEffect} from 'react'
import {View, Text, FlatList, Button} from 'react-native'

import {connect} from 'react-redux'

function Profile(props) {
    const {currentUser, posts} = props;

    console.log({currentUser, posts})

    
    

    return (
        <View>
            <Text>Logged in from: {currentUser.email}</Text>
            <View>
                <FlatList 
                    numColumns={0}
                    horizontal={false}
                    data={posts}
                    renderItem={({item}) => (
                        <Text>{item.text}</Text>
                    )}
                
                />
            </View>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})
// null since there is no action that is needed
export default connect(mapStateToProps, null)(Profile)
