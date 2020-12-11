import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

let firebaseApp = firebase.initializeApp(process.env.DATABASE)
export const db = firebaseApp.firestore()
export const app = firebaseApp
export const storage = firebaseApp.storage()
