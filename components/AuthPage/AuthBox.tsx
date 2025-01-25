import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox";

export default function AuthBox() {
    const [loginState, setLoginState] = useState(true);
    const {user} = useFirebaseAuth();
    if(user) {
        router.push("/(auth)")
    }
    return (
        <View
            style={{
                width: "100%",
                padding: 20,
            }}
        >
            {loginState ?
                <LoginBox
                    setLoginState={
                        () => setLoginState(false)
                    }
                />
                :
                <SignupBox
                    setLoginState={
                        () => setLoginState(true)
                    }
                />}
        </View>
    )
}