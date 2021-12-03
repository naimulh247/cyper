import React, { Component } from 'react'
import { View, Text } from 'react-native'

// redux stuff
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../redux/actions/actions'

// navigation and tabs imports
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feed from './MainScreens/Feed'
import Post from './MainScreens/Post'

const NewPost = () => {
    return (null)
}
const Tab = createMaterialBottomTabNavigator();

export class Home extends Component {
    componentDidMount() {
        this.props.getUser();
    }
    render() {
    
        
        
        return (
            // <View>
            //     <Text>{currentUser.email} is logged in</Text>
            // </View>

            <Tab.Navigator initialRouteName="Feed" labeled={false}>
                <Tab.Screen name="Feed" component={Feed} 
                
                    options={{
                        tabBarIcon:({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Post Something" component={NewPost}
                    listeners={({navigation})=>({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Post")
                        }
                    })}
                    options={{
                        tabBarIcon:({color, size}) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        )
                    }}
                />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({getUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);
