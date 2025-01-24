import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export type SignupBoxProps = {
    setLoginState: () => void;
    callback?: () => void
}
export default function SignupBox({setLoginState, callback}: SignupBoxProps){
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