import BasicView from "@/components/Shared/BasicView";
import useContactsList from "@/hooks/useContactsList";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Appbar, Icon, Text, TextInput } from "react-native-paper";
export default function ChatPage() {
    const { id } = useLocalSearchParams();
    const { getChatById, getUserById } = useContactsList();
    const [recipient, setRecipient] = useState({ name: '' });
    const [chat, setChat] = useState([]);
    useEffect(() => {
        const chat = getChatById(id as string);
        const user: any = getUserById(id as string);
        if (user) { setRecipient(user) }
        if (chat.length > 0) { setChat(chat) }
    }, [])
    return (
        <BasicView>
            <Stack.Screen name="chat" options={{ headerShown: false }} />
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { router.back() }} />
                <Appbar.Content title={recipient.name} />
                <Appbar.Action icon="menu" onPress={() => { }} />
            </Appbar.Header>
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        gap: 30,
                        padding: 20
                    }}
                >
                    {
                        chat.map((data: any, index) =>
                            data.sender === 'user' ?
                                <View key={index} style={{
                                    padding: 10,
                                    boxShadow: "0 0 0.1em 0.1em rgba(255,255,255, 0.2)",
                                    borderRadius: 10,
                                    alignSelf: 'flex-end',
                                    maxWidth: '60%'
                                }}>
                                    <Text
                                        style={{
                                            wordWrap: 'break-word',
                                        }}
                                    >{data.message}</Text>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            transform: [{ translateY: -10 }, { translateX: 10 }],
                                        }}
                                    >
                                        <Icon source="check" size={20} />
                                    </View>
                                </View>
                                :
                                <View key={index} style={{
                                    padding: 10,
                                    boxShadow: "0 0 0.1em 0.1em rgba(255,255,255, 0.2)",
                                    borderRadius: 10,
                                    alignSelf: 'flex-start',
                                    maxWidth: '60%'
                                }}>
                                    <Text
                                        style={{
                                            wordWrap: 'break-word',
                                        }}
                                    >{data.message}</Text>
                                </View>
                        )
                    }
                </View>
            </ScrollView>
            <KeyboardAvoidingView behavior="position" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                width: "100%"
            }}>
                <TextInput
                    style={{
                        width: "100%"
                    }}
                    mode="outlined"
                    label="Send Message"
                    right={<TextInput.Icon icon="send" onPress={() => { }} />}
                />
            </KeyboardAvoidingView>
        </BasicView>
    );
}