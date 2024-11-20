import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { initializeFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBZqxJV6yi5yNAWmbX0wO3OZW-V8BzLwgQ',
    authDomain: 'lili-pizza.firebaseapp.com',
    projectId: 'lili-pizza',
    storageBucket: 'lili-pizza.appspot.com',
    messagingSenderId: '705807171176',
    appId: '1:705807171176: android: 089f58bb5207b384a345dd',
}

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
})
