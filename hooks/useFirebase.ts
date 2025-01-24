import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
export default function useFirebase() {
    const firebaseConfig = {
        apiKey: process.env.EXPO_PUBLIC_API_KEY,
        authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
        storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.EXPO_PUBLIC_APP_ID,
        measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    return {app, auth, db};
}