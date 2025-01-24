import { useEffect, useState } from "react";

const list_of_contacts: { id: string, name: string }[] = [
    {
        id: "sdfvvsdf",
        name: "John Doe",
    },
    {
        id: "sdfvvdff",
        name: "John Doe 1",
    },
    {
        id: "sdfsdfdf",
        name: "John Doe 2",
    }
]

const list_of_chats = [
    {
        id: "sdfvvsdf",
        chat: [
            {
                sender: "sdfvvsdf",
                message: "Hello",
            },
            {
                sender: "user",
                message: "Hello",
            },
            {
                sender: "sdfvvsdf",
                message: "How are you?",
            },
            {
                sender: "user",
                message: "I am fine",
            },
            {
                sender: "user",
                message: "How are thing going with your work and family?",
            }
        ]
    }
]

export default function useContactsList() {
    const [contacts, setContacts] = useState<{ id: string, name: string }[]>([]);
    useEffect(() => {
        setContacts(list_of_contacts)
    }, [])
    const [selectedContact, setSelectedContact] = useState(null);
    const getChatById = (id: string) => {
        const chat = list_of_chats.find((chat) => chat.id === id);
        let output: any = []
        if (chat) {
            output = chat.chat
        }
        return output
    }
    const getUserById = (id: string) => {
        const user = list_of_contacts.find((user) => user.id === id);
        return user
    }
    return (
        {
            contacts,
            setSelectedContact,
            selectedContact,
            getChatById,
            getUserById
        }
    )
}