// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABlqXNPbjMYNKcXt0f4QXxqNC_6ojlt8k',
  authDomain: 'world-of-varieties.firebaseapp.com',
  projectId: 'world-of-varieties',
  storageBucket: 'world-of-varieties.firebasestorage.app',
  messagingSenderId: '929155970871',
  appId: '1:929155970871:web:3a908c74a0fa74f2fc4cb2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)

export { app, database, storage }
