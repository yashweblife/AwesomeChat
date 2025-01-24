import { router, Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export type LoginBoxProps = {
    setLoginState: () => void;
    callback?: () => void
}
export function LoginBox({setLoginState, callback}: LoginBoxProps){
    const handleSubmitButton = ()=>{
        if(callback){callback()}
        router.push("/(auth)")
    }
    return(
        <View
            style={{
                width:"100%",
                padding:20,
                boxShadow:"0 0 2em 0.2em rgba(255,255,255, 0.2)",
                borderRadius:10,
                flex:1,
                gap:20
            }}
        >
            <Text
                style={{
                    fontSize:20
                }}
            >Login</Text>
            <TextInput mode="outlined" label="Email"/>
            <TextInput mode="outlined" label="Password"/>
            <View 
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}
            >
                <Button mode="outlined" onPress={setLoginState}>Create Account</Button>
                <Button mode="contained" onPress={handleSubmitButton}>Login</Button>
            </View>
        </View>
    )
}
export type SignupBoxProps = {
    setLoginState: () => void;
    callback?: () => void
}
export function SignupBox({setLoginState, callback}: SignupBoxProps){
    const handleSubmitButton = ()=>{
        if(callback){callback()}
        router.push("/(auth)")
    }
    return(
        <View
            style={{
                width:"100%",
                padding:20,
                boxShadow:"0 0 2em 0.2em rgba(255,255,255, 0.2)",
                borderRadius:10,
                flex:1,
                gap:20
            }}
        >
            <Text
                style={{
                    fontSize:20
                }}
            >Create Account</Text>
            <TextInput mode="outlined" label="Email"/>
            <TextInput mode="outlined" label="Name"/>
            <TextInput mode="outlined" label="Password"/>
            <TextInput mode="outlined" label="ConfirmPassword"/>
            <View 
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}
            >
                <Button mode="outlined" onPress={setLoginState}>Login</Button>
                <Button mode="contained" onPress={handleSubmitButton}>Create Account</Button>
            </View>
        </View>
    )
}
export function AuthBox(){
    const [loginState, setLoginState] = useState(false);
    return (
        <View
            style={{
                width:"100%",
                padding:20,
            }}
        >
            {loginState ? 
            <LoginBox 
                setLoginState={
                    ()=>setLoginState(false)
                } 
            />
            : 
            <SignupBox 
                setLoginState={
                    ()=>setLoginState(true)
                }
            />}
        </View>
    )
}
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