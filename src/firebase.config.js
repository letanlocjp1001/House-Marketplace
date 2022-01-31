import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC4Onoqe56Me_eIs9T7udwBOYpCuEdUT34',
  authDomain: 'house-marketplace-64ba3.firebaseapp.com',
  projectId: 'house-marketplace-64ba3',
  storageBucket: 'house-marketplace-64ba3.appspot.com',
  messagingSenderId: '458627408410',
  appId: '1:458627408410:web:fce1d76aec4f73713827a3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
