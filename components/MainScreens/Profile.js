import React from 'react'
import {View, Text, FlatList, Button} from 'react-native'

import {connect} from 'react-redux'

function Profile(props) {
    const {currentUser, posts} = props;

    console.log({currentUser, posts})


    return (
        <View>
            <Text>Logged in from: {currentUser.email}</Text>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})
// null since there is no action that is needed
export default connect(mapStateToProps, null)(Profile)
