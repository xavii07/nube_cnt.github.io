import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDl1A-dH8W2ngxChfLbYPIug0qKWUZYook",
    authDomain: "graphical-balm-404517.firebaseapp.com",
    databaseURL: "https://graphical-balm-404517-default-rtdb.firebaseio.com",
    projectId: "graphical-balm-404517",
    storageBucket: "graphical-balm-404517.appspot.com",
    messagingSenderId: "111611790604",
    appId: "1:111611790604:web:2780dbcc05b850ebaef529"
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);