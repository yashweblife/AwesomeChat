import BasicView from "@/components/Shared/BasicView";
import useContactsList from "@/hooks/useContactsList";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Appbar, Button, Card, FAB, Menu, Modal, Portal, Text, TextInput } from "react-native-paper";

export function AddFAB() {
    const [open, setOpen] = useState(false);
    const [newRoomModal, setNewRoomModal] = useState(false);
    const [newContactModal, setNewContactModal] = useState(false);
    const openNewRoomModal = () => { setNewRoomModal(true) }
    const closeNewRoomModal = () => { setNewRoomModal(false) }
    const openNewContactModal = () => { setNewContactModal(true) }
    const closeNewContactModal = () => { setNewContactModal(false) }
    const handleNewRoomAdd = () => { closeNewRoomModal() }
    const handleNewContactAdd = () => { closeNewContactModal() }
    return (
        <Portal.Host>
            <FAB.Group
                open={open}
                visible
                onStateChange={({ open }) => { setOpen(open) }}
                style={{
                    position: "absolute",
                    margin: 16,
                    right: 0,
                    bottom: 0
                }}
                icon="plus"
                actions={[
                    {
                        icon: "account-plus",
                        label: "New Contact",
                        onPress: openNewContactModal
                    },
                    {
                        icon: "message-text",
                        label: "New Room",
                        onPress: openNewRoomModal
                    }
                ]}
            />
            <Modal
                visible={newRoomModal}
                onDismiss={closeNewRoomModal}
                contentContainerStyle={{
                    padding: 20,
                }}
            >
                <Card>
                    <Card.Title title="New Room" />
                    <Card.Content>
                        <TextInput mode="outlined" label="Room Name" />
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="outlined" onPress={closeNewRoomModal}>Discard</Button>
                        <Button mode="contained" onPress={handleNewRoomAdd}>Add</Button>
                    </Card.Actions>
                </Card>
            </Modal>
            <Modal
                visible={newContactModal}
                onDismiss={closeNewContactModal}
                contentContainerStyle={{
                    padding: 20,
                }}
            >
                <Card>
                    <Card.Title title="New Contact" />
                    <Card.Content>
                        <TextInput mode="outlined" label="Contact Name" />
                        <TextInput mode="outlined" label="Contact PID" />
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="outlined" onPress={closeNewContactModal}>Discard</Button>
                        <Button mode="contained" onPress={handleNewContactAdd}>Add</Button>
                    </Card.Actions>
                </Card>
            </Modal>
        </Portal.Host>
    )
}
export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () => { setMenuOpen(true) }
    const closeMenu = () => { setMenuOpen(false) }
    const settingsButton = () => {
        closeMenu();
        router.push("/settings")
    }
    const profileButton = () => {
        closeMenu();
        router.push("/profile")
    }
    return (
        <Appbar.Header>
            <Appbar.Content title="Dashboard" />

            <Menu
                visible={menuOpen}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
            >
                <Menu.Item title="Settings" onPress={settingsButton} />
                <Menu.Item title="Profile" onPress={profileButton} />
            </Menu>
        </Appbar.Header>
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
            <Header />
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