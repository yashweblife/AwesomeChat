import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export type LoginBoxProps = {
    setLoginState: () => void;
    callback?: () => void
}
export default function LoginBox({ setLoginState, callback }: LoginBoxProps) {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const { loginUser } = useFirebaseAuth()
    const handleSubmitButton = async () => {
        const didLogin = await loginUser(emailInput, passwordInput)
        if (callback) { callback() }
        if (didLogin) {
            router.push("/(auth)")
        }
    }
    return (
        <View
            style={{
                width: "100%",
                padding: 20,
                boxShadow: "0 0 2em 0.2em rgba(255,255,255, 0.2)",
                borderRadius: 10,
                flex: 1,
                gap: 20
            }}
        >
            <Text
                style={{
                    fontSize: 20
                }}
            >Login</Text>
            <TextInput onChangeText={setEmailInput} value={emailInput} mode="outlined" label="Email" />
            <TextInput onChangeText={setPasswordInput} value={passwordInput} mode="outlined" label="Password" />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Button mode="outlined" onPress={setLoginState}>Create Account</Button>
                <Button mode="contained" onPress={handleSubmitButton}>Login</Button>
            </View>
        </View>
    )
}
