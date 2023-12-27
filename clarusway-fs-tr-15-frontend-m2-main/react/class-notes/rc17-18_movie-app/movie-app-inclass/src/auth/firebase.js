import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBgnrPdv2fiuCjwLFfkQ2U8jYMavps-Yq8",
  authDomain: "movie-app-i.firebaseapp.com",
  projectId: "movie-app-i",
  storageBucket: "movie-app-i.appspot.com",
  messagingSenderId: "298163269929",
  appId: "1:298163269929:web:6287fe3a88327e446b0738",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
