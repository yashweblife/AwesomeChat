import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "react-native-paper";
import AuthBox from "../components/AuthPage/AuthBox";
export default function AuthPage(){
    const {colors} = useTheme();
    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: colors.background,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <AuthBox />
        </SafeAreaView>
    )
}