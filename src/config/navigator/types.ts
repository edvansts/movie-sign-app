import { NativeStackNavigationProp } from "@react-navigation/native-stack"


export type RootStackParamList =  {
    home: undefined,
    signIn: undefined
}


export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>