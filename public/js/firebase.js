let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyC8VcvVaPVyH-rZ33akT1PBmpNNClZwL-M",
    authDomain: "blogging-website-b2cf4.firebaseapp.com",
    projectId: "blogging-website-b2cf4",
    storageBucket: "blogging-website-b2cf4.appspot.com",
    messagingSenderId: "231758418404",
    appId: "1:231758418404:web:4f793153ad1043e2b537f1"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();