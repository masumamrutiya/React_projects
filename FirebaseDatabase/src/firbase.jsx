import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsAotx-7yn5odyDjmLxC47kXIfEYpl5yo",
  authDomain: "mybook-app-2486d.firebaseapp.com",
  projectId: "mybook-app-2486d",
  storageBucket: "mybook-app-2486d.appspot.com",
  messagingSenderId: "1009593724268",
  appId: "1:1009593724268:web:00ae01da311ddca76a1749",
  databaseURL:"https://mybook-app-2486d-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);

