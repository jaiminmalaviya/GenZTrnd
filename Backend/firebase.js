// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyCj_qZAdmsrxXHwJjhsbOQ0Pe_EVB0C__Y',
   authDomain: 'genztrnd.firebaseapp.com',
   projectId: 'genztrnd',
   storageBucket: 'genztrnd.appspot.com',
   messagingSenderId: '807510605213',
   appId: '1:807510605213:web:2f4abe9be992ffaed68374',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
