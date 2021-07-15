import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDlyq7gPNem_wujIuN-Zk4NLMkCUAl5yg",
    authDomain: "gaesi-pan.firebaseapp.com",
    projectId: "gaesi-pan",
    storageBucket: "gaesi-pan.appspot.com",
    messagingSenderId: "306810717340",
    appId: "1:306810717340:web:e6cf8181948b4e5dfd9959",
    measurementId: "G-W9CFP89GNZ"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};