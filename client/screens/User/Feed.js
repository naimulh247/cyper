// import axios from 'axios';
// import React, { Component } from 'react'
// import {View, Text, TextInput, Button} from 'react-native'

// export default class Feed extends Component {
//     constructor(props){
//     super(props);
//     this.state={
//         posts:{}
//     }
//     this.GetPosts= this.GetPosts.bind(this)
//     }
//     GetPosts(){

//        fetch('http://55.55.55.55:5000/posts').then(res=>res)
//         .then(result => {
//             console.log(result)
//             console.log("setting post data")
//             this.setState({posts:result})
//         })
//         // console.log("post loads:",this.state.posts.data['allPosts'])


//     }
//     componentDidMount(){
//         this.GetPosts()
//         // const {post} = this.s
//     }

//     render() {
//         return (
//             <View>

//                 <Text>Home</Text>
//                 <Button title="logout" onPress={()=>this.props.delete()} />   
//             </View>
//         )
//     }
// }

// this works 
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { View, Text } from 'react-native';

const Feed = () => {

    const [data, setData] = useState([])
    
    // function getPosts(){
        
    //     // axios.get('http://55.55.55.55:5000/posts').then(response => response.json().then(data =>({
    //     //     setData(data)})
    //     // }))

    //     const response = axios.get('http://55.55.55.55:5000/posts')
        
    //     response.then(response => JSON.stringify(response)
    //     .then(data => setData(data))
        // )
        // const ans  =  res;
        // console.log(res);
        // setData(res)
        //  let test = axios.get(`http://55.55.55.55:5000/posts`).then(function (response) {
        //     // handle success
        //     // console.log(response);

        //     setData(response.data.allPosts);
        //     // console.log(data);
        //   })
        //   .catch(function (error) {
        //     // handle error
        //     alert(error.message);
        //   })
        //   console.log(test);
    // }
    // useEffect(() => {
    //     getPosts()
    //     // console.log(data)
    // }, [])

    useEffect(()=>{
        const [state, setstate] = useState([])
        fetch('http://55.55.55.55:5000/posts',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then((res) => res.json())
        .then((data) => setstate(data))
        
        
        
        // .then(res=>res.json())
        // .then(result=>{
        //     console.log(result.allPosts)
        //     setData({posts:result})
            console.log(data.length)
        // })

        // console.log(data)
     },[])


    return (


        <View>
            {
                // data.allPosts.map(item=>{
                //     return(
                //         <Text>Yolo</Text>
                //     )
                // })
            }
            {/* <Text>Yolo</Text> */}
        </View>
    )
}


export default Feed
// import React, { Component, useEffect } from 'react'
// import {View, Text, TextInput, Button} from 'react-native'
// import axios from 'axios';
// import { FlatList } from 'react-native-gesture-handler';

// export default class Feed extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             posts:[]
//         }

//         this.getPosts = this.getPosts.bind(this)
//     }

//     getPosts(){
//         const response = axios.get(`http://55.55.55.55:5000/posts`)
//         .then(res => console.log(res))
//         // .then(posts => this.setState({posts}))

//         // console.log(JSON.stringify(this.state.posts))
//         // this.setState(posts:)
//         this.setState({posts:response})
//         console.log(this.state.posts.data)
//     }

// componentDidMount(){
//     this.getPosts()
// }
    


//     render() {
//         return (
//             <View>
//                 <FlatList
                
//                 />
                
//             </View>
//         )
//     }
// }
