import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDARMYCo3LcqXGtkohV2csb2EwlyUhThsg",
    authDomain: "crown-db-cebf4.firebaseapp.com",
    projectId: "crown-db-cebf4",
    storageBucket: "crown-db-cebf4.appspot.com",
    messagingSenderId: "823677121743",
    appId: "1:823677121743:web:a5eda6f1d04e96b33fb3ba",
    measurementId: "G-985VCXEDEW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
