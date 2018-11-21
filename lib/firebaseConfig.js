import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDZKNoXkoo8x9F13B38KoClK1Wa4HSzg2o",
    authDomain: "mob306-322a3.firebaseapp.com",
    databaseURL: "https://mob306-322a3.firebaseio.com",
    projectId: "mob306-322a3",
    storageBucket: "mob306-322a3.appspot.com",
    messagingSenderId: "600164487841"
};

export default firebaseConf = firebase.initializeApp(config); 