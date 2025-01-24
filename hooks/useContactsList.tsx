import { useState } from "react";

export default function useContactsList() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    return(
        {
            contacts,
            setSelectedContact,
            selectedContact
        }
    )
}