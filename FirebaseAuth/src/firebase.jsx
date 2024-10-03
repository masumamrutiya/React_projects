import { initializeApp } from "firebase/app";


const firebaseConfig = {
    
    apiKey: "AIzaSyBEN5clZeU9RYxYR6WME1Bi_7ckHLfBfuY",
  authDomain: "fir-auth-e9bab.firebaseapp.com",
  projectId: "fir-auth-e9bab",
  storageBucket: "fir-auth-e9bab.appspot.com",
  messagingSenderId: "935867992555",
  appId: "1:935867992555:web:da3379f6da1efa5b7371ae"
};

export const app = initializeApp(firebaseConfig);