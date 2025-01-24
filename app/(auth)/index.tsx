import BasicView from "@/components/Shared/BasicView";
import useContactsList from "@/hooks/useContactsList";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Appbar, FAB, Portal, Text } from "react-native-paper";

export function AddFAB() {
    const [open, setOpen] = useState(false);

    return (
        <Portal>
            <FAB.Group
                open={open}
                visible
                onStateChange={({ open }) => {setOpen(open) }}
                style={{
                    position: "absolute",
                    margin: 16,
                    right: 0,
                    bottom: 0
                }}
                icon="plus"
                onPress={() => { }}
                actions={[
                    {
                        icon: "account-plus",
                        label: "New Contact",
                        onPress: () => { }
                    },
                    {
                        icon: "message-text",
                        label: "New Room",
                        onPress: () => { }
                    }
                ]}
            />
        </Portal>
    )
}
export default function DashboardPage() {
    const { contacts } = useContactsList();
    const handleSelectContact = (id: string) => {
        router.push(`/chat/${id}`)
    }
    return (
        <BasicView>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Appbar.Header>
                <Appbar.Content title="Dashboard" />
                <Appbar.Action icon="menu" onPress={() => { }} />
            </Appbar.Header>
            <ScrollView>
                <View style={{
                    flex: 1,
                    gap: 10,
                    padding: 20
                }}>
                    {contacts.map((contact) => (
                        <Pressable
                            key={contact.id}
                            style={{
                                padding: 20,
                                boxShadow: "0 0 0.1em 0.1em rgba(255,255,255, 0.2)",
                                borderRadius: 10,
                            }}
                            onPress={() => handleSelectContact(contact.id)}
                        >
                            <Text>{contact.name}</Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
            <AddFAB />
        </BasicView>
    );
}