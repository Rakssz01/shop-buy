import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAEog50AAHhu9R801zJri5JJoFTI6PFb7A",
    authDomain: "shop-db-86e9c.firebaseapp.com",
    databaseURL: "https://shop-db-86e9c.firebaseio.com",
    projectId: "shop-db-86e9c",
    storageBucket: "shop-db-86e9c.appspot.com",
    messagingSenderId: "363377663001",
    appId: "1:363377663001:web:56702aefaf07c9315b9e88",
    measurementId: "G-TELVTHC6JR"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

  

export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;