import { generateID } from "@/lib/utils";
import { doc, setDoc } from "firebase/firestore";
import useFirebase from "./useFirebase";

export default function useFireStore() {
    const { db } = useFirebase()
    const createNewUserStore = async (id: string, name: string) => {
        try {
            const newUserData = {
                pid: generateID(),
                name: name,
                contacts: [],
                rooms: [],
            }
            await setDoc(doc(db, "users", id), newUserData);
        } catch (error) {
            console.log(error)
        }
    }
    const createChatRoom = async (id: string, email: string, password: string) => { }
    return { createNewUserStore, createChatRoom }
}