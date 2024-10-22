/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
        interface RootParams extends RootStackParamsList {}
    }
}

export type RootStackParamsList = {
    Home: undefined
    UserSearch: undefined,
    RepoSearch: undefined,
    DetailsUser: { searchQuery: string }
}
export type RootStackScreenProps<Screen extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, Screen>;