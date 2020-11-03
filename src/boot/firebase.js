import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

let firebaseApp = firebase
  .initializeApp({
    apiKey: 'AIzaSyBovPh5uVnlBOm-0FlO3omm5h2Nsd9GQDU',
    authDomain: 'quizz-bd6b1.firebaseapp.com',
    databaseURL: 'https://quizz-bd6b1.firebaseio.com',
    projectId: 'quizz-bd6b1',
    storageBucket: 'quizz-bd6b1.appspot.com',
    messagingSenderId: '630346027995',
    appId: '1:630346027995:web:30722763c8e9aab9ac4dfe',
    measurementId: 'G-0CKNFBF9ZC'
  })
export const db = firebaseApp.firestore()
export const app = firebaseApp
export const storage = firebaseApp.storage()
