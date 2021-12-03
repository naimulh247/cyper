import React from 'react'
import {View, Text, FlatList} from 'react-native'

import {connect} from 'react-redux'

function Profile(props) {
    const {currentUser, posts} = props;
    console.log({currentUser, posts})


    return (
        <View>
            <Text>{currentUser.email}</Text>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    post: store.userState.posts
})

export default connect(mapStateToProps, null)(Profile)
