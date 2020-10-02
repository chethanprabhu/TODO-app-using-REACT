import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-nOi28aIYqZTRzeM0V6gDdKFC0Rovtis",
    authDomain: "todo-app-71c6f.firebaseapp.com",
    databaseURL: "https://todo-app-71c6f.firebaseio.com",
    projectId: "todo-app-71c6f",
    storageBucket: "todo-app-71c6f.appspot.com",
    messagingSenderId: "413563734254",
    appId: "1:413563734254:web:2560c5edbdf044a8decbff",
    measurementId: "G-CBW05HSHBL"
})

const db = firebaseApp.firestore();

export default db;