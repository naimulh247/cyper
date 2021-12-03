import firebase from 'firebase'
import {USER_STATE_CHANGE} from '../constatsVariables/constants'
require('firebase/firestore')

export function getUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    // console.log(snapshot.data())
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log('action.js: does not exist')
                }
            })
    })
}

