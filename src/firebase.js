import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyASzhrBYk3FajxG1HQo1qB13W4Lrpm5giU",
  	authDomain: "todo-app-84f7e.firebaseapp.com",
  	databaseURL: "https://todo-app-84f7e.firebaseio.com",
  	projectId: "todo-app-84f7e",
  	storageBucket: "todo-app-84f7e.appspot.com",
  	messagingSenderId: "209289648744",
  	appId: "1:209289648744:web:e3b30e4474a791c36379dd",
  	measurementId: "G-5B7N0JHCW7"
});

const db = firebaseApp.firestore();

export default db ;
