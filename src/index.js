import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createContext } from 'react'

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp = ({
  apiKey: "AIzaSyAUnJfPqJJxFg6w7fRwiqcIB5vo9T4odLM",
  authDomain: "real-time-chat-55577.firebaseapp.com",
  projectId: "real-time-chat-55577",
  storageBucket: "real-time-chat-55577.appspot.com",
  messagingSenderId: "800653128486",
  appId: "1:800653128486:web:913cb443bd8205ff9587e7",
  measurementId: "G-2ZP1BCMS1K"
});


export const Context = createContext(null)
const firestore = firebase.firestore();
const auth = firebase.auth();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
