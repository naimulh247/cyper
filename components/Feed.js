import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../redux/actions/actions'

export class Main extends Component {
    componentDidMount() {
        this.props.getUser();
    }
    render() {
        const { currentUser } = this.props;

        console.log()
        if(currentUser==undefined){
            return(
                <View></View>
            )
        }
        
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>{currentUser.email} is logged in</Text>
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({getUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
