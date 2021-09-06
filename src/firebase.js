import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBVXzbHLK-IVp0ecwA8ajjDbCsranaSo0E",
    authDomain: "todoist-app-1571d.firebaseapp.com",
    databaseURL: "https://todoist-app-1571d-default-rtdb.firebaseio.com",
    projectId: "todoist-app-1571d",
    storageBucket: "todoist-app-1571d.appspot.com",
    messagingSenderId: "438332599202",
    appId: "1:438332599202:web:f0b9e221c2f7245d1c20fb"
});

export {firebaseConfig as firebase};