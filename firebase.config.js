import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAA69aggCWvD9iZKQQ_ARiDj7k8KzIq98c",
  authDomain: "crudify-bc6fc.firebaseapp.com",
  databaseURL: "https://crudify-bc6fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crudify-bc6fc",
  storageBucket: "crudify-bc6fc.firebasestorage.app",
  messagingSenderId: "986198276631",
  appId: "1:986198276631:web:88b2cb81fa75f5a7fe3a52"
};


const app = initializeApp(firebaseConfig);
export default  firebaseConfig;