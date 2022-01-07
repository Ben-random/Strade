import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBgnwvw0NWY3h-IJdOqEjDQAYKnY6denaQ",
    authDomain: "strade-6f459.firebaseapp.com",
    databaseURL: "https://strade-6f459-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "strade-6f459",
    storageBucket: "strade-6f459.appspot.com",
    messagingSenderId: "613259341650",
    appId: "1:613259341650:web:69832d50f0388b4711148b",
    measurementId: "G-JG9P57757Q"
};
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics}