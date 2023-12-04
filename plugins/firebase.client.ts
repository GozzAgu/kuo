import { initializeApp } from 'firebase/app'
import { getAuth, type Auth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.FB_API_KEY,
    authDomain: "kuosolutions-fd4b7.firebaseapp.com",
    projectId: "kuosolutions-fd4b7",
    storageBucket: "kuosolutions-fd4b7.appspot.com",
    messagingSenderId: "945826811797",
    appId: "1:945826811797:web:d20074cda9b4bd2238709c",
    measurementId: "G-T7C3Y011EE"
  };

  const app = initializeApp(firebaseConfig)

  console.log(app)
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)

  nuxtApp.vueApp.provide('firestore', firestore)
  nuxtApp.provide('firestore', firestore)
})
