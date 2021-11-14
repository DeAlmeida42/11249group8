
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';


const firebaseConfig = {

  apiKey: "AIzaSyBQDIwubgTN4TSR6QoB949u9w2iux2Bmgc",

  authDomain: "sign-in-c5116.firebaseapp.com",

  projectId: "sign-in-c5116",

  storageBucket: "sign-in-c5116.appspot.com",

  messagingSenderId: "750748293637",

  appId: "1:750748293637:web:56d6d1bdcb031a75f69a6c"

};


let app
if(firebase.apps.length === 0)
    app = firebase.initializeApp(firebaseConfig);
else
    app = firebase.app();

const auth = firebase.auth();
export {auth};