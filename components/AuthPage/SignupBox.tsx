import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export type SignupBoxProps = {
    setLoginState: () => void;
    callback?: () => void
}
export default function SignupBox({setLoginState, callback}: SignupBoxProps){
    const {createNewUser} = useFirebaseAuth()
    const [emailInput, setEmailInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("")
    const handleSubmitButton = async ()=>{
        if(passwordInput !== confirmPasswordInput){return}
        const didCreateUser = await createNewUser(emailInput, nameInput, passwordInput)
        if(callback){callback()}
        if(didCreateUser){
            router.push("/(auth)")
        }
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
            <TextInput onChangeText={setEmailInput} value={emailInput} mode="outlined" label="Email"/>
            <TextInput onChangeText={setNameInput} value={nameInput} mode="outlined" label="Name"/>
            <TextInput onChangeText={setPasswordInput} value={passwordInput} mode="outlined" label="Password"/>
            <TextInput onChangeText={setConfirmPasswordInput} value={confirmPasswordInput} mode="outlined" label="ConfirmPassword"/>
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