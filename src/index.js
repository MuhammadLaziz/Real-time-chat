import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyASkamIjtj5U22IVnguiIZe0Lq8TmxOwME",
  authDomain: "samm-7b31b.firebaseapp.com",
  projectId: "samm-7b31b",
  storageBucket: "samm-7b31b.appspot.com",
  messagingSenderId: "898369978099",
  appId: "1:898369978099:web:473e6bc82b293069e9c186",
  measurementId: "G-C30RNTYJFG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp);
const db = getFirestore()
const storage = getStorage()
const provider = new GoogleAuthProvider()

export {auth, storage, db, provider}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
