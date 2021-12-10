import firebase from 'firebase'
import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USERS_DATA_STATE_CHANGE} from '../constatsVariables/constants'
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
            // .where('text', '>=' , 'hello')
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                // go through all the docs/ posts
                let posts = snapshot.docs.map(doc => {
                    const postData = doc.data();
                    const docID = doc.id;
                    return {docID, ...postData}
                })
                console.log("getUserPosts: ", posts)
                dispatch({ type: USER_POSTS_STATE_CHANGE, posts})

            })
    })
}



// not used in app
export function fetchAllPosts(uid){
    return((dispatch, getState) => {
        const found = getState().userState.users.some(element => element.uid == uid);

        if(!found){
            firebase.firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    let user = snapshot.data()
                    user.uid = snapshot.id;
                    console.log("snapshot data from actions.js users : ", snapshot)
                    dispatch({ type: USERS_DATA_STATE_CHANGE, user })
                }
                else {
                    console.log('action.js: does not exist')
                }
            })
        }
    })
}

// not used in app
export function getUsersAllPosts(uid) {
    return ((dispatch, getState) => {
        firebase.firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            // order by time stamp
            // .where('text', '>=' , 'hello')
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {

                const uid = snapshot.query.EP.path.segments[1];
                console.log({snapshot, uid})

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
