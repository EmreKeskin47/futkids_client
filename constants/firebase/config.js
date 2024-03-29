import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAt-aj0eOc-QZrIX379SgzsrXe_yr6a_hY",
    authDomain: "futkids-client.firebaseapp.com",
    databaseURL: "https://futkids-client-default-rtdb.firebaseio.com",
    projectId: "futkids-client",
    storageBucket: "futkids-client.appspot.com",
    messagingSenderId: "841348983585",
    appId: "1:841348983585:web:3d58ece7eff5c1a66dec60",
    measurementId: "G-9BH05GSS81",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
