import BasicView from "@/components/Shared/BasicView";
import useContactsList from "@/hooks/useContactsList";
import { router, Stack } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
export default function DashboardPage() {
    const { contacts, setSelectedContact } = useContactsList();
    const handleSelectContact = (id:string) => {
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
        </BasicView>
    );
}