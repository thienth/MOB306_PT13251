import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAabdUQr1CPiz5WsxdM3IwNwy_SJRbCHXA",
    authDomain: "pt13251-b9727.firebaseapp.com",
    databaseURL: "https://pt13251-b9727.firebaseio.com",
    projectId: "pt13251-b9727",
    storageBucket: "pt13251-b9727.appspot.com",
    messagingSenderId: "168582052372"
};

export default firebaseConf = firebase.initializeApp(config); 