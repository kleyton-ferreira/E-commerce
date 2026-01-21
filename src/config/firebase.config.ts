import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBKeXyIth7K2pXjc5r7ZvQexwg8SHPwUDk',
  authDomain: 'e-commerce-web-ec660.firebaseapp.com',
  projectId: 'e-commerce-web-ec660',
  storageBucket: 'e-commerce-web-ec660.firebasestorage.app',
  messagingSenderId: '737507744582',
  appId: '1:737507744582:web:480447fe81e31b9609e347'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
