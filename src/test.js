import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('U1O1Gle43EstTJ1kbAaD').collection('cartItems').doc('YTA78xj2LmRD2x6WhwEL')
firestore.doc('/users/U1O1Gle43EstTJ1kbAaD/cartItems/YTA78xj2LmRD2x6WhwEL');
firestore.collection('/users/U1O1Gle43EstTJ1kbAaD/cartItems');
