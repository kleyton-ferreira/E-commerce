import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAMz3n3Voqf3oD4r_V8pp6xNialUlFldi0',
  authDomain: 'e-commerce-club.firebaseapp.com',
  projectId: 'e-commerce-club',
  storageBucket: 'e-commerce-club.firebasestorage.app',
  messagingSenderId: '699694059082',
  appId: '1:699694059082:web:1eb944e3afb97259fb20b3'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
