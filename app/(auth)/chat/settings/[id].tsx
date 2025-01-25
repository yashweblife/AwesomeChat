import BasicView from "@/components/Shared/BasicView";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Appbar, Text } from "react-native-paper";
export default function ChatSettingsPage() {
    const { id } = useLocalSearchParams();
    return (
        <BasicView>
            <Stack.Screen name="chat/settings" options={{ headerShown: false }} />
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { router.back() }} />
                <Appbar.Content title="Settings" /> 
            </Appbar.Header>
            <Text>ChatSettingsPage {id}</Text>
        </BasicView>
    )
}