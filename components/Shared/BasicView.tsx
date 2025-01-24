import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BasicView({children}:{children:React.ReactNode}) {
    const {colors} = useTheme();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.background
            }}
        >
            {children}
        </SafeAreaView>
    )
}