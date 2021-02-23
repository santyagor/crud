import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD9iF9g2V9sisK4q-IWlIGvFxsgJl9QlUQ",
    authDomain: "crud-1ca17.firebaseapp.com",
    projectId: "crud-1ca17",
    storageBucket: "crud-1ca17.appspot.com",
    messagingSenderId: "970893141472",
    appId: "1:970893141472:web:7ef59fc131f03cadd8f785"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)