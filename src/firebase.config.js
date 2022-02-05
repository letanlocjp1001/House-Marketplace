// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUqByHWPFd6ds1G4NlTCmGzzLfvHlGzjw',
  authDomain: 'house-e32dc.firebaseapp.com',
  projectId: 'house-e32dc',
  storageBucket: 'house-e32dc.appspot.com',
  messagingSenderId: '1094998439990',
  appId: '1:1094998439990:web:3990db4f559e4772068097',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
