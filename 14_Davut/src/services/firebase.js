import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADYBVn0z0i8ua04v882peDsHDNQGIuVQ4",
  authDomain: "davutcemallioglu-1401a.firebaseapp.com",
  projectId: "davutcemallioglu-1401a",
  storageBucket: "davutcemallioglu-1401a.appspot.com",
  messagingSenderId: "269798048102",
  appId: "1:269798048102:web:cfa2b61f3ef7a7588f88a7",
  measurementId: "G-8JZ0KHL8DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
