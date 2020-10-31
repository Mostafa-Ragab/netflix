import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
	apiKey: "AIzaSyA-gtuCv5wBpyql8MZ0JxJc7Q-5omapULQ",
	authDomain: "netflix-eed53.firebaseapp.com",
	databaseURL: "https://netflix-eed53.firebaseio.com",
	projectId: "netflix-eed53",
	storageBucket: "netflix-eed53.appspot.com",
	messagingSenderId: "267743580964",
	appId: "1:267743580964:web:8a1357bf10c452ba5c19b1",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
