import firebase from 'firebase'
import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE} from '../constatsVariables/constants'
require('firebase/firestore')

export function getUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log("snapshot data from actions.js: ", snapshot)
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log('action.js: does not exist')
                }
            })
    })
}
// get user posts
export function getUserPosts() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            // order by time stamp
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                // go through all the docs/ posts
                let posts = snapshot.docs.map(doc => {
                    const postData = doc.data();
                    const docID = doc.id;
                    return {docID, ...postData}
                })
                console.log(posts)
                dispatch({ type: USER_POSTS_STATE_CHANGE, posts})

            })
    })
}



