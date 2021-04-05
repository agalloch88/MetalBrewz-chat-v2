import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBigU38kxa6QWZcKuT1PtLb-wn16GKoEBI",
    authDomain: "metalbrewz-chat-v2.firebaseapp.com",
    projectId: "metalbrewz-chat-v2",
    storageBucket: "metalbrewz-chat-v2.appspot.com",
    messagingSenderId: "1069970798055",
    appId: "1:1069970798055:web:efc91113342a7ad4823942",
    measurementId: "G-H4VN7H60HT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;