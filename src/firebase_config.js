import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBN5tJXjKiKjwpWY636t_64n-VeqSitvCw",
    authDomain: "notesapp-de108.firebaseapp.com",
    projectId: "notesapp-de108",
    storageBucket: "notesapp-de108.appspot.com",
    messagingSenderId: "247608396951",
    appId: "1:247608396951:web:fbfd13c03475875ed9edd2"
  };
  const app=initializeApp(firebaseConfig);
 export const db=getFirestore(app);
  