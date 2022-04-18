
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjXnkV7J3nFTOtfvOwJ2d5GIjcenhxBiU",
  authDomain: "psychological-services-b5361.firebaseapp.com",
  projectId: "psychological-services-b5361",
  storageBucket: "psychological-services-b5361.appspot.com",
  messagingSenderId: "697836237473",
  appId: "1:697836237473:web:c7490738ffa135485cf6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;