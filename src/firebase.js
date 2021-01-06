import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvXa1NxeXJ6LvBKvAv9dAIwBQkxg69PLE",
    authDomain: "clone-ca502.firebaseapp.com",
    databaseURL: "https://clone-ca502.firebaseio.com",
    projectId: "clone-ca502",
    storageBucket: "clone-ca502.appspot.com",
    messagingSenderId: "126952748123",
    appId: "1:126952748123:web:7ea9d6e481c2f42e473b7e"
});

const auth = firebase.auth();

export { auth };