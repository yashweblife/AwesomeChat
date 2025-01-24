import { Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";
export default function DashboardPage() {
    return (
        <View>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Text>DashboardPage</Text>
        </View>
    );
}