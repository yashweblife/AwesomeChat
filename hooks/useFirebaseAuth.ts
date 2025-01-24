import { router } from "expo-router";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";
import useFireStore from "./useFireStore";

export default function useFirebaseAuth(){
    const {auth} = useFirebase()
    const {createNewUserStore} = useFireStore()
    const [user, setUser] = useState(auth.currentUser);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push("/")
            }
        });
    
        return () => unsubscribe();
    }, [auth])
    const loginUser = async (email: string, password: string) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    }
    const createNewUser = async (email: string,name:string, password: string) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await createNewUserStore(user.user.uid, name)
            setUser(user.user);
            return true
        } catch (error) {
            console.error(error);
            return false
        }
    }
    const logoutUser = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error(error);
        }
    }
    
    return {loginUser, createNewUser, logoutUser, user}
}