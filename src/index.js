import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYCm12NM6KwbVsrFnej2P1i5gqt1_vzdQ",
    authDomain: "braianbechadev.firebaseapp.com",
    projectId: "braianbechadev",
    storageBucket: "braianbechadev.appspot.com",
    messagingSenderId: "490391121478",
    appId: "1:490391121478:web:b4e2c14391a6877bdf6447"
  };
  
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}